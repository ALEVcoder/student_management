from django.urls import path, include
from .views import *
urlpatterns = [
    path('', fronthome, name='fronthome'),
    path('about/', aboutpage, name='about'),
    path('contact/', contactpage, name='contact'),
]