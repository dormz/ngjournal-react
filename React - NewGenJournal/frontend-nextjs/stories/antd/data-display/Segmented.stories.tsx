import React from 'react';

import { Segmented, Space } from 'antd';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Segmented> = {
  title: 'Ant Design/Data Display/Segmented',
  component: Segmented,
  argTypes: {
    block: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'middle', 'large'] },
  },
};

export default meta;
type Story = StoryObj<typeof Segmented>;

export const Default: Story = {
  args: {
    options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'],
  },
};

export const Disabled: Story = {
  args: {
    options: [
      'Map',
      { label: 'Transit', value: 'Transit', disabled: true },
      'Satellite',
    ],
  },
};

export const Block: Story = {
  args: {
    block: true,
    options: [123, 456, 'longtext-longtext-longtext-longtext'],
  },
};

export const WithIcon: Story = {
  args: {
    options: [
      { value: 'List', icon: <BarsOutlined /> },
      { value: 'Kanban', icon: <AppstoreOutlined /> },
    ],
  },
};

export const IconOnly: Story = {
  args: {
    options: [
      { value: 'list', icon: <BarsOutlined />, label: undefined },
      { value: 'kanban', icon: <AppstoreOutlined />, label: undefined },
    ],
  },
};

export const Sizes: Story = {
  render: () => (
    <Space orientation="vertical">
      <Segmented size="small" options={['Daily', 'Weekly', 'Monthly']} />
      <Segmented options={['Daily', 'Weekly', 'Monthly']} />
      <Segmented size="large" options={['Daily', 'Weekly', 'Monthly']} />
    </Space>
  ),
};
