import { StoryFn } from '@storybook/react'
import { ActiveTabProvider } from '../../context/ActiveTabContext';
import { ActualProject } from './ActualProject';

export default {
  component: ActualProject,
  title: 'ActualProject',
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => 
    <ActiveTabProvider>
      <div style={{height: "800px"}}>
        <Story />
      </div>
    </ActiveTabProvider>
  ]
}

export const Default = {
  args: {
    projectTitle: 'Project Title',
    imageSrc: 'https://via.placeholder.com/300',
    description: 'Project Description',
    href: '#',
  },
};
