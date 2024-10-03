import { AboutMe } from "./AboutMe";
import {StoryFn} from '@storybook/react'

export default {
  component: AboutMe,
  title: 'AboutMe',
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => 
    <div style={{height: "200px"}}>
      <Story />
    </div>
  ]
}

export const Default = {
  args: {
    title: 'About Me',
    text: "This is text about me, it might be long so it will take a lot of space and more and more and more some new line etc" +
    "This is text about me, it might be long so it will take a lot of space and more and more and more some new line etc,"
  }
}
