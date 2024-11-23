import { LitElement, TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import './components/header.js';
import './components/login-form.js';

@customElement('web-app')
export class WebApp extends LitElement {

  render() {
    return html`
      <app-header></app-header>
      <h1>Hello!</h1>
      <app-login-form></app-login-form>
    `;
  }
}
