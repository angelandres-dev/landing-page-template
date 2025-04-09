import { LitElement, html, css } from 'lit';

class ContentSection extends LitElement {

    static get properties() {
        return {
            name: { type: String },
            title: { type: String },
            text: { type: String },
            path: { type: String },
            path2: { type: String },
            button: { type: String },
            youtubeURL: { type: String }
        };
    }

    constructor() {
        super();
        this.title = 'Lorem ipsum dolor sit amet';
        this.name = 'content-section';
        this.text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, qui? Minima fugit ab harum repellendus, illo cupiditate suscipit asperiores perferendis officiis corrupti alias tempore deserunt reprehenderit. Iusto soluta tempore vero ex, quam magnam expedita accusamus quaerat temporibus delectus cum, odit aspernatur esse, voluptate in ullam rerum quia voluptates. Iste numquam aliquam beatae debitis totam, neque laborum perferendis architecto molestias nobis?';
        this.path = './src/images/data.png';
        this.path2 = './src/images/iconYoutubeW.svg';
        this.button = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, qui? Minima fugit ab harum repellendus, illo cupiditate suscipit asperiores perferendis officiis corrupti alias tempore deserunt reprehenderit. Iusto soluta tempore vero ex, quam magnam expedita accusamus quaerat temporibus delectus cum, odit aspernatur esse, voluptate in ullam rerum quia voluptates. Iste numquam aliquam beatae debitis totam, neque laborum perferendis architecto molestias';
        this.youtubeURL = 'https://www.youtube.com/';
    }

    render() {
        return html`
            <div class="content-section">
                <div class="content-text">    
                    <h2>${this.title}</h2>
                    <p>${this.text}</p>
                    <a class="button" href="${this.youtubeURL}" target="_bank" >
                        ${this.button}
                        <img src="${this.path2}" alt="YouTube Icon" class="icon" >
                    </a>
                </div>
                <img src="${this.path}" alt="${this.name}">
            </div>
        `;
    }

    static get styles() {
        return css`
            * {
                font-family: 'Roboto', sans-serif;
                font-size: inherit;
            }
            .content-section {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 2rem;
            }
            .content-section img {
                width: 40%;
                height: auto;
            }
            .content-section .content-text {
                width: 50%;
                padding: 0 1rem;
                font-family: 'Roboto', sans-serif;
            }
            .content-section h2 {
                font-size: 2rem;
                margin-bottom: 1rem;
            }
            .content-section p {
                font-size: 1.3rem;
                line-height: 1.8rem;
                color: rgb(158, 158, 158);
            }
            .content-section .button {
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
                width: 10rem;
                height: 2rem;
            }
            .content-section .button:hover {
                background-color: #0056b3;
            }
            .content-section .icon {
                width: 1.5rem;
                height: 1.5rem;
                margin: 0 0.5rem;
            }
            @media (max-width: 767px) {
                .content-section {
                    flex-direction: column;
                    text-align: center;
                }
                .content-section img {
                    width: 100%;
                }
                .content-section .content-text {
                    width: 100%;
                    padding: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .content-section p {
                    display: none;
                }
                .content-section h2 {
                    margin: 0;
                }
                .content-section .button {
                    width: 80%;
                    height: auto;
                    padding: 1rem;
                    margin: 1rem 0;
                }
            }
        `;
    }

}

customElements.define('content-section', ContentSection);