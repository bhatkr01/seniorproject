from django.urls import path, include
from .views import AccountModelViewSet
from rest_framework.routers import DefaultRouter

#using routers

router=DefaultRouter()
router.register(r'', AccountModelViewSet, basename="accounts")

urlpatterns=[
        path('', include(router.urls)),
        ]

