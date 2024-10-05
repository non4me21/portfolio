import { StoryFn, StoryObj } from '@storybook/react';
import { BasedIn } from './BasedIn';

export default {
  component: BasedIn,
  title: 'BasedIn',
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => 
      <div style={{width: "300px", height: '100px'}}>
        <Story />
      </div>
  ],
}

export const Default: StoryObj = {};
Default.parameters = {
  mockData: [
    {
      url: `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=Wroclaw&aqi=yes`,
      method: 'GET',
      status: 200,
      response: {
        current: {
          condition: {
            text: 'Sunny',
            icon: '//cdn.weatherapi.com/weather/64x64/day/113.png',
          },
          temp_c: 15,
        },
      },
      delay: 3000
    },
  ],
};

