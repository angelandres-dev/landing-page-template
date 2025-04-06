import { LitElement, html, css } from 'lit';

class SocialMedia extends LitElement {

    static get properties() {
        return {
            name: { type: String }
        };
    }

    constructor() {
        super();
        this.name = 'contact-page';
        this.title = 'Contact Us';
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
                <h2>Connect with us on oficial social media</h2>
                <div class="social-cards">
                    ${this.socialMediaLinks.map(item => html`
                        <div class="card">
                            <div class="header-card">
                                <img src="${item.icon}" alt="Icono de ${item.alt}">
                                <h3>${item.alt}</h3>
                            </div>
                            <div class="content-card">
                                <img src="${item.path}" alt="${item.alt}">
                                <p>Follow us</p>
                                <a href="${item.link}" target="_blank">Go to ${item.alt}</a>
                            </div>
                    `)}
                </div>
            </div>
        `;
    }

    static get styles() {
        return css`
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
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                padding: 1rem 2rem;
                width: 12rem;
                margin: 0 1rem;
            }
            .header-card {
                display: flex;
                align-items: center;
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
                font-size: 1.2rem;
                color: rgb(158, 158, 158);
            }
            .content-card a {
                text-decoration: none;
                color: #007BFF;
                font-weight: bold;
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