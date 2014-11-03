# -*- coding: utf8 -*-

from django.db import models
from django.utils import timezone


class Article(models.Model):
    author = models.CharField(max_length=512)
    created_on = models.DateTimeField(default=timezone.now)
    publication_date = models.DateField(null=True)
    title = models.CharField(max_length=512)
    tag = models.ManyToManyField('blog.Tag', blank=True, null=True)
    content = models.TextField(blank=False, default='')

    # Image fields. Can be left blank.
    # Templates expect a number of images.
    image_1 = models.ImageField(blank=True, null=True)
    image_2 = models.ImageField(blank=True, null=True)
    image_3 = models.ImageField(blank=True, null=True)
    image_4 = models.ImageField(blank=True, null=True)
    image_5 = models.ImageField(blank=True, null=True)
    image_6 = models.ImageField(blank=True, null=True)

    # Templating choices. Register new templates here.
    TEMPLATE_CHOICES = (
        ('SIMPLE', 'Simple'),
    )

    template = models.CharField(
        max_length=10,
        blank=False,
        choices=TEMPLATE_CHOICES,
        default='SIMPLE',
    )

    def __unicode__(self):  # pragma: no cover
        return '{} - {}'.format(self.title, self.author)


class Tag(models.Model):
    name = models.CharField(max_length=128, blank=False)

    class Meta:
        ordering = ['name']

    def __unicode__(self):  # pragma: no cover
        return '{0}'.format(self.name)
