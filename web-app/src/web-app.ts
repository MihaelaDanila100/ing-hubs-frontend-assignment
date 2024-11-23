import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('web-app')
export class WebApp extends LitElement {
  

  render() {
    return html`
      <h1>Hello!</h1>
    `;
  }
}
