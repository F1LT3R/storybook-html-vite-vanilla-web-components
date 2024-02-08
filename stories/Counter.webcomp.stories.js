import { withActions } from "@storybook/addon-actions/decorator";

import WebComponentSetup from "./web-component-setup";
import MyCounter from "../counter.js";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Counter Web Component",
  render: (args) => WebComponentSetup(MyCounter, args),
  tags: ["autodocs"],
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
  decorators: [withActions],
  argTypes: {
    color: { control: "color" },
    label: "Counter",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  render: (args) => WebComponentSetup(MyCounter, args),
  args: {
    label: "Counter",
  },
};
