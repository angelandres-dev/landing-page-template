import { LitElement, html, css } from 'lit';

class HeroSection extends LitElement {

    static get properties() {
        return {
            name: { type: String },
            title: { type: String },
            subtitle: { type: String },
            path: { type: String },
            path2: { type: String },
            alt: { type: String },
            button: { type: String },
            whatsappNumber: { type: String },
            whatsappMessage: { type: String }
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
        this.number = '+52 1111111111';
        this.button = 'Write me!';
        this.whatsappNumber = '1234567890';
        this.whatsappMessage = 'Hello, I would like to know more about your services.';
    }

    render() {
        const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;

        return html`
            <div class="hero-section">
                <img src="${this.path}" alt="${this.alt}">
                <div class="content">
                    <h2>${this.title}</h2>
                    <p>${this.subtitle}</p>
                    <div class="action">
                        <a class="button" href="${whatsappUrl}" target="_bank" >
                            ${this.button}
                            <img src="${this.path2}" alt="WhatsApp Icon" class="icon" >
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    static get styles() {
        return css`
            * {
                font-family: 'Roboto', sans-serif;
                font-size: inherit;
             }
            .hero-section {
                display: flex;
                justify-content: space-between;
                padding: 2rem;
            }
            .hero-section .content {
                padding: 0 2rem;
                margin: 0 2rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 50%;
                text-align: right;
            }
            .hero-section img {
                width: 50%;
            }
            .hero-section .action {
                display: flex;
                justify-content: right;
                align-items: center;
            }
            .hero-section .button {
                padding: 1rem 2rem;
                background-color: #118dee;
                color: #ffffff;
                border: none;
                border-radius: 0.5rem;
                font-weight: bold;
                text-decoration: none;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .hero-section .button:hover {
                background-color: #0056b3;
            }
            .hero-section h2 {
                margin: 0;
                font-size: 2rem;
            }
            .hero-section p {
                font-size: 1.3rem;
                line-height: 1.8rem;
                font-weight: 500;
                margin: 1rem 0;
                color:#9e9e9e;
            }
            .hero-section .icon {
                width: 1.5rem;
                height: 1.5rem;
                margin: 0 0.5rem;
            }
            @media (max-width: 767px) {
                .hero-section {
                    flex-direction: column;
                    align-items: center;
                }
                .hero-section img {
                    margin-bottom: 2rem;
                }
                .hero-section .content {
                    width: 100%;
                    text-align: center;
                }
                .hero-section .action {
                    justify-content: center;
                }
            }


        `;
    }
}

customElements.define('hero-section', HeroSection);