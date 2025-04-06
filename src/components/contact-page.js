import { LitElement, html } from 'lit';
import './hero-section.js';
import './social-media.js';

class ContactPage extends LitElement {

    static get properties() {
        return {
            name: { type: String }
        };
    }

    constructor() {
        super();
        this.name = 'contact-page';
    }

    render() {
        return html`
            <social-media></social-media>
            <hero-section></hero-section>
        `;
    }
}

customElements.define('contact-page', ContactPage);