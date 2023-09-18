from home.views import  TodoAPI, RegisterAPI, LoginAPI, LogoutAPI, GetUserByUsername
from django.urls import path

urlpatterns = [
    path('person/', TodoAPI.as_view()),
    path('register/',RegisterAPI.as_view()),
    path('login/',LoginAPI.as_view()),
    path('logout/',LogoutAPI.as_view()),
    path('user/<str:username>/', GetUserByUsername.as_view(), name='get_user_by_username'),
]