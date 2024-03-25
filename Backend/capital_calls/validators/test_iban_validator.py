import pytest
from .iban_validator import is_valid_iban

@pytest.mark.parametrize("iban, expected_result", [
    ("GB82 WEST 1234 5698 7654 32", True),  # Valid IBAN
    ("DE89 3704 0044 0532 0130 00", True),  # Valid IBAN
    ("GB82 WEST 1234 5698 7654 33", False), # Invalid IBAN (checksum failure)
    ("ABC123", False),                      # Invalid IBAN (format)
    ("", False),                            # Invalid IBAN (empty string)
    ("1234567890", False),                  # Invalid IBAN (numeric)
])
def test_is_valid_iban(iban, expected_result):
    assert is_valid_iban(iban) == expected_result
