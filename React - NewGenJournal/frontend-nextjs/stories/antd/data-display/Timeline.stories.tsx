import React from 'react';

import { Timeline, Space } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Timeline> = {
  title: 'Ant Design/Data Display/Timeline',
  component: Timeline,
  argTypes: {
    mode: { control: 'select', options: ['start', 'alternate', 'end'] },
    reverse: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    items: [
      { children: 'Create a services site 2015-09-01' },
      { children: 'Solve initial network problems 2015-09-01' },
      { children: 'Technical testing 2015-09-01' },
      { children: 'Network problems being solved 2015-09-01' },
    ],
  },
};

export const WithColors: Story = {
  args: {
    items: [
      { color: 'green', children: 'Create a services site 2015-09-01' },
      { color: 'green', children: 'Create a services site 2015-09-01' },
      { color: 'red', children: <><p>Solve initial network problems 1</p><p>Solve initial network problems 2</p><p>Solve initial network problems 3</p></> },
      { children: <><p>Technical testing 1</p><p>Technical testing 2</p><p>Technical testing 3</p></> },
      { color: '#00CCFF', dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />, children: 'Custom icon dot 2015-09-01' },
      { children: 'Network problems being solved 2015-09-01' },
    ],
  },
};

export const Pending: Story = {
  args: {
    items: [
      { children: 'Create a services site 2015-09-01' },
      { children: 'Solve initial network problems 2015-09-01' },
      { children: 'Technical testing 2015-09-01' },
      { children: 'Recording...', dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />, color: 'gray' },
    ],
  },
};

export const Alternate: Story = {
  args: {
    mode: 'alternate',
    items: [
      { children: 'Create a services site 2015-09-01' },
      { children: 'Solve initial network problems 2015-09-01', color: 'green' },
      { dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />, children: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 2015-09-01' },
      { color: 'red', children: 'Network problems being solved 2015-09-01' },
      { children: 'Create a services site 2015-09-01' },
      { dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />, children: 'Technical testing 2015-09-01' },
    ],
  },
};

export const RightAligned: Story = {
  args: {
    mode: 'end',
    items: [
      { children: 'Create a services site 2015-09-01' },
      { children: 'Solve initial network problems 2015-09-01' },
      { children: 'Technical testing 2015-09-01' },
      { children: 'Network problems being solved 2015-09-01' },
    ],
  },
};

export const WithLabel: Story = {
  args: {
    mode: 'alternate',
    items: [
      { label: '2015-09-01', children: 'Create a services' },
      { label: '2015-09-01 09:12:11', children: 'Solve initial network problems' },
      { children: 'Technical testing' },
      { label: '2015-09-01 09:12:11', children: 'Network problems being solved' },
    ],
  },
};
