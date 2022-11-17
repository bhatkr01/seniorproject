from rest_framework import serializers
from .models import MyUser
from django.utils.encoding import smart_str, force_str, smart_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from rest_framework.exceptions import AuthenticationFailed
from rest_framework_simplejwt.tokens import RefreshToken, TokenError

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model=MyUser
        fields=['email', 'first_name', 'last_name', 'class_status','password']
        extra_kwargs={'password':{'write_only':True}}

    def create(self, validated_data):
        password=validated_data.pop('password', None)
        instance=self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class ResetPasswordSerializer(serializers.Serializer):
    email=serializers.EmailField()

    class Meta:
        fields=['email']

class SetNewPasswordSerializer(serializers.Serializer):
    password=serializers.CharField(write_only=True)
    token=serializers.CharField(write_only=True)
    uidb64=serializers.CharField(write_only=True)
    class Meta:
        fields=['password', 'token', 'uidb64']
    
    def validate(self, attrs):
        try:
            password=attrs.get('password')
            token=attrs.get('token')
            uidb64=attrs.get('uidb64')
            id=force_str(urlsafe_base64_decode(uidb64))
            user=MyUser.objects.get(id=id)
            if not PasswordResetTokenGenerator().check_token(user, token):
                return AuthenticationFailed('The reset link is invalid', 401)
            user.set_password(password)
            user.save()
            return user
        except Exception as e:
                return AuthenticationFailed('The reset link is invalid', 401)

        return super().validate(attrs)

class LogoutSerializer(serializers.Serializer):
    refresh=serializers.CharField()

    def validate(self, attrs):
        self.token = attrs['refresh']
        return attrs

    def save(self, **kwargs):
        try:
            RefreshToken(self.token).blacklist()
        except TokenError:
            self.fail('bad_token')

