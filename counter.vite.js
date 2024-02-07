export function setupCounter(element, args) {
  const label = args?.label || "Count";
  const backgroundColor = args?.backgroundColor || "#EEEEEE";

  let counter = 0;

  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `${label} is ${counter}`;
  };

  element.addEventListener("click", () => setCounter(counter + 1));

  element.style.backgroundColor = backgroundColor;

  setCounter(0);

  return element;
}
