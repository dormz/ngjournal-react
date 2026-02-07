import React from 'react';

import { Divider, Typography } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const { Paragraph } = Typography;

const meta: Meta<typeof Divider> = {
  title: 'Ant Design/Layout/Divider',
  component: Divider,
  argTypes: {
    type: { control: 'select', options: ['horizontal', 'vertical'] },
    dashed: { control: 'boolean' },
    orientation: { control: 'select', options: ['left', 'right', 'center'] },
    plain: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  render: () => (
    <div>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Paragraph>
      <Divider />
      <Paragraph>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</Paragraph>
      <Divider dashed />
      <Paragraph>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</Paragraph>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div>
      <Divider>Center Text</Divider>
      <Divider orientation="left">Left Text</Divider>
      <Divider orientation="right">Right Text</Divider>
      <Divider orientation="left" plain>Left Plain Text</Divider>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div>
      Text <Divider type="vertical" /> <a href="#">Link</a> <Divider type="vertical" /> <a href="#">Link</a>
    </div>
  ),
};
