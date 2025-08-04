from django.db import models

# Create your models here.
"""from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    tags = models.CharField(max_length=300, blank=True)  # Luego se puede normalizar
    image = models.ImageField(upload_to='project_images/')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title"""
from django.db import models
from ckeditor.fields import RichTextField

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Tag(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='project_images/')
    categories = models.ManyToManyField(Category, blank=True)
    tags = models.ManyToManyField(Tag, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    detailed_description = RichTextField(blank=True)
    extra_text = models.TextField(blank=True, null=True)

    # ❌ ELIMINADO: extra_images = models.ManyToManyField(...)
    # Django ya puede acceder a todas las imágenes extra usando el reverse access `project.extra_images.all()`

    def __str__(self):
        return self.title

class ProjectImage(models.Model):
    project = models.ForeignKey(Project, related_name='extra_images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='project_images/')
    order = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"{self.project.title} - Image {self.id}"

    class Meta:
        ordering = ['order']

class ProjectVideo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='videos')
    video_url = models.URLField(blank=True, null=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

from django.db import models

class ProjectBlock(models.Model):
    BLOCK_TYPES = [
        ('text', 'Text'),
        ('image', 'Image'),
        ('video', 'Video'),
    ]

    project = models.ForeignKey('Project', related_name='blocks', on_delete=models.CASCADE)
    block_type = models.CharField(max_length=10, choices=BLOCK_TYPES)
    content = models.TextField(blank=True)  # texto plano o URL de imagen/video
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.project.title} - {self.block_type} ({self.order})"
