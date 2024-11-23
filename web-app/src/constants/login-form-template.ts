import { InputTypes } from "../enums/input-types.js";
import { FormTemplate } from "../interfaces/form-template.js";

export const LOGIN_FORM_TEMPLATE: FormTemplate = {
    inputs: [
        {
            labelName: 'Email',
            controlName: 'email',
            inputType: InputTypes.EMAIL
        }
    ]
}