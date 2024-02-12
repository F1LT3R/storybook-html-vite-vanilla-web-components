// stories/Counter.javascript.stories.js

// First we load the `withActions` decorator, so listen to DOM events
import { withActions } from "@storybook/addon-actions/decorator";

// Then we import the `setupCounter` function to initialize the Counter Button component
import { setupCounter } from "../counter.js";

export default {
  title: "Counter Vanilla JS",

  // Create a new `button` element and pass it to the `setupCounter` function
  render: (args) => setupCounter(document.createElement("button"), args),
  tags: ["autodocs"],

  // Ask Storybook to listen to the `click` event 
  parameters: {
    actions: {
      handles: ["click"],
    },
  },

  // Make sure `withActions` is used as a decorator, otherwise your click events will not show up
  decorators: [withActions],

  // Set the controls for `backgroundColor` and `label` 
  argTypes: {
    backgroundColor: { control: "color" },
    label: "Counter",
  },
};

// Don't forget to export a `Primary` view for your component, or nothing will render
export const Primary = {
  render: (args) => setupCounter(document.createElement("button"), args),
  args: {
    label: "Counter",
  },
};