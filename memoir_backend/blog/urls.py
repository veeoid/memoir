# blog/urls.py
from django.urls import path
from .views import BlogPostListCreate, BlogPostDetail  # Import the view classes

urlpatterns = [
    path('posts/', BlogPostListCreate.as_view(), name='blogpost-list'),
    path('posts/<int:pk>/', BlogPostDetail.as_view(), name='blogpost-detail'),
    # ... other URL patterns ...
]
