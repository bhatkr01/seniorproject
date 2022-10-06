from django.db import models
from accounts.models import MyUser

# Create your models here.
class Product(models.Model):
    #first one is the modal value, second one is user readable data
    actions_list=[
            ("SELL", "SELL"),
            ("DONATE","DONATE")
            ]
    conditions_list=[
            ("NEW", "NEW"),
            ("USED-GOOD", "USED-GOOD"),
            ("USED-ACCEPTABLE", "USED-ACCEPTABLE"),
            ]
    product_author=models.ForeignKey(MyUser, on_delete=models.CASCADE)
    product_name=models.CharField(max_length=200)
    product_picture=models.ImageField(upload_to="images") #upload to adds subfolder in media directory
    product_description=models.CharField(max_length=1000)
    product_condition=models.CharField(max_length=20, choices=conditions_list, default="USED-GOOD")
    product_action=models.CharField(max_length=6, choices=actions_list, default="SELL",)
    product_price=models.PositiveSmallIntegerField()
    product_date=models.DateField()

    def __str__(self):
        return f"{self.product_name}, {self.product_description}, {self.product_action}, {self.product_price}"

    
