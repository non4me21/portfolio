import { StoryFn } from '@storybook/react'
import { InfoList } from './InfoList';
import { ListItem } from '../../interfaces/listItems';

export default {
  component: InfoList,
  title: 'InfoList',
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => 
      <div style={{width: "250px", height: '400px'}}>
        <Story />
      </div>
  ]
}

const listItems: ListItem[] = [
  {label: "FXMAG", description: ['October 2023 - August 2024', 'Developing currency calculators and stocks quotes on backend and frontend.']},
  {label: "NOKIA", description: ['October 2023 - August 2024', 'Developing automated tests views for managers.']},
  {label: "FXMAG", description: ['October 2023 - August 2024', 'Developing currency calculators and stocks quotes on backend and frontend.']},
]

export const Default = {
  args: {
    title: "Work Experience",
    listItems: listItems
  }
};
