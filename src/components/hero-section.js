import { LitElement, html, css } from 'lit';

class HeroSection extends LitElement {

    static get properties() {
        return {
            name: { type: String }
        };
    }

    constructor() {
        super();
        this.name = 'hero-section';
        this.title = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, reiciendis!';
        this.subtitle = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore perspiciatis totam modi, incidunt necessitatibus rerum!';
        this.path = './src/images/hero.png';
        this.path2 = './src/images/whatsapp.svg';
        this.alt = 'Hero image';
        this.number = '+52 5561231792';
        this.button = 'Write me!';
    }

    render() {
        return html`
            <div class="hero-section">
                <img src="${this.path}" alt="${this.alt}">
                <div class="content">
                    <h2>${this.title}</h2>
                    <h3>${this.subtitle}</h3>
                    <div class="action">
                        <button type="button" >
                        ${this.button}
                            <img src="${this.path2}" alt="WhatsApp icon" class="icon" >
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    static get styles() {
        return css`
            .hero-section {
                display: flex;
                justify-content: space-between;
                padding: 2rem;
                margin: 2rem;
            }
            .hero-section .content {
                padding: 0 2rem;
                margin: 0 2rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .hero-section img {
                width: 30rem;
                height: 30rem;
            }
            .hero-section .action {
                display: flex;
                justify-content: right;
                align-items: center;
            }

            .hero-section button {
                padding: 0.5rem 1rem;
                width: 10rem;
                height: 3rem;
                background-color: #118dee;
                color: #ffffff;
                border: none;
                border-radius: 0.5rem;
                cursor: pointer;
                font-weight: bold;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .hero-section button:hover {
                background-color: #0056b3;
            }
            .hero-section h2 {
                margin: 0;
                font-size: 2.5rem;
            }
            .hero-section h3 {
                font-size: 1.2rem;
                line-height: 1.5rem;
                margin: 1rem 0;
                color:#9e9e9e;
            }
            .hero-section .icon {
                width: 1.5rem;
                height: 1.5rem;
                margin: 0 0.5rem;
            }

        `;
    }
}

customElements.define('hero-section', HeroSection);