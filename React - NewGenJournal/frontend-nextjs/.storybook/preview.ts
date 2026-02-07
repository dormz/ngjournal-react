import React from 'react';

import { App, ConfigProvider } from 'antd';

import type { Preview } from '@storybook/nextjs-vite';

import {
  getTenantTheme,
  tenantThemeList,
} from '../app/theme/themeConfig';

// ---------------------------------------------------------------------------
// Global toolbar – lets you switch the tenant theme for ANY story
// ---------------------------------------------------------------------------

const themeToolbarItems = tenantThemeList.map((t) => ({
  value: t.key,
  title: t.label,
}));

// ---------------------------------------------------------------------------
// Preview config
// ---------------------------------------------------------------------------

const preview: Preview = {
  globalTypes: {
    tenantTheme: {
      description: 'Tenant theme applied to all components',
      toolbar: {
        title: 'Tenant Theme',
        icon: 'paintbrush',
        items: themeToolbarItems,
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    tenantTheme: 'default',
  },

  decorators: [
    (Story, context) => {
      const themeKey = context.globals.tenantTheme as string;
      const tenant = getTenantTheme(themeKey);

      return React.createElement(
        ConfigProvider,
        { theme: tenant.antdTheme ?? {} },
        React.createElement(App, null, React.createElement(Story)),
      );
    },
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
