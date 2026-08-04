from pydantic import BaseModel, Field


class BMIRequest(BaseModel):
    weight: float = Field(gt=0, description="Weight in kilograms")
    height: float = Field(gt=0, description="Height in meters")


class BMIResponse(BaseModel):
    bmi: float
    category: str
