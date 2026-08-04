import pytest
from app.services.bmi import calculate_bmi, categorize_bmi


def test_bmi_calculation():
    assert calculate_bmi(70, 1.75) == pytest.approx(22.857142)


def test_categorize_bmi():
    assert categorize_bmi(17.5) == "Underweight"
