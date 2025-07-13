from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("chat/<str:user>/", views.chat, name="chat"),
    path("makedir/", views.makedirForm, name="makedir"),
    path("save-files/<str:user>", views.fileupload, name="save-files"),
    path("Manage-Users/", views.manage_users, name="Mange-Users"),
    path("Manage-User/<str:user>", views.manage_user, name="Mange-user"),
    path("delete-user/<str:user>", views.delet_user, name="delet-user"),
    path("get-chunks/<str:user>/<str:question>",
         views.getchunksforQuestin, name="chunks"),
    path("get-cv/<str:user>/",
         views.get_cv, name="cv"),

    path("questions/<str:user>/<str:query>",
         views.chat_Front, name="questions"),
    path("Search/<str:user>/<str:query>", views.search_Front, name="front"),
    path("api/signup/", views.signup, name="signup"),
    path("api/token/", TokenObtainPairView.as_view(),
         name="token_obtain_pair"),  # Login
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/user-values/", views.get_user_values, name="user_values"),
        path("api/upload/<str:user>/", views.fileuploadfront, name="fileupload"),

]
