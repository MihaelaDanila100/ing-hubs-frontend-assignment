import { IsEmail, Required } from "@lion/ui/form-core.js";
import { InputTypes } from "../enums/input-types.js";
import { FormTemplate } from "../interfaces/form-template.js";

export const LOGIN_FORM_TEMPLATE: FormTemplate = {
    inputs: [
        {
            labelName: 'Email',
            controlName: 'email',
            inputType: InputTypes.EMAIL,
            validators: [new IsEmail()]
        }, {
            labelName: 'Password',
            controlName: 'password',
            inputType: InputTypes.PASSWORD,
            validators: [new Required()]
        }
    ]
}