import { LitElement, html, nothing, css } from 'lit';

class AboutUs extends LitElement {

    static get properties() {
        return {
            name: { type: String },
            perfil: { type: String },
            valores: { type: String },
            mision: { type: String },
            vision: { type: String },
            equipo: { type: String },
            path: { type: String }
        };
    }

    constructor() {
        super();
        this.name = 'about-us';
        this.perfil = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iusto rem corporis hic vero recusandae quibusdam, earum fuga consequuntur laborum cumque placeat alias labore voluptatibus incidunt deleniti? Repellendus quibusdam dolore quidem nihil quis officia perferendis! Quis ut veniam molestiae inventore.";
        this.valores = "";
        this.mision = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iusto rem corporis hic vero recusandae quibusdam, earum fuga consequuntur laborum cumque placeat alias labore voluptatibus incidunt deleniti? Repellendus quibusdam dolore quidem nihil quis officia perferendis! Quis ut veniam molestiae inventore.";
        this.vision = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iusto rem corporis hic vero recusandae quibusdam, earum fuga consequuntur laborum cumque placeat alias labore voluptatibus incidunt deleniti? Repellendus quibusdam dolore quidem nihil quis officia perferendis! Quis ut veniam molestiae inventore.";
        this.equipo = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iusto rem corporis hic vero recusandae quibusdam, earum fuga consequuntur laborum cumque placeat alias labore voluptatibus incidunt deleniti? Repellendus quibusdam dolore quidem nihil quis officia perferendis! Quis ut veniam molestiae inventore.";
        this.path = './src/images/valores.png';
        this.path2 = './src/images/equipo.png';
    }

    perfilHTML() {
        return html`
            <section class="perfil">
                <h3>Perfil</h3>
                <p>${this.perfil}</p>
                <div class="images">
                    <img src="${this.path}" alt="Valores"/>
                </div>
            </section>
        `;
    }

    valoresHTML() {
        return html`
            <section class="valores">
                <h3>Valores</h3>
                <p>${this.valores}</p>
                <div class="images">
                    <img src="${this.path}" alt="Valores"/>
                </div>
            </section>
        `;
    }

    misionHTML() {
        return html`
            <section class="mision">
                <h3>Misión</h3>
                <p>${this.mision}</p>
            </section>
        `;
    }

    visionHTML() {
        return html`
            <section class="vision">
                <h3>Visión</h3>
                <p>${this.vision}</p>
            </section>
        `;
    }

    equipoHTML() {
        return html`
            <section class="equipo">
                <div class="text">
                    <h3>Equipo</h3>
                    <p>${this.equipo}</p>
                </div>
                <div class="images">
                    <img src="${this.path2}" alt="Valores"/>
                </div>
            </section>
        `;
    }

    render() {
        return html`
            <main class="about-us">
                ${this.perfil.length > 0 ? this.perfilHTML() : nothing}
                ${this.valores.length > 0 ? this.valoresHTML() : nothing}
                ${this.mision.length > 0 ? this.misionHTML() : nothing}
                ${this.vision.length > 0 ? this.visionHTML() : nothing}
                ${this.equipo.length > 0 ? this.equipoHTML() : nothing}
            </main>
        `;
    }

    static get styles() {
        return css`
            * {
                font-family: 'Roboto', sans-serif;
            }
            .about-us section {
                padding: 2rem;
                margin: 0 2rem;
                border-bottom: 1px solid rgb(158, 158, 158);
            }
            .about-us h3 {
                margin-bottom: 1rem;
                font-size: 2rem;
                margin:1rem 0;
                padding:0.1rem;
                border-bottom: 4px solid rgb(158, 158, 158);
                width: 20%;
            }
            .about-us p {
                line-height: 1.5;
                font-size: 1.2rem;
                margin:0;
                color: rgb(158, 158, 158);
            }
            .about-us img {
                width: 35%;
                height: auto;
            }
            .about-us .images {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .about-us .text {
                width: 50%;
                padding: 2rem;
            }
            .about-us .equipo {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            @media (max-width: 767px) {
                .about-us .equipo {
                    flex-direction: column;
                    align-items: center;
                }
                .about-us img {
                    width: 100%;
                    height: auto;
                }
                .about-us .text {
                    width: 100%;
                }
            }
        `;
    }

}

customElements.define('about-us', AboutUs);