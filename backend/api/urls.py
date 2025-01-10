from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, RecipeViewSet


router = DefaultRouter()
router.register('categories', CategoryViewSet, basename='category')
router.register('recipes', RecipeViewSet, basename='recipe')

urlpatterns = router.urls