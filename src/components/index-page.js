import { LitElement, html } from 'lit';

import './hero-section.js';
import './feature-section.js';

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
            <div class="index-page">
                <hero-section></hero-section>
                <feature-section></feature-section>
            </div>
        `;
    }
}

customElements.define('index-page', IndexPage);