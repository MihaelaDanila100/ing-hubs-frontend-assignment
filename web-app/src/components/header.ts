import { CSSResult, html, HTMLTemplateResult, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HeaderStyles } from "../styles/header-styles.js";
import './button.js';
import './dialog.js';
import { THEME_COLORS } from "../styles/theme.js";
import { AuthService } from "../services/auth-service.js";

@customElement('app-header')
export class HeaderComponent extends LitElement {

    private _authService: AuthService = new AuthService();

    @property({type: Boolean})
    isLogIn: boolean = false;

    @state()
    private _isOpen: boolean = false;

    static override get styles(): [CSSResult] {
        return [HeaderStyles];
    }

    private _toggleDialog = (newIsOpen: boolean) => {
        this._isOpen = newIsOpen;

        if(this._authService.isLoggedIn()) {
            this._authService.logOut();
            this.isLogIn = false;
        }
    }

    protected render(): HTMLTemplateResult {
        
        return html`
            <header class = "header-container">
                <app-button
                        @click = ${this._toggleDialog(true)}
                        .buttonColor = ${THEME_COLORS.primaryLightWhite.cssText}
                        .textColor = ${THEME_COLORS.primaryBlue.cssText}>
                    ${this._authService.isLoggedIn() ? 'Log Out' : 'Log In'}
                </app-button>

                <lion-dialog ?opened=${this._isOpen}>
                    <div slot="content" class="dialog">
                    </div>
                </lion-dialog>
            </header>
        `;
    }
}