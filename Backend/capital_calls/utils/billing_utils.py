from datetime import date
from .date_utils import get_days_in_year
from datetime import datetime
from .inverstor_utils import calculate_amount_invested_per_investor

MEMBERSHIP_FEE_THRESHOLD = 50000
MEMBERSHIP_FEE = 3000
APRIL_2019_START_DATE = datetime(2019, 4, 1)

def calculate_membership_fee(amount_invested):
    if amount_invested > MEMBERSHIP_FEE_THRESHOLD:
        return 0
    else:
        return MEMBERSHIP_FEE

def calculate_upfront_fee(amount_invested, fee_percentage):
    return fee_percentage * amount_invested * 5


def calculate_yearly_fee_before_2019(amount_invested, fee_percentage, date_of_first_investment, years_since_investment):

    if years_since_investment == 0:
        return (date_of_first_investment / get_days_in_year(date_of_first_investment) ) * fee_percentage * amount_invested
    elif years_since_investment >= 1:
        return fee_percentage * amount_invested 
    else:
        return 0

def calculate_yearly_fee_after_2019(amount_invested, fee_percentage, date_of_first_investment, years_since_investment):

    if years_since_investment == 0:
        return (date_of_first_investment.timetuple().tm_yday / get_days_in_year(date_of_first_investment)) * fee_percentage * amount_invested
    elif years_since_investment == 1:
        return fee_percentage * amount_invested
    elif years_since_investment == 2:
        return (fee_percentage - 0.002) * amount_invested
    elif years_since_investment == 3:
        return (fee_percentage - 0.005) * amount_invested
    else:
        return (fee_percentage - 0.01) * amount_invested
    
def calculate_yearly_fee (amount_invested, fee_percentage, date_of_first_investment):
    years_since_investment = date.today().year - date_of_first_investment.year
    
    if date_of_first_investment > APRIL_2019_START_DATE:
        return calculate_yearly_fee_after_2019(amount_invested, fee_percentage, date_of_first_investment, years_since_investment)
    else:
        return calculate_yearly_fee_before_2019(amount_invested, fee_percentage, date_of_first_investment, years_since_investment)  

    
def calculate_bill(investor, bill, fee_percentage, date_of_first_investment ):
    amount_invested = calculate_amount_invested_per_investor(investor)

    if bill.bill_type == 'membership':
        return calculate_membership_fee(amount_invested)
    elif bill.bill_type == 'upfront':
        return calculate_upfront_fee(amount_invested, fee_percentage)
    elif bill.bill_type == 'yearly':
        return calculate_yearly_fee(amount_invested, fee_percentage, date_of_first_investment)
    else:
        return 0

 
