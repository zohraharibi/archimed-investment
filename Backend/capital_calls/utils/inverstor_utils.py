from django.db.models import Sum

def calculate_amount_invested_per_investor(investor):
    paid_calls = investor.capital_calls.filter(status='paid')
    total_sum = paid_calls.aggregate(total_sum=Sum('total_amount'))['total_sum']
    return total_sum or 0