import { LitElement, html } from "lit";

class ChildComponent extends LitElement {

    static get properties() {
        return {
            person: { type: String },
            primary: { type: String, attribute: "primary" },
            complex: { type: Array, attribute: "complex" }
        };
    }

    constructor() {
        super();
        this.person = "Andrés Hernández";
        this.primary = "Primary Value";
        this.complex = ["Value 1", "Value 2"];
    }

    render() {
        return html`
            <div>
                <p>Child Component</p>
                <p>Person: ${this.person}</p>
                <p>Primary: ${this.primary}</p>
                <p>Complex: ${this.complex.join(", ")}</p>
            </div>
        `;
    }

}

customElements.define("child-component", ChildComponent);
