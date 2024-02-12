// counter.web-component.js

class MyCounter extends HTMLElement {

  // Observe the Storybook arguments as web component attributes
  static get observedAttributes() {
    return ["label", "color"];
  }

  // Update the values when the attributes change
  attributeChangedCallback(name, oldValue, newValue) {
    if (this[name] !== oldValue) {
      console.log(`MyCounter: set attribute "${name}" to: ${newValue}`);

      this[name] = newValue;
      this.update();
    }
  }

  // Set default values for the component
  count = 0;
  label = "Count";
  color = "#DFD";

  // A function to render the inside of the button
  innerText = () => `${this.label} = ${this.count}`;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "closed" });

    // Render the `count` template into the Button element of the component
    const template = document.createElement("template");
    template.innerHTML = /* HTML */ `<button>${this.innerText()}</button>`;
    const node = template.content.cloneNode(true);
    shadow.append(node);

    // Get the button element...
    this.button = shadow.querySelector("button");

    // Set it's background color
    this.button.style.backgroundColor = this.color;

    // Increment the count when user clicks the button
    this.button.addEventListener("click", () => {
      this.count += 1;

      // Call update() to re-render Button's innerText w/ new `count` & `label`
      this.update();

      // IMPORTANT: You MUST dispatch events to the outer element of your
      // web component, in order for Storybook to pick up the click event.
      this.dispatchEvent(new CustomEvent("click", { composed: true }));
    });
  }

  // Update the Button in the web component with the latest values
  // every time the Storybook argument change.
  update() {
    this.button.innerText = this.innerText();
    this.button.style.backgroundColor = this.color;
  }
}

// We register the component in the page for normal (non-Storybook) use...
try {
  window.customElements.define('my-counter', MyCounter);
} catch (error) {
  console.warn(error)
}

// ...But we export the class as default. This allows us to hand-off the
// instantiation of our component under it's randomized name.
export default MyCounter;