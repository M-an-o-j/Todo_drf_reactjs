# Generated by Django 4.2.5 on 2023-09-15 03:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_todomodel_delete_person'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todomodel',
            name='Detail',
            field=models.CharField(max_length=100),
        ),
    ]