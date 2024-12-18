import '@lion/ui/define/lion-form.js';
import '@lion/ui/define/lion-checkbox.js';
import '@lion/ui/define/lion-button-submit.js';
import './error-component.js';
import './input-element.js';
import './loader.js';
import { CSSResult, html, LitElement, TemplateResult } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { FormStyles } from '../styles/form-styles.js';
import { FormTemplate } from '../interfaces/form-template.js';
import { LOGIN_FORM_TEMPLATE } from '../constants/login-form-template.js';
import { InputTemplate } from '../interfaces/input-template.js';
import { LoginFormTemplate } from '../interfaces/login-form-template.js';
import { AuthService } from '../services/auth-service.js';

@customElement('app-login-form')
export class LoginForm extends LitElement {

    private _authService: AuthService = new AuthService();

    @state()
    _loginFormData: FormTemplate = {...LOGIN_FORM_TEMPLATE};

    @state()
    _isLoading: boolean = false;

    @state()
    private _isError: boolean = false;  

    private _formValue: LoginFormTemplate = {
        email: '',
        password: ''
    };
    
    static override get styles(): CSSResult[] {
        return [FormStyles]
    }

    private _submitForm = async (event: any) => {
        this._isLoading = true;
        try {
           await this._authService.authUser(this._formValue);
           this.dispatchEvent(new CustomEvent('onLogIn'));
        } catch(error) {
            this._isError = true;
        } finally {
            this._isLoading = false;
        }
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
                this._formValue.email = newValue[inputName];
            case "password":
                this._formValue.password = newValue[inputName];
        }
    }

    protected render(): TemplateResult<1> {
        return html`
        ${this._isError ? html`<app-error-component></app-error-component>` : html``}
        ${this._isLoading ? html`
            <div class='loader-container'>
                <app-loader></app-loader>
            </div>
            ` : html`
            <div class="form-container">
                    <lion-form @submit="${this._submitForm}">
                        <form @submit="${(event: any) => event.preventDefault()}">
                            <h1>Log In</h1>
                            ${
                                this._loginFormData.inputs.map((input: InputTemplate) => html`${this._renderInput(input)}`)
                            }                        
                            <lion-button-submit class="login-button">LOGIN</lion-button-submit>
                        </form>
                    </lion-form>
            </div>
        `}
        `;
    }
}