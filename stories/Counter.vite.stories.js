import { withActions } from "@storybook/addon-actions/decorator";

import { setupCounter } from "../counter.vite.js";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Counter Vanilla JS",
  render: (args) => setupCounter(document.createElement("button"), args),
  tags: ["autodocs"],
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
  decorators: [withActions],
  argTypes: {
    backgroundColor: { control: "color" },
    label: "Counter",
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  render: (args) => setupCounter(document.createElement("button"), args),
  args: {
    label: "Counter",
  },
};
