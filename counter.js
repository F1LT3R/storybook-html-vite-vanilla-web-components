class MyCounter extends HTMLElement {
  static get observedAttributes() {
    return ["label", "color"];
  }

  count = 0;
  label = "Count";
  color = "#DFD";

  innerText = () => `${this.label} = ${this.count}`;

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "closed" });
    const template = document.createElement("template");
    template.innerHTML = /* HTML */ `<button>${this.innerText()}</button>`;
    const node = template.content.cloneNode(true);
    shadow.append(node);

    this.button = shadow.querySelector("button");
    this.button.style.backgroundColor = this.color;
    this.button.addEventListener("click", () => {
      this.count += 1;
      this.update();
      this.dispatchEvent(new CustomEvent("click", { composed: true }));
    });
  }

  update() {
    this.button.innerText = this.innerText();
    this.button.style.backgroundColor = this.color;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (this[name] !== oldValue) {
      console.log(`MyCounter: set attribute "${name}" to: ${newValue}`);

      this[name] = newValue;
      this.update();
    }
  }
}

export default MyCounter;
