''' from backend/projects'''

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, ProjectBlockViewSet
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView

router = DefaultRouter()
router.register(r'projects', ProjectViewSet)
router.register(r'project-blocks', ProjectBlockViewSet)

urlpatterns = [
    path('', include(router.urls)),  # <- Aquí conectas correctamente todas las rutas generadas por el router

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)