import { LitElement, html, css, nothing } from 'lit';

class HeaderPage extends LitElement {

    static get properties() {
        return {
            name: { type: String },
            title: { type: String },
            path: { type: String },
            alt: { type: String },
            navigationItems: { type: Array },
            menu: { type: Boolean }
        };
    }

    constructor() {
        super();
        this.name = 'header-page';
        this.title = 'subtitle-header-page';
        this.path = 'src/images/logo.png';
        this.path2 = 'src/images/bars.svg';
        this.alt = 'logo landing page';
        this.navigationItems = [
            { name: 'Home', href: '/' },
            { name: 'About', href: '/about' },
            { name: 'Contact', href: '/contact' }
        ];
        this.menu = false;
    }

    pushBars() {
        this.menu = !this.menu;
        this.path2 = this.menu ? 'src/images/x.svg' : 'src/images/bars.svg';
    }

    navigate(event, path) {
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('navigate', {
            detail: { path },
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
            <header class="header-page">
                <div class="logo">
                    <div class="bars">
                        <img src="${this.path2}" alt="bars icons" class="icon" @click="${this.pushBars}" />
                    </div>
                    <img src="${this.path}" alt="${this.alt}" class="imgLogo"/>
                    <h1>${this.title}</h1>
                </div>

                <nav class="navigation ${this.menu ? 'show' : ''}">
                    <h2>Menu</h2>
                    <ul>
                        ${this.navigationItems.map(item => html`
                            <li><a href="${item.href}" @click="${(e) => this.navigate(e, item.href)}" >${item.name}</a></li>
                        `)}
                    </ul>
                </nav>
            </header>
        `;
    }

    static get styles() {
        return css`
            * {
                font-family: 'Roboto', sans-serif;
                font-size: inherit;
             }
            .header-page {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 1rem 2rem;
            }
            .header-page h1 {
                font-size: 2rem;
            }
            .header-page .logo {
                display: flex;
                align-items: center;
            }
            .header-page .logo > img {
                width: 5rem;
                height: 5rem;
            }
            .header-page .navigation ul {
                list-style-type: none;
            }
            .header-page .navigation li {
                display: inline;
                margin: 0 1rem;
                font-weight: bold;
            }
            .header-page .navigation a {
                text-decoration: none;
                color: #8c8c8c;
            }
            .header-page .navigation a:hover {
                text-decoration: underline;
            }
            .header-page .icon {
                height: 2rem;
                margin: 0 2rem;
            }
            .header-page .bars {
                display: none;
            }
            .header-page .navigation h2 {
                display: none;
            }
            @media (max-width: 767px) {
                .header-page {
                    flex-direction: column;
                    align-items: flex-start;
                }
                .header-page .logo {
                    margin-bottom: 1rem;
                }
                .header-page .navigation ul {
                    display: flex;
                    flex-direction: column;
                }
                .header-page .navigation li {
                    margin: 0.5rem 0;
                }
                .header-page .bars {
                    display: block;
                }
                .header-page .navigation {
                    background-color: #f8f8f8;
                    width: calc(100% - 2rem);
                    padding: 1rem;
                    border-radius: 0.5rem;
                }
                .header-page .navigation a {
                    color: #000;
                }
                .header-page .navigation h2 {
                    display: block;
                    margin: 1rem 0;
                    font-size: 1.3rem;
                    padding: 0 1rem;
                }
                .header-page .navigation {
                    display: none;
                }
                .header-page .show {
                    display: block;
                }
            }
        `;
    }

}

customElements.define('header-page', HeaderPage);