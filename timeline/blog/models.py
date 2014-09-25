# -*- coding: utf8 -*-

from django.db import models
from django.utils import timezone


class Article(models.Model):
    author = models.CharField(max_length=512)
    created_on = models.DateTimeField(default=timezone.now)
    publication_date = models.DateField(null=True)
    title = models.CharField(max_length=512)
    tag = models.ManyToManyField('blog.Tag', blank=True, null=True)


class Tag(models.Model):
    name = models.CharField(max_length=128, blank=False)

    class Meta:
        ordering = ['name']

    def __unicode__(self):  # pragma: no cover
        return '{0}'.format(self.name)
