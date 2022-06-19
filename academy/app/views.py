from django.shortcuts import render
from .models import News
# Create your views here.

def fronthome(request):
    cours = News.objects.all()
    return render(request, 'index.html', {'Course': cours})


def aboutpage(request):
    return render(request, 'about-us.html')


def contactpage(request):
    return render(request, 'contact.html')