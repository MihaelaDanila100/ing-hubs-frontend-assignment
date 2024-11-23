import { css, CSSResult } from "lit";
import { THEME_COLORS } from "./theme.js";

export const HeaderStyles: CSSResult = css`
    .header-container {
        background-color: ${THEME_COLORS.primaryBlue};
        color: ${THEME_COLORS.primaryLightWhite};
        height: 4vh;
        padding: 1rem;
        font-size: 1.2rem;
        font-weight: 500;
        display: flex;
        flex-directioN: row;
        justify-content: end;
    }
`;