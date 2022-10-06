from django.shortcuts import render
from rest_framework import viewsets
from products.serializers import ProductSerializer
from products.models import Product
from products.permissions import SuperUserAndAuthor

# Create your views here.


class ProductModelViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    permission_classes=[SuperUserAndAuthor]
    serializer_class=ProductSerializer
    queryset=Product.objects.all()
