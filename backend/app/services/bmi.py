
def calculate_bmi(weight: float, height: float):
    return weight / (height ** 2)

def categorize_bmi(bmi: float):
    if bmi < 18.5:
        return "Underweight"
    elif 18.5 <= bmi < 24.9:
        return "Normal weight"
    elif 25 <= bmi < 29.9:
        return "Overweight"
    else:
        return "Obesity"