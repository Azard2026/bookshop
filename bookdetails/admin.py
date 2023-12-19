from django.contrib import admin
from .models import book,user,ordereditem

# Register your models here.
class bookAdmin(admin.ModelAdmin):
    list_display = ('book_name',
                    'author','description','price','img')

admin.site.register(book, bookAdmin)

class userAdmin(admin.ModelAdmin):
    list_display=('username','password')
admin.site.register(user,userAdmin)

class ordereditemAdmin(admin.ModelAdmin):
    list_display=('username','book_names','qty','price','totalprice','address')
admin.site.register(ordereditem,ordereditemAdmin)