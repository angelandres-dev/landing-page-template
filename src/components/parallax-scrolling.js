import { LitElement, html, css } from 'lit';

class ParallaxScrolling extends LitElement {

    static get properties() {
        return {
            name: { type: String },
            path: { type: String }
        };
    }

    constructor() {
        super();
        this.name = 'parallax-scrolling';
        this.path = './src/images/parallax.png';
    }

    render() {
        return html`
            <div class="parallax-scrolling"></div>

            <style>
                .parallax-scrolling {
                    background-image: url(${this.path});
                }
            </style>
        `;
    }

    static get styles() {
        return css`
            .parallax-scrolling {
                width: 100%;
                height: 33vh;
                background-attachment: fixed;
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            }
        `;
    }
    
}

customElements.define('parallax-scrolling', ParallaxScrolling);