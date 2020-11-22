from django.urls import path

from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('<int:genre_id>/', views.playlist, name='playlist'),
    path('allgenres/', views.allgenres, name='allgenres'),

]
