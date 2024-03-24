from rest_framework import generics, status
from rest_framework.response import Response
from ..models import CapitalCall
from ..serializers import CapitalCallSerializer, InvestorSerializer


class CapitalCallListCreateView(generics.ListCreateAPIView):
    queryset = CapitalCall.objects.all()
    serializer_class = CapitalCallSerializer
    

class CapitalCallRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = CapitalCall.objects.all()
    serializer_class = CapitalCallSerializer

class InvestorByCapitalCallView(generics.RetrieveAPIView):
    queryset = CapitalCall.objects.all()
    serializer_class = InvestorSerializer

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        investor = instance.investor
        serializer = self.get_serializer(investor)
        return Response(serializer.data)