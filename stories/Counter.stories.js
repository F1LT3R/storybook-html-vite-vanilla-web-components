import { withActions } from '@storybook/addon-actions/decorator';

import MyCounter from '../counter.js';

const setup = (ComponentClass, args) => {
  const uuid =  crypto.randomUUID();
  const componentName = `web-component-${uuid}`

  window.customElements.define(componentName, class WebComponent extends ComponentClass{});
  const component = document.createElement(componentName)
  
  for (const [prop, val] of Object.entries(args)) {
    component.setAttribute(prop, val)
  }
  
  console.log(componentName)
  return component
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Counter',
  render: (args) => setup(MyCounter, args),
  tags: ['autodocs'],
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  decorators: [withActions],
  argTypes: {
    color: { control: 'color' },
    label: 'Counter',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  render: (args) => setup(MyCounter, args),
  args: {
    label: 'Counter',
  }
};
