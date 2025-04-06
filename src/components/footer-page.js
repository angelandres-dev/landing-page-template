import { LitElement, html, css } from 'lit';

class FooterPage extends LitElement {

    static get properties() {
        return {
            name: { type: String },
            copyright: { type: String },
            telephone: { type: String },
            email: { type: String },
            address: { type: String }
        };
    }

    constructor() {
        super();
        this.name = 'footer-page';
        this.copyright = '© 2025 Company Name. All rights reserved.';
        this.telephone = '+52 12 34567890';
        this.email = 'ejemplo@gmail.com';
        this.address = '123 Main St, City, Country';
        this.path = './src/images/phone.svg';
        this.path2 = './src/images/mail.svg';
        this.path3 = './src/images/adress.svg';
        this.alt = 'phone';
        this.alt2 = 'email';
        this.alt3 = 'address';
    }

    render() {
        return html`
            <div class="footer-page">
                <div class="copyright">
                    <p>${this.copyright}</p>
                </div>
                <div class="contact-info">
                    <div class="info">
                        <img src="${this.path}" alt="${this.alt}">
                        <p>${this.telephone}</p>
                    </div>
                    <div class="info">
                        <img src="${this.path2}" alt="${this.alt2}">
                        <p>${this.email}</p>
                    </div>
                    <div class="info">
                        <img src="${this.path3}" alt="${this.alt3}">
                        <p>${this.address}</p>
                    </div>
                </div>
            </div>
        `;
    }

    static get styles() {
        return css`
            * {
                font-family: 'Roboto', sans-serif;
                font-size: 1rem;
            }
            .footer-page {
                background-color: #333333;
                color: #ffffff;
                padding: 2rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .footer-page .copyright {
                font-weight: bold;
            }
            .footer-page .contact-info {
                display: flex;
                align-items: center;
            }
            .footer-page .contact-info .info {
                display: flex;
                margin: 0 1rem;
                align-items: center;
            }
            .footer-page .contact-info .info img {
                width: 20px;
                height: 20px;
                margin-right: 0.5rem;
            }
            @media (max-width: 767px) {
                .footer-page {
                    flex-direction: column;
                    align-items: flex-start;
                }
                .footer-page .contact-info {
                    flex-direction: column;
                    align-items: flex-start;
                }
            }
        `;
    }            

}

customElements.define('footer-page', FooterPage);