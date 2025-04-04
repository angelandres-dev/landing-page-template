import { LitElement, html, css, nothing } from "lit";

import { HOST, ENVIRONMENT, DEFAULT_LANGUAGE, TIMEOUT_DURATION } from "./constants.js";

import "@material/mwc-button/mwc-button.js";

import { v4 as uuid } from "uuid";

import "./child-component.js";
import "./child-component2.js";


class LandingPageTemplate extends LitElement {

    static get properties() {
        return {
            title: { type: String },
            description: { type: String },
            author: { type: String },
            isAdmin: { type: Boolean },
            items: { type: Array },
            attribute: { type: String },
            person: { type: String }
        };
    }

    constructor() {
        super();
        this.title = "Landing Page Template";
        this.description = "This is a simple landing page template.";
        this.author = "Andrés Hernández";
        this.isAdmin = true;
        this.items = ["Item 1", "Item 2", "Item 3"];
        this.attribute = "value";
    }

    static get styles() {
        return css`
            h1 {
                color: blue;
            }
            p {
                font-size: 16px;
            }
        `;
    }

    handleUserButton() {
        const personInput = this.shadowRoot.querySelector("input[type='text']");
        console.log("User button clicked");
        console.log(this.person);
        console.log(personInput.value);
        console.log("UUID:", uuid());
    }

    firstUpdated() {
        document.addEventListener("add-item", e => {
          this.items = [...this.items, e.detail];
        });
      }

    render() {
        return html`
            <h1> ${this.title} </h1>
            <p> ${this.description} </p>
            <p> ${this.author} </p>
            ${this.isAdmin ? html`<p> You are an admin </p>` : nothing}

            <ul>
                ${this.items.map(item => html`<li> ${item} </li>`)}
            </ul>

            <p> Host: ${HOST} </p>
            <p> Environment: ${ENVIRONMENT} </p>
            <p> Default Language: ${DEFAULT_LANGUAGE} </p>
            <p> Timeout Duration: ${TIMEOUT_DURATION} ms </p>
            <p> Attribute: ${this.attribute} </p>

            <mwc-button raised @click="${this.handleUserButton}" >Click Me!</mwc-button>

            <input
                type="text"
                @input="${e => (this.person = e.target.value)}"
            />
            
            <child-component
                primary="basic data"
                .complex="${this.items}"
            ></child-component>

            <child-component2></child-component2>
        `;
    }

}

customElements.define("landing-page-template", LandingPageTemplate);