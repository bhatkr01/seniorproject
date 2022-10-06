from django.shortcuts import render
from rest_framework import viewsets
from accounts.serializers import AccountSerializer
from accounts.models import MyUser
from accounts.permissions import SuperUserAndAuthor

# Create your views here.

class AccountModelViewSet(viewsets.ModelViewSet):

    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    permission_classes=[SuperUserAndAuthor]
    serializer_class=AccountSerializer
    queryset=MyUser.objects.all()
