import { Validator } from "@lion/ui/form-core.js";
import { InputTypes } from "../enums/input-types.js";

export interface InputTemplate {
    labelName: string;
    inputType: InputTypes;
    controlName: string;
    validators?: Validator[];
}
