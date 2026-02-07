import React from 'react';

import { Rate, Space } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Rate> = {
  title: 'Ant Design/Data Entry/Rate',
  component: Rate,
  argTypes: {
    count: { control: 'number' },
    disabled: { control: 'boolean' },
    allowHalf: { control: 'boolean' },
    allowClear: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Rate>;

export const Default: Story = {
  args: {
    defaultValue: 2.5,
  },
};

export const HalfStar: Story = {
  args: {
    allowHalf: true,
    defaultValue: 2.5,
  },
};

export const CustomCharacter: Story = {
  render: () => (
    <Space orientation="vertical">
      <Rate character={<HeartFilled />} allowHalf defaultValue={2.5} style={{ color: '#eb2f96' }} />
      <Rate character="A" allowHalf defaultValue={2.5} />
      <Rate character="好" allowHalf defaultValue={2.5} />
    </Space>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 2,
  },
};

export const Tooltips: Story = {
  args: {
    tooltips: ['terrible', 'bad', 'normal', 'good', 'wonderful'],
    defaultValue: 3,
  },
};

export const Count: Story = {
  args: {
    count: 10,
    defaultValue: 6,
  },
};
