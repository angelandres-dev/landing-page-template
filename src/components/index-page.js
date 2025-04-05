import { LitElement, html } from 'lit';

import './hero-section.js';

class IndexPage extends LitElement {

    static get properties() {
        return {
            name: { type: String }
        };
    }

    constructor() {
        super();
        this.name = 'index-page';
    }

    render() {
        return html`
            <div id="index-page">
                <hero-section></hero-section>
                <hero-section></hero-section>

                <hero-section></hero-section>
                <hero-section></hero-section>
                <hero-section></hero-section>
                <hero-section></hero-section>

            </div>
        `;
    }
}

customElements.define('index-page', IndexPage);