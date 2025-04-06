import { LitElement, html, css } from 'lit';

class ContentSection extends LitElement {

    static get properties() {
        return {
            name: { type: String },
            title: { type: String },
            text: { type: String },
            path: { type: String }
        };
    }

    constructor() {
        super();
        this.title = 'Lorem ipsum dolor sit amet';
        this.name = 'content-section';
        this.text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, qui? Minima fugit ab harum repellendus, illo cupiditate suscipit asperiores perferendis officiis corrupti alias tempore deserunt reprehenderit. Iusto soluta tempore vero ex, quam magnam expedita accusamus quaerat temporibus delectus cum, odit aspernatur esse, voluptate in ullam rerum quia voluptates. Iste numquam aliquam beatae debitis totam, neque laborum perferendis architecto molestias nobis?';
        this.path = './src/images/data.png';
    }

    render() {
        return html`
            <div class="content-section">
                <div class="content-text">    
                    <h2>${this.title}</h2>
                    <p>${this.text}</p>
                </div>
                <img src="${this.path}" alt="${this.name}">
            </div>
        `;
    }

    static get styles() {
        return css`
            .content-section {
                display: flex;
                align-items: center;
                padding: 2rem;
            }
            .content-section img {
                width: 50%;
                height: auto;
            }
            .content-section .content-text {
                width: 50%;
                padding: 0 1rem;
                font-size: 1.2rem;
                font-family: 'Roboto', sans-serif;
            }
            .content-section h2 {
                font-size: 2rem;
                margin-bottom: 1rem;
            }
            .content-section p {
                font-size: 1.2rem;
                line-height: 1.8rem;
                color: rgb(158, 158, 158);
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
                }
                .content-section p {
                    display: none;
                }
                .content-section h2 {
                    margin: 0;
                }
            }
        `;
    }

}

customElements.define('content-section', ContentSection);