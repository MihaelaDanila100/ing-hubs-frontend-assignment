import { css, CSSResult } from "lit";
import { THEME_COLORS } from "./theme.js";

export const FooterStyles: CSSResult = css`
    .footer {
        background-color: ${THEME_COLORS.mediumGray};
        color: ${THEME_COLORS.primaryLightWhite};
        width: 100%;
        display: grid;
        grid-template-columns: 50% 50%;
        position: fixed;
        bottom: 0;
    }

    .footer-data {
        margin: 1rem;
    }
`;