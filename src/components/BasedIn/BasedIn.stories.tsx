import { StoryFn } from '@storybook/react';
import { BasedIn } from './BasedIn';

export default {
  component: BasedIn,
  title: 'BasedIn',
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => 
      <div style={{width: "300px", height: '200px'}}>
        <Story />
      </div>
  ]
}

export const Default = {};
