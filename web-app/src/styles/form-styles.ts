import { css, CSSResult } from "lit";

export const FormStyles: CSSResult = css`
    .form-container {
        width: 30rem;
    }
    .input>input {
        border-radius: 10px;
    }
`;

export const InputStyles: CSSResult = css`
    :host {
        border-radius: 10px;
    }
`;