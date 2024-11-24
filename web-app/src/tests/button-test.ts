import { expect, fixture, html } from "@open-wc/testing"
import { THEME_COLORS } from "../styles/theme.js";

describe('AppButton', () => {
    it('has the right color', async () => {
        const element = await fixture(html`<app-button></app-button>`);
        const button = element.shadowRoot?.querySelector('button');
        if(button) {
            const styles = getComputedStyle(button);
            expect(styles.backgroundColor).to.equal(THEME_COLORS.buttonColor);
        }
    })
})