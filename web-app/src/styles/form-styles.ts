import { css, CSSResult } from "lit";
import { THEME_COLORS } from "./theme.js";

export const FormStyles: CSSResult = css`
    .form-container {
        width: 30rem;
    }

    .input>input {
        border-radius: 10px;
        padding: 10px;
        border: 2px solid ${THEME_COLORS.grayColor};
        font-size: 1rem;
    }

    .input>input:focus {
        outline: none;
        border: 3px solid ${THEME_COLORS.lightBlue};
    }

    
    .input>label {
        color: ${THEME_COLORS.darkGray};
        font-size: 1.2rem;
        font-weight: 600;
    }

    .checkbox {
        margin: 1rem 0.5rem;
    }

    .login-button {
        width: 30rem;
        font-size: 1.3rem;
        padding: 1rem;
        border-radius: 0px;
    }
`;