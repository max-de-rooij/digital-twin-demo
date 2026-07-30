import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement, state } from "lit/decorators.js";

import { calculateBMI } from "../services/bmi-api";

import bmiStyles from "./bmi-calculator.css?inline";

@customElement("bmi-calculator")
export class BMICalculator extends LitElement {

    @state()
    private bmi = "";

    @state()
    private category = "";

    static styles = css`
        ${unsafeCSS(bmiStyles)}
    `;

    async calculate() {
        const weightInput = this.renderRoot.querySelector("#weight") as HTMLInputElement;
        const heightInput = this.renderRoot.querySelector("#height") as HTMLInputElement;

        const result = await calculateBMI({
            weight: Number(weightInput.value),
            height: Number(heightInput.value),
        });

        this.bmi = result.bmi.toFixed(1);
        this.category = result.category;
    }

    render() {
        return html`
            <h2>BMI Calculator</h2>

            <p> Weight in kg</p>
            <input
                id="weight"
                type="number"
                placeholder="Weight (kg)"
            >

            <p> Height in m</p>
            <input
                id="height"
                type="number"
                placeholder="Height (m)"
                step="0.01"
            >

            <button @click=${this.calculate}>
                Calculate
            </button>

            <div class="result">
                <p><strong>BMI:</strong> ${this.bmi}</p>
                <p><strong>Category:</strong> ${this.category}</p>
            </div>
        `;
    }
}