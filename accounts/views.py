from django.shortcuts import render, redirect

from .forms import RegisterForm,LogiForm
from .models import CustomUser
from django.contrib.auth import authenticate,login




def signInClient(request):
    login_form = LogiForm(request.POST or None)
    context = {
        'login' : login_form
    }
    next = request.GET.get('next')
    next_post = request.GET.get('next')
    redirect_path = next or next_post or None
    if login_form.is_valid:
        email = request.POST.get("email")
        password = request.POST.get('Password')
        print(email)
        print(password)
        user = authenticate(request,username = email, password = password )
        print(user)
        if user is not None:
            login(request,user)
            return redirect("mainapp:index_page")
    
    return render(request,'client_signin.html',context)



def signUpClient(request):
    form = RegisterForm(request.POST or None)
    context = {
        'form' : form
    }
    
    next = request.GET.get('next')
    
    
    if form.is_valid:
        if request.POST:
            firstName = request.POST.get("firstName")
            lastName = request.POST.get("lastName")

            email = request.POST.get("email")
            password = request.POST.get("password")
            user = CustomUser.objects.create_user( email = email , password = password)
            user.last_name = lastName
            user.first_name = firstName
            user.save()
            
            return redirect("mainapp:index_page")
            
    return render(request,'Client_signup.html',context)






def signInTechnician(request):
    login_form = LogiForm(request.POST or None)
    context = {
        'login' : login_form
    }
    next = request.GET.get('next')
    next_post = request.GET.get('next')
    redirect_path = next or next_post or None
    if login_form.is_valid:
        email = request.POST.get("email")
        password = request.POST.get('Password')
        print(email)
        print(password)
        user = authenticate(request,username = email, password = password )
        print(user)
        if user is not None:
            login(request,user)
            return redirect("mainapp:dashbord")
    
    return render(request,'technician_signin.html',context)


def signUpTechnician(request):
    form = RegisterForm(request.POST or None)
    context = {
        'form' : form
    }
    
    next = request.GET.get('next')
    
    
    if form.is_valid:
        if request.POST:
            firstName = request.POST.get("firstName")
            lastName = request.POST.get("lastName")

            email = request.POST.get("email")
            print(email,"email id placed")
            request.session['mtech_id'] = email
            password = request.POST.get("password")
            user = CustomUser.objects.create_user( email = email , password = password)
            user.last_name = lastName
            user.first_name = firstName
            user.save()
            
            
            emaill  = request.session.get('mtech_id')
            print(emaill,"najhfuhuj")
            print("Okay you fuck you")
            
            return redirect("mainapp:technician_dashbord")
            
    return render(request,'technician_signup.html',context)


