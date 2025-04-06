import { LitElement, html } from 'lit';

import './parallax-scrolling.js';
import './about-us.js';
import './hero-section.js';

class AboutPage extends LitElement {

    static get properties() {
        return {
            name: { type: String }
        };
    }

    constructor() {
        super();
        this.name = 'about-page';
    }

    render() {
        return html`
            <parallax-scrolling></parallax-scrolling>
            <about-us></about-us>
            <hero-section></hero-section>
        `;
    }
}

customElements.define('about-page', AboutPage);