import { CSSResult, html, HTMLTemplateResult, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { HeaderStyles } from "../styles/header-styles.js";
import './button.js';
import { THEME_COLORS } from "../styles/theme.js";

@customElement('app-header')
export class HeaderComponent extends LitElement {

    static override get styles(): [CSSResult] {
        return [HeaderStyles];
    }

    protected render(): HTMLTemplateResult {
        return html`
            <header class = "header-container">
                <app-button .buttonColor = ${THEME_COLORS.primaryLightWhite.cssText}
                        .textColor = ${THEME_COLORS.primaryBlue.cssText}>
                    Log In
                </app-button>
            </header>
        `;
    }
}