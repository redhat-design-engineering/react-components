import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Card',
};
export default meta;

type Story = StoryObj<typeof Card>;

export const LightTheme: Story = {
  args: {
    theme: 'light',
    children: (
      <>
        <Card.Header>
          <h2 className="text-lg">Hello Header</h2>
        </Card.Header>
        <Card.Body>Hello Body</Card.Body>
        <Card.Footer>Hello Footer</Card.Footer>
      </>
    ),
  },
};

export const LightGrayTheme: Story = {
  args: {
    theme: 'lightGray',
    children: (
      <>
        <Card.Header>
          <h2 className="text-lg">Hello Header</h2>
        </Card.Header>
        <Card.Body>Hello Body</Card.Body>
        <Card.Footer>Hello Footer</Card.Footer>
      </>
    ),
  },
};
