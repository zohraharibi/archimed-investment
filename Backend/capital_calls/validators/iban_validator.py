import re

def is_valid_iban(iban):
    iban = ''.join(iban.split())  # Remove whitespace
    
    # IBAN should start with two letters followed by two numbers
    if not re.match(r'^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$', iban):
        return False
    
    # Move first four characters to the end
    iban = iban[4:] + iban[:4]
    
    # Convert letters to numbers
    iban_numeric = ''
    for char in iban:
        if char.isdigit():
            iban_numeric += char
        else:
            iban_numeric += str(ord(char) - 55)
    
    # Break into parts
    parts = [iban_numeric[i:i+9] for i in range(0, len(iban_numeric), 9)]
    
    # Calculate remainder of division by 97
    remainder = int(parts[0]) % 97
    for part in parts[1:]:
        remainder = int(str(remainder) + part) % 97
    
    # IBAN is valid if remainder is 1
    return remainder == 1
