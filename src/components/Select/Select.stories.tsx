import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Select',
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Chinese', value: 'zh-CN' },
      { label: 'English', value: 'en' },
      {
        label: 'Japanese',
        value: 'jp',
      },
    ],
    defaultValue: 'zh-CN',
  },
};
