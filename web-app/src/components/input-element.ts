import { customElement, property } from "lit/decorators.js";
import { LionInput } from '@lion/ui/input.js';
import { html, TemplateResult } from "lit";
import { FormStyles } from "../styles/form-styles.js";
import { InputTypes } from "../enums/input-types.js";
import '@lion/ui/define/lion-input.js';
import '@lion/ui/define/lion-input-email.js';

@customElement('app-input-element')
export class AppInputElement extends LionInput {

    @property({type: String})
    labelName: string = '';
    
    @property({type: String})
    inputName: string = '';
    
    @property({type: String})
    inputType: InputTypes = InputTypes.INPUT;

    static get scopedElements() {
        return {
            'lion-input': LionInput
        }
    }

    private _renderSlot() {
        if(this.inputType === InputTypes.EMAIL) {
            return html`
                <style>${FormStyles}</style>
                <lion-input-email label=${this.labelName}
                    name=${this.inputName}
                    class="input"></lion-input-email>
            `;
        }
        return html`
            <style>${FormStyles}</style>
            <lion-input label="${this.labelName}" 
                name="${this.inputName}"
                type="${this.inputType}"
                class="input"></lion-input>
        `;
    }

    get slots() {
        return {
            ...super.slots,
            '': () => ({
                template: this._renderSlot()
            })
        }
    }

    protected render(): TemplateResult<1> {
        return html`<slot></slot>`;
    }
}