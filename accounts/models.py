from django.db import models
from django.contrib.auth.models import (BaseUserManager, AbstractBaseUser)

# Create your models here.

class MyUserManager(BaseUserManager):
    def create_user(self, email, first_name, last_name, class_status, password=None):
        """
        Creates and saves a user with the given email, name, class,status and password.

        """
        if not email:
            raise ValueError('Users must have an email address')
        user =self.model(email=self.normalize_email(email), first_name=first_name, last_name=last_name, class_status=class_status,)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self,  email, first_name, last_name, class_status, password=None):
        """
        Creates and saves a superuser with the given email, name, class,status and password.

        """
        user=self.create_user(email, first_name=first_name, last_name=last_name, class_status=class_status,password=password)
        
        user.is_admin=True
        user.is_verified=True
        user.save(using=self._db)
        return user
        

class MyUser(AbstractBaseUser):
    #students, alumni, others, faculty/staff, parents
    class_list=[
            ("student", "Student"),
            ("faculty/staff", "Faculty/Staff"),
            ("parents", "Parents"),
            ("alumni", "Alumni"),
            ("others", "Others"),
            ]
    email=models.EmailField(verbose_name='email address', max_length=255,unique=True,)
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    class_status=models.CharField(max_length=20, choices=class_list, default="student")
    is_active=models.BooleanField(default=True)
    is_admin=models.BooleanField(default=False)
    is_verified=models.BooleanField(default=False)
    
    objects=MyUserManager()
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=['first_name', 'last_name', 'class_status']
    
    def __str__(self):
        return f"{self.email} with name {self.first_name} {self.last_name}."
    
    def has_perm(self, perm, obj=None):
        "Does the user have a specific permission?" #mostly yes.
        
        return True

    def has_module_perms(self, app_label):
        return True

    @property 
    def is_staff(self):
        "Is the user a member of staff?"
        # Simplest possible answer: All admins are staff

        return self.is_admin
    

