from django.urls import path, include
from .views import ProductModelViewSet
from rest_framework.routers import DefaultRouter


'''
product_list=ProductViewSet.as_view({
    'get':'list',
    'post': 'create'
    })
product_detail=ProductViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete':'destroy'
    })


urlpatterns = format_suffix_patterns([
        path('', api_root),
        path('products/', product_list, name="product-list"),
        path('products/<int:pk>/' product_detail, name="product-detail"),
        ])

'''

#using routers

router=DefaultRouter()
router.register(r'', ProductModelViewSet, basename="products")

urlpatterns=[
        path('', include(router.urls)),
        ]

