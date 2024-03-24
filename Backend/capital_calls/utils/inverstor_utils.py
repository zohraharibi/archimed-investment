from django.db.models import Sum
from ..models import CapitalCall

def calculate_amount_invested_per_investor(investor):
    
    investor_id = int(investor['id'].value)  # Convert to integer
    capital_calls = CapitalCall.objects.filter(investor_id=investor_id, status='paid')
    total_sum = capital_calls.aggregate(total_sum=Sum('total_amount'))['total_sum'] if capital_calls else 0
    return float(total_sum) 
 
