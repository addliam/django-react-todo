from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=125)
    description = models.TextField(max_length=500)
    completed = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.title