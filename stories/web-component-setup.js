// stories/web-component-setup.js

// Into our Web Component Setup we pass the component's
// class definition, as well as the Storybook arguments.
export default function SetupWebComponent (ComponentClass, args) {

  // First we generate a random UUID for our component name
  const uuid = crypto.randomUUID();
  const componentName = `web-component-${uuid}`;

  // Then we define the component with it's randomized name
  window.customElements.define(
    componentName,

    // We extend the component's class definition every time we 
    // register the component. This to avoids the warning:
    // "Failed to execute 'define' 'CustomElementRegistry':
    // this constructor has already been used with this registry."
    class WebComponent extends ComponentClass {}
  );

  // Now we create a DOM element with our Web Component
  const component = document.createElement(componentName);

  // We apply all the Storybook args to it's DOM Element:
  for (const [prop, val] of Object.entries(args)) {
    component.setAttribute(prop, val);
  }

  console.log(componentName);

  // Finally, we return the component's DOM Element.
  return component;
}