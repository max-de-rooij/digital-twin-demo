import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import "../components/bmi-calculator";

@customElement("home-page")
export class HomePage extends LitElement {

    static styles = css`
        :host {
            display: block;
            text-align: center;
            font-family: sans-serif;
        }
    `;

    render() {
        return html`
            <h1>Digital Twin Course Demo</h1>

            <bmi-calculator></bmi-calculator>
        `;
    }

}