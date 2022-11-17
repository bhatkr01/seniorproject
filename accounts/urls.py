from django.urls import path, include
from accounts.views import AccountModelViewSet, VerifyEmail, ResetPasswordToken, RequestResetPassword, SetNewPassword,LogoutAPIView
from rest_framework.routers import DefaultRouter

#using routers

router=DefaultRouter()
router.register(r'', AccountModelViewSet, basename="accounts")

urlpatterns=[
        path('email-verify/', VerifyEmail.as_view(), name="email-verify"),
        path('request-password-reset/', RequestResetPassword.as_view(), name="request-password-reset"),
        path('password-reset-token/<uidb64>/<token>', ResetPasswordToken.as_view(), name="password-reset-token"),
        path('new-password/<uidb64>/<token>', SetNewPassword.as_view(), name="new-password"),
        path('logout/', LogoutAPIView.as_view(), name="logout"),
        ]
urlpatterns+=router.urls
