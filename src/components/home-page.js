import { LitElement, html } from 'lit';

import './hero-section.js';
import './feature-section.js';
import './content-section.js';

class HomePage extends LitElement {

    static get properties() {
        return {
            name: { type: String }
        };
    }

    constructor() {
        super();
        this.name = 'home-page';
    }

    render() {
        return html`
            <div class="home-page">
                <hero-section></hero-section>
                <feature-section></feature-section>
                <content-section></content-section>
            </div>
        `;
    }
}

customElements.define('home-page', HomePage);