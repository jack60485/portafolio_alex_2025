from rest_framework import serializers
from .models import Project, Category, Tag, ProjectImage, ProjectVideo, ProjectBlock

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = ['id', 'name']

class ProjectImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)
    class Meta:
        model = ProjectImage
        fields = ['id', 'image', 'order']

class ProjectVideoSerializer(serializers.ModelSerializer):
    video = serializers.SerializerMethodField()  # ← campo unificado
    class Meta:
        model = ProjectVideo
        fields = ['id', 'order', 'video', 'file', 'video_url']
        read_only_fields = ['video']
    def get_video(self, obj):
        return obj.url  # usa @property del modelo

class ProjectSerializer(serializers.ModelSerializer):
    categories = CategorySerializer(many=True, read_only=True)
    tags = TagSerializer(many=True, read_only=True)
    extra_images = serializers.SerializerMethodField()
    videos = serializers.SerializerMethodField()

    category_ids = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Category.objects.all(),
        write_only=True,
        source="categories",
        required=False  # 👈 clave
    )
    tag_ids = serializers.PrimaryKeyRelatedField(
        many=True,
        queryset=Tag.objects.all(),
        write_only=True,
        source="tags",
        required=False  # 👈 clave
    )

    class Meta:
        model = Project
        fields = [
            'id',
            'title',
            'description',
            'image',
            'detailed_description',
            'extra_text',
            'categories',
            'tags',
            'category_ids',
            'tag_ids',
            'extra_images',
            'videos',
            'blocks',
            'created_at'
        ]
        extra_kwargs = {
            'image': {'required': False, 'allow_null': True},  # 👈 clave para evitar error
        }

    def get_extra_images(self, obj):
        images = obj.extra_images.order_by('order')
        return ProjectImageSerializer(images, many=True, context=self.context).data

    def get_videos(self, obj):
        videos = obj.videos.order_by('order')
        return ProjectVideoSerializer(videos, many=True, context=self.context).data

class ProjectBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectBlock
        fields = ['id', 'project', 'block_type', 'content', 'order']