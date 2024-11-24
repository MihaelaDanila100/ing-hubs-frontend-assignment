import { LitElement, TemplateResult, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import './components/header.js';
import './components/login-form.js';
import './components/footer.js';
import './components/user-details.js';
import { AuthService } from './services/auth-service.js';

@customElement('web-app')
export class WebApp extends LitElement {

  private _authService: AuthService = new AuthService();

  @state()
  private _isLogIn: boolean = false;

  private _updateTemplate(value: boolean) {
    this._isLogIn = value;
  }

  connectedCallback(): void {
      super.connectedCallback();
      this._isLogIn = this._authService.isLoggedIn();
  }

  render() {
    return html`
      <app-header .isLogIn = ${this._isLogIn}
        @onLogOut=${() => this._updateTemplate(false)}></app-header>
      ${this._isLogIn ? html`<app-user-details></app-user-details>` : html`<app-login-form @onLogIn=${() => this._updateTemplate(true)}></app-login-form>`}
      
      <app-footer></app-footer>
    `;
  }
}
