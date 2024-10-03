import React from 'react';
import type { Preview, StoryFn } from "@storybook/react";
import '../src/index.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, { parameters }) => {
      return (
        <QueryClientProvider client={queryClient}>
          <Story {...parameters} />
        </QueryClientProvider>
      );
    }

  ],
};

export default preview;
