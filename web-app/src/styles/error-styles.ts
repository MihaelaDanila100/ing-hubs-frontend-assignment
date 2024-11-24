import { css, CSSResult } from "lit";
import { THEME_COLORS } from "./theme.js";

export const ErrorStyles: CSSResult = css`
    .error-container {
        width: 100%;
        height: 3rem;
        background-color: ${THEME_COLORS.lightRed};
        color: ${THEME_COLORS.darkRed};
        padding: 1rem;
        font-size: 1rem;
    }

    .error-title {
        font-size: 1.2rem;
        font-weight: 600;
    }
`;