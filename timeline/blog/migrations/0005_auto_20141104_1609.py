# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_article_template'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='template',
            field=models.CharField(default=b'SIMPLE', max_length=10, choices=[(b'SIMPLE', b'Simple'), (b'MONTAGE', b'Montage')]),
        ),
    ]
