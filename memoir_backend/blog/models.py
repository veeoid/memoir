from django.db import models

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    content = models.TextField()
    # Add other fields like author, image, etc.

    def __str__(self):
        return self.title
