import React from 'react';

import { Avatar, Badge, Space } from 'antd';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Avatar> = {
  title: 'Ant Design/Data Display/Avatar',
  component: Avatar,
  argTypes: {
    size: { control: 'select', options: ['small', 'default', 'large', 64] },
    shape: { control: 'select', options: ['circle', 'square'] },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    icon: <UserOutlined />,
  },
};

export const Types: Story = {
  render: () => (
    <Space size="middle">
      <Avatar icon={<UserOutlined />} />
      <Avatar>U</Avatar>
      <Avatar size={40} style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>
        U
      </Avatar>
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      <Avatar
        src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
        alt="avatar"
      />
    </Space>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Space size="middle" align="center">
      <Avatar size="small" icon={<UserOutlined />} />
      <Avatar icon={<UserOutlined />} />
      <Avatar size="large" icon={<UserOutlined />} />
      <Avatar size={64} icon={<UserOutlined />} />
    </Space>
  ),
};

export const Shapes: Story = {
  render: () => (
    <Space size="middle">
      <Avatar shape="circle" icon={<UserOutlined />} />
      <Avatar shape="square" icon={<UserOutlined />} />
    </Space>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <Space size="middle">
      <Badge count={1}>
        <Avatar shape="square" icon={<UserOutlined />} />
      </Badge>
      <Badge dot>
        <Avatar shape="square" icon={<UserOutlined />} />
      </Badge>
    </Space>
  ),
};

export const Group: Story = {
  render: () => (
    <Avatar.Group>
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
      <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
    </Avatar.Group>
  ),
};

export const GroupMax: Story = {
  render: () => (
    <Avatar.Group max={{ count: 2, style: { color: '#f56a00', backgroundColor: '#fde3cf' } }}>
      <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
      <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
      <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
    </Avatar.Group>
  ),
};
