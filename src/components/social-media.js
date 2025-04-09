import { LitElement, html, css } from 'lit';

class SocialMedia extends LitElement {

    static get properties() {
        return {
            name: { type: String },
            title: { type: String },
            text: { type: String },
            socialMediaLinks: { type: Array }
        };
    }

    constructor() {
        super();
        this.name = 'contact-page';
        this.title = 'Contact Us';
        this.text = 'Siguenos';
        this.socialMediaLinks = [
            {
                path: './src/images/facebook.png',
                alt: 'Facebook',
                link: 'https://www.facebook.com',
                icon: './src/images/iconFacebook.svg'
            },
{
                path: './src/images/twitter.png',
                alt: 'Twitter',
                link: 'https://www.x.com',
                icon: './src/images/iconTwitter.svg'
            },
            {
                path: './src/images/instagram.png',
                alt: 'Instagram',
                link: 'https://www.instagram.com',
                icon: './src/images/iconInstagram.svg'
            },
            {
                path: './src/images/youtube.png',
                alt: 'Youtube',
                link: 'https://www.youtube.com',
                icon: './src/images/iconYoutube.svg'
            }
        ];
    }

    render() {
        return html`
            <div class="social-media">
                <h2>${this.title}</h2>
                <div class="social-cards">
                    ${this.socialMediaLinks.map(item => html`
                        <div class="card">
                            <div class="header-card">
                                <img src="${item.icon}" alt="Icono de ${item.alt}">
                                <h3>${item.alt}</h3>
                            </div>
                            <div class="content-card">
                                <img src="${item.path}" alt="${item.alt}">
                                <p>${this.text}</p>
                                <a href="${item.link}" target="_blank">${item.alt}</a>
                            </div>
                    `)}
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
            .social-media {
                padding: 2rem;
                text-align: center;
            }
            .social-cards {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
            }
            .card {
                border-radius: 1rem;
                padding: 1rem 2rem;
                width: 15rem;
                margin: 0 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .header-card {
                display: flex;
                align-items: center;
            }
            .card:hover {
                transform: scale(1.05);
                transition: transform 0.2s;
            }
            .header-card img {
                width: 2.5rem;
                height: 2.5rem;
                margin-right: 0.5rem;
                margin-bottom: 0.5rem;
            }

            .content-card img {
                width: 100%;
                height: auto;
            }
            .content-card p {
                margin: 0.5rem 0;
                font-size: 1.3rem;
                color: rgb(158, 158, 158);
            }
            .content-card a {
                text-decoration: none;
                color: #007BFF;
            }
            .content-card a:hover {
                text-decoration: underline;
            }
            @media (max-width: 767px) {
                .social-cards {
                    flex-direction: column;
                    align-items: center;
                }
                .card {
                    width: 100%;
                    max-width: 15rem;
                    margin: 1rem 0;
                }
            }
        `;
    }

}

customElements.define('social-media', SocialMedia);