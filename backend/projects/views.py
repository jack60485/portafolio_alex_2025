from django.shortcuts import render

# Create your views here.


from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Project, ProjectBlock
from .serializers import ProjectSerializer, ProjectBlockSerializer
from rest_framework import viewsets

from django.views.generic import TemplateView


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ProjectBlockViewSet(viewsets.ModelViewSet):
    queryset = ProjectBlock.objects.all()
    serializer_class = ProjectBlockSerializer

