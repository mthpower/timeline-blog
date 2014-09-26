from tastypie.resources import ModelResource
from blog.models import Article


class ArticleResource(ModelResource):
    class Meta:
        queryset = Article.objects.all()
        allowed_methods = ['get']
