import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import { FooterStyles } from "../styles/footer-styles.js";

@customElement('app-footer')
export class AppFooter extends LitElement {

    static override get styles(): [CSSResult] {
        return [FooterStyles];
    }
    
    protected render(): TemplateResult<1> {
        return html`
            <footer class='footer'>
                <div class='footer-data'>
                    <h3>About us</h3>
                    <hr>
                    <div>This is a description of the website. Here goes any relevant information about the website</div>
                </div>

                <div class='footer-data'>
                </div>
            </footer>
        `;
    }
}