from django.db import models

# Create your models here.

class TodoModel(models.Model):
    Title = models.CharField(max_length=100)
    Detail = models.CharField(max_length=100)