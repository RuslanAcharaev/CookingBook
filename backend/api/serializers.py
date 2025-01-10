from rest_framework import serializers
from .models import Category, Recipe


class CategorySerializer(serializers.ModelSerializer):
    """
    Категория служит для определения принадлежности рецептов к конкретному виду блюда. Позволяет получить список
    рецептов, относящихся к определенной категории.
    """
    class Meta:
        model = Category
        fields = ['id', 'name', 'image']
        extra_kwargs = {
            'id': {'help_text': 'ID категории. Требуется для обращения к конкретной категории и фильтрации рецептов'},
            'name': {'help_text': 'Наименование категории рецептов'},
            'image': {'help_text': 'Изображение, относящееся к категории рецептов'}
        }


class RecipeSerializer(serializers.ModelSerializer):
    """
    Рецепт предоставляет информацию о процессе приготовления блюда и необходимых ингредиентах.
    """
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Recipe
        fields = ['id', 'title', 'category', 'description', 'text']
        extra_kwargs = {
            'id': {'help_text': 'ID рецепта. Требуется для обращения к конкретному рецепту'},
            'title': {'help_text': 'Наименование блюда'},
            'category': {'help_text': 'Категория рецепта'},
            'description': {'help_text': 'Краткое описание блюда'},
            'text': {'help_text': 'Текст описания процесса приготовления'},
        }