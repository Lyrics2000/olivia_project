
from django.contrib import admin
from django.urls import path
from .views import index,enter_data

app_name = 'mainapp'


urlpatterns = [
    path('',index, name = "index_page"),
    path('forms',enter_data, name = "enter_data")
    
   
]