from django.urls import path
from universities.views import HomePageView, FoundingView

urlpatterns = [
    path("", HomePageView.as_view(), name="home"),
    path('founding/', FoundingView.as_view(), name='founding'),

]