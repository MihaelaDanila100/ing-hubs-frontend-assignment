import { CSSResult, html, HTMLTemplateResult, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { HeaderStyles } from "../styles/header-styles.js";

@customElement('app-header')
export class HeaderComponent extends LitElement {

    static override get styles(): [CSSResult] {
        return [HeaderStyles];
    }

    protected render(): HTMLTemplateResult {
        return html`
            <header class = "header-container">
                <div>This is my header!</div>
            </header>
        `;
    }
}