
# memoir_backend/urls.py
from django.contrib import admin
from django.urls import path, include
from .views import home  # Import the home view
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/blog/', include('blog.urls')),
    path('api/user/', include('blog.urls')),
    path('', home, name='home'),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)   