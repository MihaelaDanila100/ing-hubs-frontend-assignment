import { LitElement, TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './components/header.js';
import './components/login-form.js';

@customElement('web-app')
export class WebApp extends LitElement {

  private _isLogIn: boolean = false;

  private _updateTemplate(value: boolean) {
    this._isLogIn = value;
    this.requestUpdate();
  }

  render() {
    return html`
      <app-header .isLogIn = ${this._isLogIn}></app-header>
      <h1>Hello!</h1>
      <app-login-form @onLogIn=${() => this._updateTemplate(true)}></app-login-form>
    `;
  }
}
