from django.urls import path
from . import views

urlpatterns = [
    path('posts/', views.BlogPostListCreate.as_view(), name='blogpost-list'),
    # Add other URL patterns here
]
