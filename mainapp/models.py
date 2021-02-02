from django.db import models
from django.conf import settings

# Create your models here.

class Cow(models.Model):
    user_cow = models.ForeignKey(settings.AUTH_USER_MODEL,default=1,on_delete=models.CASCADE)
    product_consumed = models.DecimalField(max_digits=10,decimal_places=2)
    milk_produced = models.DecimalField(max_digits=10,decimal_places=2)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.product_consumed)
    

class Chicken(models.Model):
    user_chicken = models.ForeignKey(settings.AUTH_USER_MODEL,default=1,on_delete=models.CASCADE)
    egg_laid = models.IntegerField()
    product_consumed = models.DecimalField(max_digits=10,decimal_places=2)
    date_updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.egg_laid)
    

