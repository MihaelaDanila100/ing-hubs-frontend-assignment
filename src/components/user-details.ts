import { CSSResult, html, LitElement, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";
import { UserDetailsStyle } from "../styles/user-details-style.js";

@customElement('app-user-details')
export class AppUserDetails extends LitElement {
    
    static override get styles(): CSSResult[] {
        return [UserDetailsStyle]
    }
    
    protected render(): TemplateResult<1> {
        return html`
            <div class='user-details'>
                <h1>User details</h1>
                <hr>
                <div class='detail-row'><span class='detail-label'>Email:</span> test@gmail.com</div>
                <div class='detail-row'><span class='detail-label'>Date of creating account:</span> 24.11.2024</div>
            </div>
        `;
    }
}