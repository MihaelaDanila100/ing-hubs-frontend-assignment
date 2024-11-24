import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import { FooterStyles } from "../styles/footer-styles.js";
import { FooterData } from "../interfaces/footer-data.js";

@customElement('app-footer')
export class AppFooter extends LitElement {

    static override get styles(): [CSSResult] {
        return [FooterStyles];
    }

    private _iconsList: FooterData[] = [
        {
            text: 'Bucharest, Sector 4, Bd. Bulevard'
        }, {
            text: 'info@contact.com'
        }, {
            text: '+1234567'
        }
    ];

    private _renderIconDetail = (iconItem: FooterData): TemplateResult<1> => {
        return html`
            <div>
                ${iconItem.text}
            </div>
        `;
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
                    <h3>Contact</h3>
                    <hr>
                    ${this._iconsList.map((iconItem: FooterData) => (html`${this._renderIconDetail(iconItem)}`))}
                </div>
            </footer>
        `;
    }
}