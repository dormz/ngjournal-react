import React from 'react';

import { Steps } from 'antd';
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Steps> = {
  title: 'Ant Design/Navigation/Steps',
  component: Steps,
  argTypes: {
    current: { control: 'number' },
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    size: { control: 'select', options: ['default', 'small'] },
    status: { control: 'select', options: ['wait', 'process', 'finish', 'error'] },
    type: { control: 'select', options: ['default', 'navigation', 'inline', 'dot'] },
  },
};

export default meta;
type Story = StoryObj<typeof Steps>;

export const Default: Story = {
  args: {
    current: 1,
    items: [
      { title: 'Finished', content: 'This is a description.' },
      {
        title: 'In Progress',
        content: 'This is a description.',
        subTitle: 'Left 00:00:08',
      },
      { title: 'Waiting', content: 'This is a description.' },
    ],
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    current: 1,
    items: [
      { title: 'Finished' },
      { title: 'In Progress' },
      { title: 'Waiting' },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { title: 'Login', icon: <UserOutlined />, status: 'finish' },
      { title: 'Verification', icon: <SolutionOutlined />, status: 'finish' },
      { title: 'Pay', icon: <LoadingOutlined />, status: 'process' },
      { title: 'Done', icon: <SmileOutlined />, status: 'wait' },
    ],
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    current: 1,
    items: [
      { title: 'Finished', content: 'This is a description.' },
      { title: 'In Progress', content: 'This is a description.' },
      { title: 'Waiting', content: 'This is a description.' },
    ],
  },
};

export const ErrorStatus: Story = {
  args: {
    current: 1,
    status: 'error',
    items: [
      { title: 'Finished', content: 'This is a description.' },
      { title: 'In Progress', content: 'This is a description.' },
      { title: 'Waiting', content: 'This is a description.' },
    ],
  },
};

export const Dot: Story = {
  args: {
    type: 'dot',
    current: 1,
    items: [
      { title: 'Finished', content: 'This is a description.' },
      { title: 'In Progress', content: 'This is a description.' },
      { title: 'Waiting', content: 'This is a description.' },
    ],
  },
};

export const Clickable: Story = {
  args: {
    current: 1,
    items: [
      { title: 'Step 1', content: 'Click to go back.' },
      { title: 'Step 2', content: 'Currently here.' },
      { title: 'Step 3', content: 'Click to advance.' },
    ],
    onChange: (current: number) => console.log('Step changed to:', current),
  },
};
