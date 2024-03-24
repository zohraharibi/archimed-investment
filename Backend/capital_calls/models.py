from django.db import models
from .validators.iban_validator import is_valid_iban
from .validators.due_date import validate_due_date_gt_today
from django.core.exceptions import ValidationError


class Investor(models.Model):
    name = models.CharField(max_length=100, unique=True)
    iban = models.CharField(max_length=34)
    email = models.EmailField(unique=True)
    date_of_first_investment = models.DateField()

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        # Remove spaces from the IBAN before saving
        self.iban = self.iban.replace(' ', '')
        super().save(*args, **kwargs)

    def clean_fields(self, exclude=None):
        super().clean_fields(exclude=exclude)
        self.clean_iban()

    def clean_iban(self):
        iban = self.iban
        if not is_valid_iban(iban):
            raise ValidationError("Please enter a valid IBAN.")


class CapitalCall(models.Model):
    investor = models.ForeignKey(Investor, on_delete=models.CASCADE ,  related_name='capital_calls')
    due_date = models.DateField(validators=[validate_due_date_gt_today])
    created_at = models.DateTimeField(auto_now_add=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=10, choices=[
        ('validated', 'Validated'),
        ('sent', 'Sent'),
        ('paid', 'Paid'),
        ('overdue', 'Overdue'),
    ])


class Bill(models.Model):
    BILL_TYPES = [
        ('membership', 'Membership'),
        ('upfront', 'Upfront'),
        ('yearly', 'Yearly'),
    ]
    
    investor = models.ForeignKey(Investor, on_delete=models.CASCADE, related_name='bills')
    capital_call = models.ForeignKey(CapitalCall, on_delete=models.CASCADE, related_name='bills', null=True, blank=True)
    bill_type = models.CharField(max_length=10, choices=BILL_TYPES)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    fee_percentage = models.DecimalField(max_digits=5, decimal_places=2, default=0)


