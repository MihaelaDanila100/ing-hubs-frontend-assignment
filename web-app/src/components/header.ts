import { CSSResult, html, HTMLTemplateResult, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { HeaderStyles } from "../styles/header-styles.js";
import './button.js';
import './dialog.js';
import { THEME_COLORS } from "../styles/theme.js";

@customElement('app-header')
export class HeaderComponent extends LitElement {

    @state()
    private _isOpen: boolean = false;

    static override get styles(): [CSSResult] {
        return [HeaderStyles];
    }

    private _toggleDialog = (newIsOpen: boolean) => {
        this._isOpen = newIsOpen;
    }

    protected render(): HTMLTemplateResult {
        
        return html`
            <header class = "header-container">
                <app-button
                        @click = ${this._toggleDialog(true)}
                        .buttonColor = ${THEME_COLORS.primaryLightWhite.cssText}
                        .textColor = ${THEME_COLORS.primaryBlue.cssText}>
                    Log In
                </app-button>

                <lion-dialog ?opened=${this._isOpen}>
                    <div slot="content" class="dialog">
                        Hello dialog!
                    </div>
                </lion-dialog>
            </header>
        `;
    }
}