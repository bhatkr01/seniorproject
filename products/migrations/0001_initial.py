# Generated by Django 4.1.1 on 2022-09-22 20:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.CharField(max_length=200)),
                ('product_picture', models.ImageField(upload_to='images')),
                ('product_description', models.CharField(max_length=1000)),
                ('product_condition', models.CharField(choices=[('NEW', 'NEW'), ('USED-GOOD', 'USED-GOOD'), ('USED-ACCEPTABLE', 'USED-ACCEPTABLE')], default='USED-GOOD', max_length=20)),
                ('product_action', models.CharField(choices=[('SELL', 'SELL'), ('DONATE', 'DONATE')], default='SELL', max_length=6)),
                ('product_price', models.PositiveSmallIntegerField()),
            ],
        ),
    ]