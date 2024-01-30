# models.py
from django.db import models

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    image_url = models.URLField(blank=True, null=True)
    # Add other fields as necessary

# views.py
from .models import BlogPost
from .serializers import BlogPostSerializer
from rest_framework import generics

class BlogPostListCreate(generics.ListCreateAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer

# serializers.py
from rest_framework import serializers
from .models import BlogPost

class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = '__all__'

# urls.py
from django.urls import path
from .views import BlogPostListCreate

urlpatterns = [
    path('posts/', BlogPostListCreate.as_view(), name='blogpost-list-create'),
    # Add other URL patterns
]
