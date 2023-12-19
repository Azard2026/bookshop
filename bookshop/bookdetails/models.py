from django.db import models

# Create your models here.
class book(models.Model):
    book_name =models.CharField(max_length=120)
    author=models.CharField(max_length=60)
    description=models.TextField()
    price=models.IntegerField()
    img=models.ImageField(upload_to='book/')
    
class user(models.Model):
    username=models.CharField(max_length=60)
    password=models.CharField(max_length=60)

class ordereditem(models.Model):
    username=models.CharField(max_length=60)
    book_names=models.CharField(max_length=120)
    qty=models.IntegerField()
    price=models.IntegerField()
    totalprice=models.IntegerField()
    address=models.TextField()
    

