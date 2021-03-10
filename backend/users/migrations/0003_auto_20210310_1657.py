# Generated by Django 3.1.7 on 2021-03-10 15:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20210309_1217'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user_type',
            name='is_investor',
            field=models.BooleanField(default=False, verbose_name='investor'),
        ),
        migrations.AlterField(
            model_name='user_type',
            name='is_startup',
            field=models.BooleanField(default=False, verbose_name='startup'),
        ),
    ]