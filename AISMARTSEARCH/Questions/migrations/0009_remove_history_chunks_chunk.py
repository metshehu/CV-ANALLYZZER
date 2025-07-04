# Generated by Django 5.1.3 on 2025-03-11 06:16

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Questions', '0008_history_chunks'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='history',
            name='chunks',
        ),
        migrations.CreateModel(
            name='Chunk',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('chunk_text', models.TextField()),
                ('history', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='chunks', to='Questions.history')),
            ],
        ),
    ]
