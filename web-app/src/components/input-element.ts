import { customElement, property } from "lit/decorators.js";
import { LionInput } from '@lion/ui/input.js';
import { html, TemplateResult } from "lit";
import { FormStyles } from "../styles/form-styles.js";
import { InputTypes } from "../enums/input-types.js";

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
        return html`
            <style>${FormStyles}</style>
            <lion-input label="${this.labelName}" 
                name="${this.inputName}"
                type="${this.inputType}"></lion-input>
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