from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ProductSerializer
from .models import Product

# Create your views here.


class ProductModelViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.

    """
    serializer_class=ProductSerializer
    queryset=Product.objects.all()
