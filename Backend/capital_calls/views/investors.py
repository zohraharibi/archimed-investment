from rest_framework import generics
from ..models import Investor, Bill
from ..serializers import InvestorSerializer, BillSerializer


class InvestorListCreateView(generics.ListCreateAPIView):
    queryset = Investor.objects.all()
    serializer_class = InvestorSerializer

class InvestorRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Investor.objects.all()
    serializer_class = InvestorSerializer

class InvestorBillListView(generics.ListAPIView):
    serializer_class = BillSerializer

    def get_queryset(self):
        investor_id = self.kwargs['investor_id']
        return Bill.objects.filter(investor_id=investor_id)

class InvestmentPerInvestorAPIView(generics.ListAPIView):
    queryset = Investor.objects.all()
    serializer_class = InvestorSerializer

class InvestorDetailView(generics.RetrieveAPIView):
    queryset = Investor.objects.all()
    serializer_class = InvestorSerializer    

