# Generated by Django 4.2.7 on 2023-12-19 05:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('book_name', models.CharField(max_length=120)),
                ('author', models.CharField(max_length=60)),
                ('description', models.TextField()),
                ('price', models.IntegerField()),
                ('img', models.ImageField(upload_to='book/')),
            ],
        ),
        migrations.CreateModel(
            name='ordereditem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=60)),
                ('book_names', models.CharField(max_length=120)),
                ('qty', models.IntegerField()),
                ('price', models.IntegerField()),
                ('totalprice', models.IntegerField()),
                ('address', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='user',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=60)),
                ('password', models.CharField(max_length=60)),
            ],
        ),
    ]
