# Generated by Django 3.1.7 on 2021-03-19 19:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('startups', '0007_auto_20210319_2007'),
    ]

    operations = [
        migrations.AlterField(
            model_name='startupgallery',
            name='image',
            field=models.ImageField(upload_to='media/startups/<django.db.models.fields.related.ForeignKey>/gallery'),
        ),
        migrations.AlterField(
            model_name='startupgallery',
            name='startup',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='startups.startup'),
        ),
    ]
