// counter.web-component.js

// We load the events/actions decorator, as before.
import { withActions } from "@storybook/addon-actions/decorator";

// We load our web-component-setup function we created above.
import WebComponentSetup from "./web-component-setup";

// Then we import our new Counter file: counter.web-component.js
import MyCounter from "../counter.web-component.js";

export default {
  title: "Counter Web Component",

  // Now when we want Storybook to initialize our component, we just
  // make a call to WebComponentSetup, which is the default export
  // of our: `/stores/web-component-setup.js` file.
  render: (args) => WebComponentSetup(MyCounter, args),
  
  tags: ["autodocs"],

  // Mae sure to listen to the dispatched click events
  parameters: {
    actions: {
      handles: ["click"],
    },
  },

  // And don't forget the `withActions` decorator!
  decorators: [withActions],

  // Export the arguments we want to control in our Web Component. 
  argTypes: {
    color: { control: "color" },
    label: "Counter",
  },
};

// Finally, export the `Primary` view, otherwise our Story would be blank.
export const Primary = {
  render: (args) => WebComponentSetup(MyCounter, args),
  args: {
    label: "Counter",
  },
};