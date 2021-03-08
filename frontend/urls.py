from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('demo', index),
    path('signup', index),
    path('signin', index)
]
