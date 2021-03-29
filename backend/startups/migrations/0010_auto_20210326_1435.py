# Generated by Django 3.1.7 on 2021-03-26 13:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('startups', '0009_auto_20210325_1320'),
    ]

    operations = [
        migrations.AlterField(
            model_name='startup',
            name='logo',
            field=models.ImageField(upload_to='media/startups/logos'),
        ),
        migrations.AlterField(
            model_name='startup',
            name='pitch',
            field=models.FileField(null=True, upload_to='media/startups/pitches'),
        ),
        migrations.AlterField(
            model_name='startupgallery',
            name='image',
            field=models.ImageField(upload_to='media/startups/gallery'),
        ),
    ]