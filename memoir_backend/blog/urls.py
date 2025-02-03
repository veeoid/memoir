# blog/urls.py
from django.urls import path
from .views import BlogPostListCreate, BlogPostDetail, UserCreate
from .views import UserDetailView  # Import the view



urlpatterns = [           
    path('posts/', BlogPostListCreate.as_view(), name='blogpost-list'),
    path('posts/<int:pk>/', BlogPostDetail.as_view(), name='blogpost-detail'),
    path('register/', UserCreate.as_view(), name='user-register'),
    # blog/urls.py adjustment
# Assuming UserDetailView is in blog/urls.py
path('user/details/', UserDetailView.as_view(), name='user-details'),


    # ... other URL patterns ...
]
