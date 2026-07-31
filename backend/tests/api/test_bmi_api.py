import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_bmi_endpoint():

    response = client.post(
        "/api/bmi",
        json={
            "weight": 70,
            "height": 1.75
        }
    )

    assert response.status_code == 200

    data = response.json()

    assert data["category"] == "Normal weight"

def test_bmi_endpoint_invalid_input():
    response = client.post(
        "/api/bmi",
        json={
            "weight": -70,
            "height": 1.75
        }
    )

    assert response.status_code == 422