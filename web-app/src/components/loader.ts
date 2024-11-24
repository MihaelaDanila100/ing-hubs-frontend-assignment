import { html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('app-loader')
export class AppLoader extends LitElement {
    protected render(): TemplateResult<1> {
        return html`
            <img src='../../assets/spinning-circles.svg'>
        `;
    }
}