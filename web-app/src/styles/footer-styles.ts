import { css, CSSResult } from "lit";
import { THEME_COLORS } from "./theme.js";

export const FooterStyles: CSSResult = css`
    .footer {
        height: 15rem;
        background-color: ${THEME_COLORS.mediumGray};
        color: ${THEME_COLORS.primaryLightWhite};
        font-size: 1.2rem;
        position: absolute;
        bottom: 0;
        width: 100%;
    }
`;