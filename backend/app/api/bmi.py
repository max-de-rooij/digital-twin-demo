from fastapi import APIRouter

from app.models.bmi import BMIRequest, BMIResponse
from app.services.bmi import calculate_bmi, categorize_bmi

router = APIRouter(prefix="/bmi", tags=["BMI"])


@router.post("")
def calculate(request: BMIRequest):
    bmi_value = calculate_bmi(request.weight, request.height)
    category = categorize_bmi(bmi_value)
    return BMIResponse(bmi=bmi_value, category=category)
