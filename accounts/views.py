from django.shortcuts import render
from rest_framework import viewsets
from accounts.serializers import AccountSerializer, ResetPasswordSerializer, SetNewPasswordSerializer,LogoutSerializer
from accounts.models import MyUser
from accounts.permissions import SuperUserAndAuthor
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.sites.shortcuts import get_current_site
from django.core.mail import send_mail
from django.conf import settings
from django.urls import reverse
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
import jwt
from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import redirect

# Create your views here.

class AccountModelViewSet(viewsets.ModelViewSet):

    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    permission_classes=[SuperUserAndAuthor]
    serializer_class=AccountSerializer
    queryset=MyUser.objects.all()

    def create(self, request):
        user=request.data
        serializer=self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        user_data=serializer.data
        user=MyUser.objects.get(email=user_data['email'])
        token=RefreshToken.for_user(user).access_token
        current_site=get_current_site(request).domain
        relativeLink=reverse('email-verify')
        absurl='http://'+current_site+relativeLink+"?token="+str(token)
        email_body="Hi " + user.first_name+'\n Please use the link below to verify your account: \n'+absurl
        send_mail('Verify Your Email Address', email_body, settings.EMAIL_HOST_USER, [user.email])
        return Response(user_data, status=status.HTTP_200_OK)


class VerifyEmail(generics.GenericAPIView):
    def get(self, request):
        token=request.GET.get('token')
        try:
            payload=jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user=MyUser.objects.get(id=payload['user_id'])
            if not user.is_verified:
                user.is_verified=True
                user.save()
            return redirect(settings.FRONTEND_URL)
        except jwt.ExpiredSignatureError as identified:
            return Response({'Error':'Activation link has already Expired'}, status=status.HTTP_400_BAD_REQUEST)
        except jwt.exceptions.DecodeError as identified:
            return Response({'Error':'Invalid Token'}, status=status.HTTP_400_BAD_REQUEST)
        


class RequestResetPassword(generics.GenericAPIView):
    serializer_class=ResetPasswordSerializer

    def post(self, request):
        serializer=self.serializer_class(data=request.data)
        email=request.data['email'] 
        if MyUser.objects.filter(email=email).exists():
            user=MyUser.objects.get(email=email)
            uidb64=urlsafe_base64_encode(smart_bytes(user.id))
            token=PasswordResetTokenGenerator().make_token(user)
            current_site=get_current_site(request).domain
            relativeLink=reverse('password-reset-token', kwargs={'uidb64':uidb64, 'token':token})
            # absurl='http://'+current_site+relativeLink+"?token="+str(token)
            absurl=settings.FRONTEND_URL+"/reset-password"+"?uidb64="+str(uidb64)+"&token="+str(token)
            email_body="Hi " + user.first_name+'\n Please use the link below to reset your password: \n'+absurl
            send_mail('Reset Your Password Address', email_body, settings.EMAIL_HOST_USER, [user.email])
            return Response({'Success':'We have sent you a link to reset your password'}, status=status.HTTP_200_OK)
        else:
            return Response({'Error':'Email Does not exist. Please SignUp'}, status=status.HTTP_400_BAD_REQUEST)


class ResetPasswordToken(generics.GenericAPIView):
    def get(self, request, uidb64, token):
        try:
            id=smart_str(urlsafe_base64_decode(uidb64))
            user=MyUser.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                return Response({'Error':'Token is not valid, please request a new one'}, status=status.HTTP_401_UNAUTHORIZED)
            return Response({'Success':True, 'message': 'Credentials Valid', 'uidb64':uidb64, 'token':token}, status=status.HTTP_200_OK)
                
        except DjangoUnicodeDecodeError as identified:
            return Response({'Error':'Token is not valid, please request a new one'}, status=status.HTTP_401_UNAUTHORIZED)

class SetNewPassword(generics.GenericAPIView):
    serializer_class=SetNewPasswordSerializer
    def patch(self, request,*args, **kwargs):
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response({'Success':'Password Reset Success'}, status=status.HTTP_200_OK)

        
class LogoutAPIView(generics.GenericAPIView):
    serializer_class=LogoutSerializer
    permission_class=(IsAuthenticated,)
    def post(self, request):
        serializer=self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
