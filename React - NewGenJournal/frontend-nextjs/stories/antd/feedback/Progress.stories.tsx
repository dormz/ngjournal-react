import React from 'react';

import { Progress, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Progress> = {
  title: 'Ant Design/Feedback/Progress',
  component: Progress,
  argTypes: {
    percent: { control: { type: 'range', min: 0, max: 100 } },
    type: { control: 'select', options: ['line', 'circle', 'dashboard'] },
    status: { control: 'select', options: ['normal', 'success', 'exception', 'active'] },
    showInfo: { control: 'boolean' },
    strokeLinecap: { control: 'select', options: ['round', 'butt', 'square'] },
    size: { control: 'select', options: ['default', 'small'] },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    percent: 30,
  },
};

export const Line: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Progress percent={30} />
      <Progress percent={50} status="active" />
      <Progress percent={70} status="exception" />
      <Progress percent={100} />
      <Progress percent={50} showInfo={false} />
    </Space>
  ),
};

export const Circle: Story = {
  render: () => (
    <Space wrap>
      <Progress type="circle" percent={75} />
      <Progress type="circle" percent={70} status="exception" />
      <Progress type="circle" percent={100} />
    </Space>
  ),
};

export const Dashboard: Story = {
  render: () => (
    <Space wrap>
      <Progress type="dashboard" percent={75} />
      <Progress type="dashboard" percent={75} gapDegree={30} />
    </Space>
  ),
};

export const Small: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: 200 }}>
      <Progress percent={30} size="small" />
      <Progress percent={50} size="small" status="active" />
      <Progress percent={70} size="small" status="exception" />
      <Progress percent={100} size="small" />
    </Space>
  ),
};

export const Steps: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Progress percent={50} steps={3} />
      <Progress percent={30} steps={5} />
      <Progress percent={100} steps={5} size="small" strokeColor="#52c41a" />
    </Space>
  ),
};

export const SuccessSegment: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Progress percent={60} success={{ percent: 30 }} />
      <Progress type="circle" percent={60} success={{ percent: 30 }} />
    </Space>
  ),
};

export const CustomColor: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Progress percent={25} strokeColor="#108ee9" />
      <Progress
        percent={99.9}
        strokeColor={{ from: '#108ee9', to: '#87d068' }}
      />
      <Progress type="circle" percent={75} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />
    </Space>
  ),
};
