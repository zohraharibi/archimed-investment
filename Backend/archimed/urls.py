from django.urls import path

from capital_calls.views.investors import InvestorListCreateView, InvestorRetrieveUpdateDestroyView, InvestorBillListView, InvestorDetailView
from capital_calls.views.capital_calls import  CapitalCallListCreateView, CapitalCallRetrieveUpdateDestroyView,InvestorByCapitalCallView
from capital_calls.views.bills import BillListCreateView, BillRetrieveUpdateDestroyView
urlpatterns = [
    path('api/capital-calls/', CapitalCallListCreateView.as_view(), name='capital-call-list-create'),
    path('api/capital-calls/<int:pk>/', CapitalCallRetrieveUpdateDestroyView.as_view(), name='capital-call-detail'),
    path('api/capital-calls/<int:pk>/investor/', InvestorByCapitalCallView.as_view(), name='capital-call-investor'),


    path('api/bills/', BillListCreateView.as_view(), name='bill-list-create'),
    path('api/bills/<int:pk>/', BillRetrieveUpdateDestroyView.as_view(), name='bill-detail'),

    path('api/investors/', InvestorListCreateView.as_view(), name='investor-list-create'),
    path('api/investors/<int:pk>/', InvestorRetrieveUpdateDestroyView.as_view(), name='investor-detail'),
    path('api/investors/<int:pk>/details', InvestorDetailView.as_view(), name='investor-detail'),
    path('api/investors/<int:investor_id>/bills/', InvestorBillListView.as_view(), name='investor-bills'),
    path('api/investors/<int:investor_id>/investment/', InvestorBillListView.as_view(), name='investor-investment'),
    #path('api/investors/<int:pk>/paid-capital-calls-total/', InvestorPaidCapitalCallsTotalAPIView.as_view(), name='investor_paid_capital_calls_total'),





]
