from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    user = models.ForeignKey(User, on_delete = models.CASCADE)
    post_title = models.CharField(max_length=50)
    post_detail = models.TextField()
    post_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.post_title