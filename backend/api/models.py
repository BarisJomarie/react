from django.db import models

# Create your models here.

class Item(models.Model):
    first_name = models.CharField(max_length=44)
    middle_name = models.CharField(max_length=44, null=True)
    last_name = models.CharField(max_length=44, null=True)
    address = models.CharField(max_length=100, null=True)
    email = models.EmailField(max_length=44, null=True)
    phone = models.CharField(max_length=44, null=True)

    def __str__(self):
        return self.first_name