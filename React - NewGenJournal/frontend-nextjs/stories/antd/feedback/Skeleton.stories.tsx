import React from 'react';

import { Skeleton, Space, Switch, Button } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Skeleton> = {
  title: 'Ant Design/Feedback/Skeleton',
  component: Skeleton,
  argTypes: {
    active: { control: 'boolean' },
    avatar: { control: 'boolean' },
    loading: { control: 'boolean' },
    paragraph: { control: 'boolean' },
    round: { control: 'boolean' },
    title: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    active: true,
  },
};

export const WithAvatar: Story = {
  args: {
    avatar: true,
    paragraph: { rows: 4 },
  },
};

export const ActiveWithAvatar: Story = {
  args: {
    avatar: true,
    active: true,
    paragraph: { rows: 4 },
  },
};

export const Round: Story = {
  args: {
    active: true,
    round: true,
  },
};

export const ButtonSkeleton: Story = {
  render: () => (
    <Space>
      <Skeleton.Button active />
      <Skeleton.Button active size="small" />
      <Skeleton.Button active size="large" shape="round" />
      <Skeleton.Button active size="large" shape="circle" />
    </Space>
  ),
};

export const InputSkeleton: Story = {
  render: () => (
    <Space orientation="vertical" style={{ width: 300 }}>
      <Skeleton.Input active size="large" block />
      <Skeleton.Input active block />
      <Skeleton.Input active size="small" block />
    </Space>
  ),
};

export const ImageSkeleton: Story = {
  render: () => (
    <Space>
      <Skeleton.Image active />
      <Skeleton.Image active style={{ width: 200, height: 200 }} />
    </Space>
  ),
};

export const AvatarSkeleton: Story = {
  render: () => (
    <Space>
      <Skeleton.Avatar active size="small" />
      <Skeleton.Avatar active />
      <Skeleton.Avatar active size="large" />
      <Skeleton.Avatar active size="large" shape="square" />
    </Space>
  ),
};

export const NodeSkeleton: Story = {
  render: () => <Skeleton.Node active style={{ width: 160, height: 160 }} />,
};
