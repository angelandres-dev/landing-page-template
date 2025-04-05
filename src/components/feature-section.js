import { LitElement, html, css } from 'lit';

class FeatureSection extends LitElement {

    static get properties() {
        return {
            name: { type: String }
        };
    }

    constructor() {
        super();
        this.name = 'feature-section';
        this.path = 'src/images/face.svg';
        this.path2 = 'src/images/knight.svg';
        this.path3 = 'src/images/newspaper.svg';
        this.title = 'Lorem ipsum dolor sit amet.';
        this.title2 = 'Lorem ipsum dolor sit amet.';
        this.title3 = 'Lorem ipsum dolor sit amet.';
        this.alt = 'Lorem ipsum dolor sit amet.';
        this.alt2 = 'Lorem ipsum dolor sit amet.';
        this.alt3 = 'Lorem ipsum dolor sit amet.';
        this.description = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum aspernatur earum vel commodi amet eaque.';
        this.description2 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum aspernatur earum vel commodi amet eaque.';
        this.description3 = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum aspernatur earum vel commodi amet eaque.';
    }

    render() {
        return html`
            <div class="feature-section">
                <div class="feature">
                    <img src="${this.path}" alt="${this.alt}">
                    <h2>${this.title}</h2>
                    <p>${this.description}</p>
                </div>
                <div class="feature">
                    <img src="${this.path2}" alt="${this.alt2}">
                    <h2>${this.title2}</h2>
                    <p>${this.description2}</p>
                </div>
                <div class="feature">
                    <img src="${this.path3}" alt="${this.alt3}">
                    <h2>${this.title3}</h2>
                    <p>${this.description3}</p>
                </div>
            </div>
        `;
    }

    static get styles() {
        return css`
            * {
            font-family: 'Roboto', sans-serif;
            }
            .feature-section {
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding: 2rem;
            }
            .feature-section .feature {
                max-width: 15rem;
                text-align: center;
            }
            .feature-section .feature img {
                width: 20%;
                height: auto;
            }
            .feature-section .feature p {
                font-size: 1.2rem;
                line-height: 1.8rem;
                font-weight: 500;
                color: #9e9e9e;
            }
            @media (max-width: 767px) {
                .feature-section {
                    flex-direction: column;
                    align-items: center;
                }
                .feature-section .feature {
                    margin-bottom: 2rem;
                }
            }
        `;
    }

}

customElements.define('feature-section', FeatureSection);