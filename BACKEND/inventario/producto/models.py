from django.db import models
from django.db import models

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=100, decimal_places=2)
    descripcion = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    update = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre
