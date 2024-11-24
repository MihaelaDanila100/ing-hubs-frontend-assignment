import '@lion/ui/define/lion-form.js';
import '@lion/ui/define/lion-checkbox.js';
import '@lion/ui/define/lion-button-submit.js';
import './input-element.js';
import { CSSResult, html, LitElement, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { FormStyles } from '../styles/form-styles.js';
import { FormTemplate } from '../interfaces/form-template.js';
import { LOGIN_FORM_TEMPLATE } from '../constants/login-form-template.js';
import { InputTemplate } from '../interfaces/input-template.js';
import { LoginFormTemplate } from '../interfaces/login-form-template.js';

@customElement('app-login-form')
export class LoginForm extends LitElement {

    @state()
    loginFormData: FormTemplate = {...LOGIN_FORM_TEMPLATE};

    private formValue: LoginFormTemplate = {
        email: '',
        password: ''
    };
    
    static override get styles(): CSSResult[] {
        return [FormStyles]
    }

    private _submitForm = (event: any) => {
        console.log("Hi! ", this.formValue);
    }

    private _renderInput = (inputTemplate: InputTemplate): TemplateResult<1> => {
        return html`
            <app-input-element .labelName=${inputTemplate.labelName}
                .inputName=${inputTemplate.controlName}
                .validatorsList=${inputTemplate.validators || []}
                .inputType=${inputTemplate.inputType}
                @onChangeValue="${(event: CustomEvent) => this._updateForm(event.detail)}"></app-input-element>
        `;
    }

    private _updateForm(newValue: any) {
        const inputName: string = Object.keys(newValue)[0];
        switch (inputName) {
            case "email":
                this.formValue.email = newValue[inputName];
            case "password":
                this.formValue.password = newValue[inputName];
        }
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
                        
                        <lion-button-submit class="login-button">LOGIN</lion-button-submit>
                    </form>
                </lion-form>
            </div>
        `;
    }
}