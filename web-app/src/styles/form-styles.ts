import { css, CSSResult } from "lit";
import { THEME_COLORS } from "./theme.js";

export const FormStyles: CSSResult = css`
    .form-container {
        width: 30rem;
        margin: auto;
        margin-top: 10vh;
    }

    .input>input {
        border-radius: 10px;
        padding: 10px;
        border: 2px solid ${THEME_COLORS.grayColor};
        font-size: 1rem;
        margin: 1rem;
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
        display: flex;
        flex-direction: row;
        justify-content: center;
        background-color: ${THEME_COLORS.lightGreen};
        color: ${THEME_COLORS.primaryLightWhite};
    }

    .loader-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        line-height: 60vh;
    }
`;