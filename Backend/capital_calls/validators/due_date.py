from django.core.exceptions import ValidationError
from django.utils import timezone

def validate_due_date_gt_today(value):
    if value <= timezone.now().date():
        raise ValidationError('Due date must be greater than today.')