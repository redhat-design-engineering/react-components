import type { Preview } from '@storybook/react';
import React from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { DocsContainer } from '@storybook/addon-docs';
import { themes } from '@storybook/theming';

import './tailwind.css';
const preview: Preview = {
  parameters: {
    darkMode: {
      classTarget: 'html',
      darkClass: 'dark',
      stylePreview: true,
      // Override the default dark theme
      dark: { ...themes.dark, appBg: 'black' },
    },
    docs: {
      container: (context: any) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const isDark = useDarkMode();

        const props = {
          ...context,
          theme: isDark ? themes.dark : themes.light,
        };

        return React.createElement(DocsContainer, props);
      },
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
