from django.db import models

# Create your models here.

class News(models.Model):
    title = models.CharField(max_length=255)
    discription = models.TextField()
    img = models.ImageField(upload_to='course')
    date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title