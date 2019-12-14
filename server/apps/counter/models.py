from django.db import models

from django_extensions.db.models import TimeStampedModel


class Counter(TimeStampedModel):
    count = models.IntegerField()
