from rest_framework import serializers
from .models import Investor, CapitalCall, Bill
from .validators.iban_validator import is_valid_iban

class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = ['id', 'investor', 'capital_call', 'bill_type', 'amount', 'fee_percentage']

class InvestorSerializer(serializers.ModelSerializer):
    bills = BillSerializer(many=True, read_only=True)

    class Meta:
        model = Investor
        fields = ['id', 'name', 'iban', 'email', 'bills', 'date_of_first_investment']

    def validate(self, data):
        iban = data.get('iban')
        if iban and not is_valid_iban(iban):
            raise serializers.ValidationError("Please enter a valid IBAN.")
        return data

class CapitalCallSerializer(serializers.ModelSerializer):

    class Meta:
        model = CapitalCall
        fields = ['id', 'investor', 'due_date', 'created_at', 'total_amount', 'status']
