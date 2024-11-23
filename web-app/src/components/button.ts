import { LionButton } from "@lion/ui/button.js";
import { css, CSSResult, PropertyValues } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { THEME_COLORS } from "../styles/theme.js";

@customElement('app-button')
export class AppButton extends LionButton {

    @property({type: String})
    buttonColor: string = THEME_COLORS.defaultBlue.cssText;

    @property({type: String})
    textColor: string = THEME_COLORS.defaultBlue.cssText;

    protected updated(_changedProperties: PropertyValues): void {
        super.updated(_changedProperties);
        if(_changedProperties.has('buttonColor')) {
            this.style.setProperty('background-color', this.buttonColor);
        }
        if(_changedProperties.has('textColor')) {
            this.style.setProperty('color', this.textColor);
        }
    }

    static override get styles() {
        const buttonStyle: CSSResult = css`
            :host {
                border-radius: 10px !important;
                font-weight: 600;
                cursor: pointer;
            }
        `;
        return [
            buttonStyle,
            ...super.styles,
        ]
    }
}