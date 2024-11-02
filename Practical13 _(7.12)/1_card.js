class CustomCard extends HTMLElement {
    constructor() {
        super();
        // Attach shadow DOM
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    --card-background: #ffffff;
                    --card-border-radius: 10px;
                    --card-padding: 16px;
                    --card-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }

                .card {
                    background: var(--card-background);
                    border-radius: var(--card-border-radius);
                    box-shadow: var(--card-shadow);
                    padding: var(--card-padding);
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    max-width: 300px;
                }

                ::slotted([slot="header"]) {
                    font-size: 1.5rem;
                    font-weight: bold;
                    border-bottom: 1px solid #ddd;
                    padding-bottom: 8px;
                }

                ::slotted([slot="footer"]) {
                    font-size: 0.875rem;
                    text-align: center;
                    border-top: 1px solid #ddd;
                    padding-top: 8px;
                }
            </style>
            <div class="card">
                <slot name="header"></slot>
                <slot name="content"></slot>
                <slot name="footer"></slot>
            </div>
        `;
    }

    // Allow customization through attributes if needed
    static get observedAttributes() {
        return ['data-background'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'data-background') {
            this.style.setProperty('--card-background', newValue);
        }
    }
}

// Define the custom element
customElements.define('custom-card', CustomCard);
