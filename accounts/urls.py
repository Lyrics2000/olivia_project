
from django.contrib import admin
from django.urls import path,include
from .views import (signInClient,
                    signUpClient,
                    signInTechnician,
                    signUpTechnician)

app_name = 'accounts'


urlpatterns = [
    
    path('',signInClient, name = "client_signin"),
    path('client/signUp/',signUpClient, name = "client_signup"),
    path('technician/signIn/',signInTechnician, name = "technician_signin"),
    path('technician/signUp/',signUpTechnician, name = "technician_signup"),
    
   
]