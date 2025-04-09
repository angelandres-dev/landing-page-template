import { LitElement, html, nothing } from 'lit';

import './components/header-page.js';
import './components/home-page.js';
import './components/footer-page.js';
import './components/about-page.js';
import './components/contact-page.js';
import './components/privacy-page.js';
import './components/terms-page.js';

class IndexPage extends LitElement {

    static get properties() {
        return {
            name: { type: String },
            route: { type: String }
        };
    }

    constructor() {
        super();
        this.name = 'index-page';
        this.route = window.location.pathname;
        window.onpopstate = () => {
            this.route = window.location.pathname;
            this.requestUpdate();
        };
        this.addEventListener('navigate', this.navigate);
    }

    navigate(event) {
        event.preventDefault();
        const path = event.detail.path;
        window.history.pushState({}, path, window.location.origin + path);
        this.route = path;
        this.requestUpdate();
    }

    render() {
        return html`
            <header-page @navigate="${this.navigate}"></header-page>
            <main class="index-page">
                ${this.route === '/' ? html`<home-page></home-page>` : nothing}
                ${this.route === '/about' ? html`<about-page></about-page>` : nothing}
                ${this.route === '/contact' ? html`<contact-page></contact-page>` : nothing}
                ${this.route === '/privacy' ? html`<privacy-page></privacy-page>` : nothing}
                ${this.route === '/terms' ? html`<terms-page></terms-page>` : nothing}
            </main>
            <footer-page @navigate="${this.navigate}"></footer-page>
        `;
    }
}

customElements.define('index-page', IndexPage);