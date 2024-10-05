import { StoryFn } from '@storybook/react';
import Tooltip from './Tooltip';

export default {
  component: Tooltip,
  title: 'Tooltip',
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => 
        <Story />
  ]
}

export const Default = {
  args: {
    text: "I'm tooltip hover",
    children: <span style={{backgroundColor: 'purple', padding: '5px', borderRadius: '10px'}}>Please hover me!</span>
  }
};

export const ExtraLong = {
  args: {
    text: "This is a very long tooltip text that should wrap to the next line. It should also be able to handle very long words and sentences.",
    children: <span style={{backgroundColor: 'purple', padding: '5px', borderRadius: '10px'}}>Hi, hover again</span>
  }
}
