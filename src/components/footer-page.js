import { LitElement, html } from 'lit';

class FooterPage extends LitElement {

    static get properties() {
        return {
            title: { type: String }
        };
    }

    constructor() {
        super();
        this.title = 'footer-page';
    }

    render() {
        return html`
            <div id="footer-page">
                <h1>${this.title}</h1>
            </div>
        `;
    }

}

customElements.define('footer-page', FooterPage);