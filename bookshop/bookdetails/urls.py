from django.urls import path
from . import views

urlpatterns = [
    path('',views.home, name='home'),
    path('<int:id>/',views.bookdetails,name="bookdetails"),
    path('userlogin/',views.user_login,name="login"),
    path('clear-session/', views.clear_session, name='clear_session'),
    path('order/',views.ordered,name="order"),
    path('cart/',views.cart,name="cart"),
    path('placeorder/',views.order,name="placeorder")

    ]