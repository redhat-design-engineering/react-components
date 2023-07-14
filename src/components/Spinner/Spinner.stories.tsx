import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from './Spinner';

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  title: 'Spinner',
  parameters: {
    docs: {
      description: {
        component: 'Hello Spinner',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Spinner>;
export const Small: Story = {
  args: {
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Another description on the story, overriding the comments',
      },
    },
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Text: Story = {
  args: {
    size: 'lg',
    children: <p>Loading...</p>,
  },
};
