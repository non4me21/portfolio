import { StoryFn } from '@storybook/react'
import { ActiveTabProvider } from '../../context/ActiveTabContext';
import { TechStack } from './TechStack';

export default {
  component: TechStack,
  title: 'TechStack',
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => 
    <ActiveTabProvider>
      <div style={{height: "400px", width: "300px"}}>
        <Story />
      </div>
    </ActiveTabProvider>
  ]
}

export const Default = {
  args: {
    techStackList: [
      {
        sectionName: 'Frontend',
        items: [
          {name: 'React', info: 'React is a JavaScript library for building user interfaces.'},
          {name: 'TypeScript', info: 'TypeScript is a superset of JavaScript that adds optional static typing.'},
          {name: 'Storybook', info: 'Storybook is a UI component development environment for React.'},
          {name: 'Material UI', info: "Material UI is a React component library that implements Google's Material Design for building responsive UIs."},
          {name: 'React Query', info: "React Query is a data-fetching library for React that simplifies server state management and asynchronous operations."}
        ]
      },
      {
        sectionName: 'Backend',
        items: [
          {name: 'Node.js', info: 'Node.js is an open-source, cross-platform JavaScript runtime environment.'},
          {name: 'Express.js', info: 'Express.js is a minimalist web framework for Node.js.'},
          {name: 'MongoDB', info: 'MongoDB is a document-oriented database.'},
        ]
      }
    ]
  }
};
