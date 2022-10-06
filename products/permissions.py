from rest_framework import permissions

class SuperUserAndAuthor(permissions.BasePermission):
    edit_methods=("PUT", "PATCH" ,"DELETE")
    def has_permission(self, request, view):
        return True
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        if request.method in self.edit_methods:
            if request.user.is_authenticated:
               if request.user==obj.product_author or request.user.is_staff:
                   return True
            else:
                return False
        return False
