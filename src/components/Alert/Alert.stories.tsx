import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from './Alert';

import { AlertVariant } from '.';

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: 'Alert',
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    variant: AlertVariant.Default,
    title: 'Default',
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend
        elit sed est egestas, a sollicitudin mauris tincidunt.
      </p>
    ),
  },
};

export const Danger: Story = {
  args: {
    variant: 'Danger',
    title: 'Danger',
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend
        elit sed est egestas, a sollicitudin mauris tincidunt.
      </p>
    ),
  },
};

export const Info: Story = {
  args: {
    variant: 'Info',
    title: 'Info',
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend
        elit sed est egestas, a sollicitudin mauris tincidunt.
      </p>
    ),
  },
};

export const Warning: Story = {
  args: {
    variant: 'Warning',
    title: 'Warning',
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend
        elit sed est egestas, a sollicitudin mauris tincidunt.
      </p>
    ),
  },
};

export const Success: Story = {
  args: {
    variant: 'Success',
    title: 'Success',
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend
        elit sed est egestas, a sollicitudin mauris tincidunt.
      </p>
    ),
  },
};

export const Disabled: Story = {
  args: {
    variant: 'Disabled',
    title: 'Disabled',
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend
        elit sed est egestas, a sollicitudin mauris tincidunt.
      </p>
    ),
  },
};

export const DefaultInline: Story = {
  args: {
    variant: 'Default',
    title: 'Default',
    isInline: true,
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend
        elit sed est egestas, a sollicitudin mauris tincidunt.
      </p>
    ),
  },
};

export const DangerInline: Story = {
  args: {
    variant: 'Danger',
    title: 'Danger',
    isInline: true,
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend
        elit sed est egestas, a sollicitudin mauris tincidunt.
      </p>
    ),
  },
};

export const InfoInline: Story = {
  args: {
    variant: 'Info',
    title: 'Info',
    isInline: true,
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend
        elit sed est egestas, a sollicitudin mauris tincidunt.
      </p>
    ),
  },
};

export const WarningInline: Story = {
  args: {
    variant: 'Warning',
    title: 'Warning',
    isInline: true,
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend
        elit sed est egestas, a sollicitudin mauris tincidunt.
      </p>
    ),
  },
};

export const SuccessInline: Story = {
  args: {
    variant: 'Success',
    title: 'Success',
    isInline: true,
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend
        elit sed est egestas, a sollicitudin mauris tincidunt.
      </p>
    ),
  },
};

export const DisabledInline: Story = {
  args: {
    variant: 'Disabled',
    title: 'Disabled',
    isInline: true,
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend
        elit sed est egestas, a sollicitudin mauris tincidunt.
      </p>
    ),
  },
};
