import { StoryFn } from '@storybook/react'
import { SideInfo } from './SideInfo'
import { ActiveTabProvider } from '../../context/ActiveTabContext';

export default {
  component: SideInfo,
  title: 'SideInfo',
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => 
    <ActiveTabProvider>
      <div style={{height: "600px"}}>
        <Story />
      </div>
    </ActiveTabProvider>
  ]
}

export const Default = {};
