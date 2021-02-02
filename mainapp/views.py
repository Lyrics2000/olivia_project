from django.shortcuts import render
from django.http import HttpResponse
import datetime
from .models import Cow,Chicken
from django.db.models import Sum

# Create your views here.

def index(request):
    total_cows = Cow.objects.aggregate(Sum('milk_produced'))
    farm_product_consumed = Cow.objects.aggregate(Sum('product_consumed'))
    number_of_eggs_laid = Chicken.objects.aggregate(Sum("egg_laid")) 
    chicken_total_firm_product_consumed = Chicken.objects.aggregate(Sum("product_consumed")) 
    print(number_of_eggs_laid)


    context = {
        "total_cows":total_cows,
        "egg_laid_sum" : number_of_eggs_laid,
        'farm_product_total_cows':farm_product_consumed,
        'chicken_product_consumed':chicken_total_firm_product_consumed
    }

    return render(request,'index.html',context)
