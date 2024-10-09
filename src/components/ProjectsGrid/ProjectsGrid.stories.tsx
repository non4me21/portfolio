import { StoryFn } from '@storybook/react'
import ProjectsGrid  from './ProjectsGrid';

export default {
  component: ProjectsGrid,
  title: 'ProjectsGrid',
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => 
      <div style={{height: '800px', width: '100%'}}>
        <Story />
      </div>
  ]
}

export const Default = {
  args: {
    projects: [
      {
      label: 'Project 1',
      description: 'Project 1 description.',
      imageSrc: 'https://via.placeholder.com/300x200',
      href: '/',
      techStack: [
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
      },
      {
        label: 'Project 2',
        description: 'Project 2 description. Its a longer description so it must take more space and even more because its so long',
        imageSrc: 'https://via.placeholder.com/300x200',
        techStack: [
          {
            sectionName: 'Frontend',
            items: [
              {name: 'React', info: 'React is a JavaScript library for building user interfaces.'},
              {name: 'TypeScript', info: 'TypeScript is a superset of JavaScript that adds optional static typing.'},
              {name: 'Storybook', info: 'Storybook is a UI component development environment for React.'},
              {name: 'Material UI', info: "Material UI is a React component library that implements Google's Material Design for building responsive UIs."},
              {name: 'React Query', info: "React Query is a data-fetching library for React that simplifies server state management and asynchronous operations."}
            ]
          }
        ]
      }
    ]
  }
};
