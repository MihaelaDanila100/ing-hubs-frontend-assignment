import { CSSResult, html, HTMLTemplateResult, LitElement, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HeaderStyles } from "../styles/header-styles.js";
import './button.js';
import { THEME_COLORS } from "../styles/theme.js";
import { AuthService } from "../services/auth-service.js";

@customElement('app-header')
export class HeaderComponent extends LitElement {

    private _authService: AuthService = new AuthService();

    @property()
    isLogIn: boolean = false;

    static override get styles(): [CSSResult] {
        return [HeaderStyles];
    }
    
    private _logOut(): void {
        this._authService.logOut();
        this.dispatchEvent(new CustomEvent('onLogOut'));
    }

    protected render(): HTMLTemplateResult {
        
        return html`
            <header class = "header-container">
                ${this.isLogIn ? html`<app-button
                        .buttonColor = ${THEME_COLORS.primaryLightWhite.cssText}
                        .textColor = ${THEME_COLORS.primaryBlue.cssText}
                        @click=${this._logOut}>
                    Log Out
                </app-button>` : html``}
            </header>
        `;
    }
}