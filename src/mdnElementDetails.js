customElements.define('element-details',
    class extends HTMLElement {
        constructor() {
            super();
            const template = document
                .getElementById('element-details-template')
                .content;

            // added for style 

            let shadowStyles = document.createElement("style");
            shadowStyles.innerHTML = `
                                p {
                                    color: purple;
                                    font-weight: bold;
                                }
                                `;


            const shadowRoot = this.attachShadow({ mode: 'open' })
                .appendChild(template.cloneNode(true));

                shadowRoot.appendChild(shadowStyles);

        }
    });
