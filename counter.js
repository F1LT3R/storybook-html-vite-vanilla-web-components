// counter.js

// First we add the `args` parameter to the setup function
export function setupCounter(element, args) {

  // Then we  pull the label and the backgroundColor using
  // safe defaults for when the component is used outside
  // of Storybook.
  const label = args?.label || "count";
  const backgroundColor = args?.backgroundColor || "#EEEEEE";

  let counter = 0;

  const setCounter = (count) => {
    counter = count;
    
    // Here we reference the `label` arg
    element.innerHTML = `${label} is ${counter}`;
  };

  element.addEventListener("click", () => setCounter(counter + 1));

  // And finally, we apply the backgroundColor
  element.style.backgroundColor = backgroundColor;

  setCounter(0);

  return element;
}