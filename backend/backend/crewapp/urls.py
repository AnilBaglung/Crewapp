from django.urls import path, include
from crewapp import views
from .views import ContactViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('contact', ContactViewSet, basename='contact')

urlpatterns = [
    path('', include(router.urls)),
]