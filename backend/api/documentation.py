from drf_spectacular.utils import extend_schema_view, extend_schema, OpenApiExample, OpenApiParameter
from .serializers import CategorySerializer, RecipeSerializer


category_schema = extend_schema_view(
    list=extend_schema(
        summary="Получить список всех категорий",
        description="Возвращает список всех категорий.",
        responses={200: CategorySerializer(many=True)},
        examples=[
            OpenApiExample(
                "Пример успешного ответа",
                value=[
                    {
                        "id": 1,
                        "name": "Супы",
                        "image": "http://127.0.0.1:8000/media/images/soup.jpg"
                    },
                    {
                        "id": 2,
                        "name": "Салаты",
                        "image": "http://127.0.0.1:8000/media/images/salad.jpg"
                    }
                ],
                response_only=True,
                status_codes=["200"]
            )
        ]
    ),
    retrieve=extend_schema(
        summary="Получить информацию о категории по ID",
        description="Возвращает полную информацию о конкретной категории.",
        responses={200: CategorySerializer},
        parameters=[
            OpenApiParameter(
                name="id",
                location=OpenApiParameter.PATH,
                description="Уникальное целое число, идентифицирующее данную категорию.",
                required=True,
                type=int)
        ],
        examples=[
            OpenApiExample(
                "Пример успешного ответа",
                value=[
                    {
                        "id": 1,
                        "name": "Супы",
                        "image": "http://127.0.0.1:8000/media/images/soup.jpg"
                    }
                ],
                response_only=True,
                status_codes=["200"]
            )
        ]
    )
)


recipe_schema = extend_schema_view(
    list=extend_schema(
        summary="Получить список всех рецептов",
        description="Возвращает список всех рецептов с возможностью фильтрации по категории.",
        parameters=[
            OpenApiParameter(
                name="category",
                location=OpenApiParameter.QUERY,
                description="Позволяет фильтровать рецепты по категории (ID категории).",
                required=False,
                type=int)
        ],
        responses={200: RecipeSerializer(many=True)},
        examples=[
            OpenApiExample(
                "Пример успешного ответа",
                value=[
                    {
                        "id": 1,
                        "title": "Борщ",
                        "category": {
                            "id": 1,
                            "name": "Супы",
                            "image": "http://127.0.0.1:8000/media/images/soup.jpg"
                        },
                        "description": "Описание блюда",
                        "text": "Описание ингредиентов и процесса приготовления."
                    },
                    {
                        "id": 2,
                        "title": "Харчо",
                        "category": {
                            "id": 1,
                            "name": "Супы",
                            "image": "http://127.0.0.1:8000/media/images/soup.jpg"
                        },
                        "description": "Описание блюда",
                        "text": "Описание ингредиентов и процесса приготовления."
                    }
                ],
                response_only=True,
                status_codes=["200"]
            )
        ]
    ),
    retrieve=extend_schema(
        summary="Получить информацию о рецепте по ID",
        description="Возвращает полную информацию о конкретном рецепте.",
        responses={200: RecipeSerializer},
        parameters=[
            OpenApiParameter(
                name="id",
                location=OpenApiParameter.PATH,
                description="Уникальное целое число, идентифицирующее данный рецепт.",
                required=True,
                type=int)
        ],
        examples=[
            OpenApiExample(
                "Пример успешного ответа",
                value=[
                    {
                        "id": 1,
                        "title": "Борщ",
                        "category": {
                            "id": 1,
                            "name": "Супы",
                            "image": "http://127.0.0.1:8000/media/images/soup.jpg"
                        },
                        "description": "Описание блюда",
                        "text": "Описание ингредиентов и процесса приготовления."
                    }
                ],
                response_only=True,
                status_codes=["200"]
            )
        ]
    )
)