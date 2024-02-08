export default function (ComponentClass, args) {
  const uuid = crypto.randomUUID();
  const componentName = `web-component-${uuid}`;

  window.customElements.define(
    componentName,
    class WebComponent extends ComponentClass {}
  );
  const component = document.createElement(componentName);

  for (const [prop, val] of Object.entries(args)) {
    component.setAttribute(prop, val);
  }

  console.log(componentName);
  return component;
}
