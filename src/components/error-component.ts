import { CSSResult, html, HTMLTemplateResult, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { ErrorStyles } from "../styles/error-styles.js";

@customElement('app-error-component')
export class AppErrorComponent extends LitElement {

    static override get styles(): [CSSResult] {
        return [ErrorStyles];
    }

    protected render(): HTMLTemplateResult {
        return html`
            <div class='error-container'>
                <span class='error-title'>Invalid form!</span>
            </div>
        `;
    }
}