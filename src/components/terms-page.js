import { LitElement, html, css } from 'lit';

class TermsPage extends LitElement {

    static get properties() {
        return {
            name: { type: String },
            title: { type: String },
            text: { type: String },
        };
    }

    constructor() {
        super();
        this.name = 'terms-page';
        this.title = 'Aviso Legal';
        this.text = `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        `;
    }

    render() {
        return html`
            <main class="terms-page">
                <h2>${this.title}</h2>
                <p>${this.text}</p>
            </main>
        `;
    }

    static get styles() {
        return css`
            * {
                font-family: 'Roboto', sans-serif;
                font-size: inherit;
             }
            h2 {
                font-size: 2rem;
                margin-bottom: 1rem;
                border-bottom: 4px solid rgb(158, 158, 158);
                font-family: 'Roboto', sans-serif;
            }
            p {
                font-size: 1.3rem;
                line-height: 1.5;
                font-family: 'Roboto', sans-serif;
                color: rgb(158, 158, 158);
                white-space: pre-line;
            }
            .terms-page {
                padding: 2rem;
                margin: 0 2rem;
            }
        `;
    }


}

customElements.define('terms-page', TermsPage);