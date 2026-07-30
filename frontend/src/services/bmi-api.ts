export interface BMIRequest {
    weight: number;
    height: number;
}

export interface BMIResponse {
    bmi: number;
    category: string;
}

export async function calculateBMI(
    request: BMIRequest
): Promise<BMIResponse> {

    const response = await fetch("http://localhost:8000/api/bmi", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
    });

    if (!response.ok) {
        throw new Error("Failed to calculate BMI");
    }

    return await response.json();
}