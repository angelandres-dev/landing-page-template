import { LitElement, html } from "lit";

class ChildComponent2 extends LitElement {

    static get properties() {
        return {
            item: { type: String },
        };
    }

    constructor() {
        super();
        this.item = "";
    }

    addItem() {
        document.dispatchEvent(
          new CustomEvent("add-item", {
            detail: this.item,
            bubbles: true,
            composed: true,
          })
        );
        this.item = "";
      }

    render() {
        return html`
            <input type="text" .value="${this.item}" @input="${(e) => this.item = e.target.value}" placeholder="Add item" />
            <button @click="${this.addItem}">Add Item</button>
        `;
    }

}

customElements.define("child-component2", ChildComponent2);
