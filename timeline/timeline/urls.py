from django.conf.urls import patterns, include, url
from django.contrib import admin
from tastypie.api import Api

from api.resources import ArticleResource

import views

v1_api = Api(api_name='v1')
v1_api.register(ArticleResource())

urlpatterns = patterns(
    '',
    url(r'^$', views.TimelineView.as_view(), name='timeline_view'),
    (r'^api/', include(v1_api.urls)),
    url(r'^admin/', include(admin.site.urls)),
)
