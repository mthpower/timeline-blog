from django.conf.urls import patterns, include, url
from django.contrib import admin

import views

urlpatterns = patterns(
    '',
    url(r'^$', views.TimelineView.as_view(), name='timeline_view'),
    url(r'^admin/', include(admin.site.urls)),
)
