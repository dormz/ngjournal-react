import React from 'react';

import { Pagination, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Pagination> = {
  title: 'Ant Design/Navigation/Pagination',
  component: Pagination,
  argTypes: {
    total: { control: 'number' },
    pageSize: { control: 'number' },
    current: { control: 'number' },
    disabled: { control: 'boolean' },
    showSizeChanger: { control: 'boolean' },
    showQuickJumper: { control: 'boolean' },
    simple: { control: 'boolean' },
    size: { control: 'select', options: ['default', 'small'] },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    defaultCurrent: 1,
    total: 50,
  },
};

export const MorePages: Story = {
  args: {
    defaultCurrent: 6,
    total: 500,
  },
};

export const WithSizeChanger: Story = {
  args: {
    total: 500,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total: number) => `Total ${total} items`,
  },
};

export const Small: Story = {
  args: {
    total: 500,
    size: 'small',
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total: number) => `Total ${total} items`,
  },
};

export const Simple: Story = {
  args: {
    simple: true,
    defaultCurrent: 2,
    total: 50,
  },
};

export const Disabled: Story = {
  args: {
    total: 50,
    disabled: true,
  },
};

export const Mini: Story = {
  render: () => (
    <Space direction="vertical" size="middle">
      <Pagination size="small" total={50} />
      <Pagination size="small" total={50} showSizeChanger showQuickJumper />
      <Pagination size="small" total={50} showTotal={(total) => `Total ${total} items`} />
    </Space>
  ),
};
