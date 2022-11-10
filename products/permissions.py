from rest_framework import permissions

class SuperUserAndAuthor(permissions.BasePermission):
    edit_methods=("POST","PUT", "PATCH" ,"DELETE")
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        else:
            if not request.user.is_authenticated:
                return False
            return True
    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        if request.method in self.edit_methods:
            if request.user.is_authenticated:
               if request.user.email==obj.product_author.email or request.user.is_staff:
                   return True
            else:
                return False
        return False
