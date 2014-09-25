# -*- coding: utf8 -*-
from django.views.generic import ListView

from blog import models


class TimelineView(ListView):
    model = models.Article
    template_name = 'timeline/timeline.html'

    def get_context_data(self, *args, **kwargs):
        ctx = super(TimelineView, self).get_context_data(*args, **kwargs)
        return ctx
