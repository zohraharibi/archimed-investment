def get_days_in_year(date):
    if date.year % 4 == 0:
        return 366
    else:
        return 365