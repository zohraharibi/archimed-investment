from rest_framework import generics, status
from ..models import Bill
from rest_framework.views import APIView
from ..serializers import BillSerializer, InvestorSerializer, CapitalCallSerializer
from rest_framework.response import Response
from ..utils.billing_utils import calculate_bill
from django.db.models import Sum



class BillListCreateView(generics.ListCreateAPIView):
    queryset = Bill.objects.all()
    serializer_class = BillSerializer

class BillRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bill.objects.all()
    serializer_class = BillSerializer

class CalculateBillView(APIView):
    def get(self, request):
        investor = InvestorSerializer(request.data.get('investor'))
        fee_percentage = request.data.get('fee_percentage')
        bill_type = request.data.get('bill_type')


        bill_amount = calculate_bill(investor, fee_percentage, bill_type)
        formatted_bill_amount = "{:.2f}".format(bill_amount)

        return Response({'bill_amount': formatted_bill_amount}, status=status.HTTP_200_OK)
    

class CalculateTotalAmountOfBillsByCapitalCallView(generics.ListAPIView):
    serializer_class = BillSerializer

    def get_queryset(self):
            capital_call_id = self.kwargs.get('capital_call_id')
            total_amount = Bill.objects.filter(capital_call_id=capital_call_id)
            return total_amount

    def list(self, request, *args, **kwargs):
            queryset = self.get_queryset()
            total_amount = queryset.aggregate(total_amount=Sum('amount'))['total_amount'] or 0
            serializer = self.serializer_class(queryset, many=True)
            response_data = serializer.data
            response_data.append({'total_amount': total_amount})
            return Response(response_data, status=status.HTTP_200_OK)
