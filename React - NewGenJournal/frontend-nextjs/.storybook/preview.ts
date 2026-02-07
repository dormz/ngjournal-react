import React from 'react';

import { App, ConfigProvider } from 'antd';

import type { Preview } from '@storybook/nextjs-vite';

const preview: Preview = {
  decorators: [
    (Story) =>
      React.createElement(
        ConfigProvider,
        null,
        React.createElement(App, null, React.createElement(Story)),
      ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
  },
};

export default preview;
