from rest_framework import serializers
from .models import TodoModel
from django.contrib.auth.models import User
from django.contrib.auth.models import User  

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']  


class RegisterSerializer(serializers.Serializer):
    username = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        if data['username']:
            if User.objects.filter(username=data['username']).exists():
                raise serializers.ValidationError('username is taken')

        if data['email']:
            if User.objects.filter(email=data['email']).exists():
                raise serializers.ValidationError('email is already taken')

        return data

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'], email=validated_data['email'])
        user.set_password(validated_data['password'])
        user.save()
        return validated_data
        print(validated_data)


class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoModel
        fields = '__all__'

    # def validate(self , data):

    #     special_characters = "!@#$%^&*(){}_+<>?|,."
    #     if any(c in special_characters for c in data['name']):
    #         raise serializers.ValidationError('name cannot contain special characters')

    #     if data['age'] < 18:
    #         raise serializers.ValidationError('age should be greter than 18')

    #     return data
