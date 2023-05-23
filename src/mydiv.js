class MyDiv extends HTMLElement {
    constructor() {
      super();
      this.count = 0;
      this.attachShadow({ mode: "open" });
    }
}

customElements.define("my-div", MyDiv);

export default {
    parameters: {
      layout: "centered",
    },
  };
  
  export const story1 = () => `<my-counter></my-counter>`;
  