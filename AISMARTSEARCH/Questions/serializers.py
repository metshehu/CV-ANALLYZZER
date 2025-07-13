# serializers.py

from rest_framework import serializers
from .models import UserValues

class UserValuesSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserValues
        fields = '__all__'

