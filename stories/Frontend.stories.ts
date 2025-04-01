import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Frontend } from '../src/Frontend';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Brass/Frontend',
  component: Frontend,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Frontend>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    host: "brass.dev",
    path: "/mikey",
    userID: "mikey",
    sessionToken: "7fc6f0d5f321ee7f3c3ff0ac1d623197f016489c121111206442d4e929b772b2",
  },
};
