import React from 'react';

import { Avatar, Badge, Space } from 'antd';
import { ClockCircleOutlined, NotificationOutlined } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Badge> = {
  title: 'Ant Design/Data Display/Badge',
  component: Badge,
  argTypes: {
    count: { control: 'number' },
    dot: { control: 'boolean' },
    overflowCount: { control: 'number' },
    showZero: { control: 'boolean' },
    size: { control: 'select', options: ['default', 'small'] },
    status: {
      control: 'select',
      options: ['success', 'processing', 'default', 'error', 'warning'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  render: () => (
    <Space size="large">
      <Badge count={5}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={0} showZero>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={<ClockCircleOutlined style={{ color: '#f5222d' }} />}>
        <Avatar shape="square" size="large" />
      </Badge>
    </Space>
  ),
};

export const OverflowCount: Story = {
  render: () => (
    <Space size="large">
      <Badge count={99}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={100}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge count={1000} overflowCount={999}>
        <Avatar shape="square" size="large" />
      </Badge>
    </Space>
  ),
};

export const Dot: Story = {
  render: () => (
    <Space size="large">
      <Badge dot>
        <NotificationOutlined style={{ fontSize: 16 }} />
      </Badge>
      <Badge dot>
        <a href="#">Link something</a>
      </Badge>
    </Space>
  ),
};

export const Status: Story = {
  render: () => (
    <Space orientation="vertical">
      <Space>
        <Badge status="success" />
        <Badge status="error" />
        <Badge status="default" />
        <Badge status="processing" />
        <Badge status="warning" />
      </Space>
      <Space orientation="vertical">
        <Badge status="success" text="Success" />
        <Badge status="error" text="Error" />
        <Badge status="default" text="Default" />
        <Badge status="processing" text="Processing" />
        <Badge status="warning" text="Warning" />
      </Space>
    </Space>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Space size="large">
      <Badge size="default" count={5}>
        <Avatar shape="square" size="large" />
      </Badge>
      <Badge size="small" count={5}>
        <Avatar shape="square" size="large" />
      </Badge>
    </Space>
  ),
};

export const Colors: Story = {
  render: () => (
    <Space orientation="vertical">
      <Space wrap>
        {['pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime'].map(
          (color) => (
            <Badge key={color} color={color} count={color}>
              <Avatar shape="square" size="large" />
            </Badge>
          ),
        )}
      </Space>
    </Space>
  ),
};

export const Ribbon: Story = {
  render: () => (
    <Space orientation="vertical" size="middle" style={{ width: '100%' }}>
      <Badge.Ribbon text="Hippie">
        <div
          style={{
            padding: 16,
            background: '#fff',
            border: '1px solid #f0f0f0',
            borderRadius: 8,
          }}
        >
          Content with ribbon badge
        </div>
      </Badge.Ribbon>
      <Badge.Ribbon text="Hippie" color="pink">
        <div
          style={{
            padding: 16,
            background: '#fff',
            border: '1px solid #f0f0f0',
            borderRadius: 8,
          }}
        >
          Pink ribbon
        </div>
      </Badge.Ribbon>
      <Badge.Ribbon text="Hippie" color="red" placement="start">
        <div
          style={{
            padding: 16,
            background: '#fff',
            border: '1px solid #f0f0f0',
            borderRadius: 8,
          }}
        >
          Red ribbon on the left
        </div>
      </Badge.Ribbon>
    </Space>
  ),
};
