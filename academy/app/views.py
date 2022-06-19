from django.shortcuts import render
from .models import News
# Create your views here.

def fronthome(request):
    cours = News.objects.all()
    return render(request, 'index.html', {'Course': cours})