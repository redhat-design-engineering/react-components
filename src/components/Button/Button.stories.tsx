import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { ButtonVariant } from './ButtonVariant';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  argTypes: { onClick: { action: 'clicked' } },
};
export default meta;

type Story = StoryObj<typeof Button>;
export const Danger: Story = {
  args: {
    children: 'Danger',
    danger: true,
  },
  // decorators: [withActions],
};

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: ButtonVariant.Primary,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: ButtonVariant.Secondary,
  },
};

export const SecondaryDanger: Story = {
  args: {
    children: 'Secondary Danger',
    variant: ButtonVariant.Secondary,
    danger: true,
  },
};

export const Tertiary: Story = {
  args: {
    children: 'Tertiary',
    variant: ButtonVariant.Tertiary,
  },
};

export const Link: Story = {
  args: {
    children: 'Link',
    variant: ButtonVariant.Link,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    variant: ButtonVariant.Primary,
    disabled: true,
  },
};
