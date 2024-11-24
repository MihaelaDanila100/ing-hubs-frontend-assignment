import '@lion/ui/define/lion-form.js';
import '@lion/ui/define/lion-checkbox.js';
import './input-element.js';
import { CSSResult, html, LitElement, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { FormStyles } from '../styles/form-styles.js';
import { FormTemplate } from '../interfaces/form-template.js';
import { LOGIN_FORM_TEMPLATE } from '../constants/login-form-template.js';
import { InputTemplate } from '../interfaces/input-template.js';
import { THEME_COLORS } from '../styles/theme.js';

@customElement('app-login-form')
export class LoginForm extends LitElement {

    @state()
    loginFormData: FormTemplate = {...LOGIN_FORM_TEMPLATE};
    
    static override get styles(): CSSResult[] {
        return [FormStyles]
    }

    private _submitForm = (event: any) => {
        console.log("Hi! ", event);
    }

    private _renderInput = (inputTemplate: InputTemplate): TemplateResult<1> => {
        return html`
            <app-input-element .labelName=${inputTemplate.labelName}
                .inputName=${inputTemplate.controlName}
                .validatorsList=${inputTemplate.validators || []}
                .inputType=${inputTemplate.inputType}></app-input-element>
        `;
    }

    protected render(): TemplateResult<1> {
        return html`
            <div class="form-container">
                <lion-form @submit="${this._submitForm}">
                    <form @submit="${(event: any) => event.preventDefault()}">
                        ${
                            this.loginFormData.inputs.map((input: InputTemplate) => html`${this._renderInput(input)}`)
                        }

                        <lion-checkbox label="Keep me logged in" 
                            class="checkbox"
                            .choiceValue=${true}></lion-checkbox>
                        
                        <app-button .buttonColor=${THEME_COLORS.lightGreen}
                            .textColor=${THEME_COLORS.primaryLightWhite}
                            class="login-button">LOGIN</app-button>
                    </form>
                </lion-form>
            </div>
        `;
    }
}