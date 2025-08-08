from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Project, Category, Tag, ProjectImage, ProjectVideo

# Para agregar imágenes desde el mismo formulario del proyecto
class ProjectImageInline(admin.StackedInline):
    model = ProjectImage
    extra = 1
    fields = ['image', 'order']
    ordering = ['order']

# Para agregar videos desde el mismo formulario del proyecto
class ProjectVideoInline(admin.StackedInline):
    model = ProjectVideo
    extra = 1
    fields = ['file', 'video_url', 'order']
    ordering = ['order']
@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("order", "title", "get_categories", "get_tags", "created_at")
    list_display_links = ("title",)
    list_editable = ("order",)
    search_fields = ("title", "description")
    ordering = ("order", "-created_at")  # orden en el listado del admin también
    filter_horizontal = ("categories", "tags")  # Para elegir desde el costado más fácilmente
    inlines = [ProjectImageInline, ProjectVideoInline]  # Aquí los agregas dentro

    def get_categories(self, obj):
        return ", ".join([cat.name for cat in obj.categories.all()])
    get_categories.short_description = "Categories"

    def get_tags(self, obj):
        return ", ".join([tag.name for tag in obj.tags.all()])
    get_tags.short_description = "Tags"

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ("name",)

@admin.register(Tag)
class TagAdmin(admin.ModelAdmin):
    list_display = ("name",)

# 🔴 Ya no registramos ProjectImage y ProjectVideo por separado
# porque ahora se administran desde dentro del formulario del Project
