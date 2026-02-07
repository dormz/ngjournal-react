import React from 'react';

import { Affix, Button, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Affix> = {
  title: 'Ant Design/Other/Affix',
  component: Affix,
  argTypes: {
    offsetTop: { control: 'number' },
    offsetBottom: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Affix>;

export const Default: Story = {
  render: () => (
    <Affix offsetTop={120}>
      <Button type="primary">Affix top</Button>
    </Affix>
  ),
};

export const OffsetBottom: Story = {
  render: () => (
    <Affix offsetBottom={0}>
      <Button type="primary">Affix bottom</Button>
    </Affix>
  ),
};

export const OnChange: Story = {
  render: () => (
    <Affix offsetTop={120} onChange={(affixed) => console.log('Affix changed:', affixed)}>
      <Button>Affix with onChange (120px from top)</Button>
    </Affix>
  ),
};
