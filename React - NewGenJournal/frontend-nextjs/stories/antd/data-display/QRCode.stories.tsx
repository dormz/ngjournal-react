import React from 'react';

import { QRCode, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof QRCode> = {
  title: 'Ant Design/Data Display/QRCode',
  component: QRCode,
  argTypes: {
    size: { control: 'number' },
    color: { control: 'color' },
    bgColor: { control: 'color' },
    errorLevel: { control: 'select', options: ['L', 'M', 'Q', 'H'] },
    status: { control: 'select', options: ['active', 'expired', 'loading'] },
    type: { control: 'select', options: ['canvas', 'svg'] },
  },
};

export default meta;
type Story = StoryObj<typeof QRCode>;

export const Default: Story = {
  args: {
    value: 'https://ant.design/',
  },
};

export const WithIcon: Story = {
  args: {
    value: 'https://ant.design/',
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  },
};

export const Sizes: Story = {
  render: () => (
    <Space>
      <QRCode value="https://ant.design/" size={120} />
      <QRCode value="https://ant.design/" size={160} />
      <QRCode value="https://ant.design/" size={200} />
    </Space>
  ),
};

export const CustomColors: Story = {
  render: () => (
    <Space>
      <QRCode value="https://ant.design/" color="#1677ff" />
      <QRCode value="https://ant.design/" color="#52c41a" bgColor="#f6ffed" />
      <QRCode value="https://ant.design/" color="#ff4d4f" />
    </Space>
  ),
};

export const ErrorLevel: Story = {
  render: () => (
    <Space>
      <QRCode value="https://ant.design/" errorLevel="L" />
      <QRCode value="https://ant.design/" errorLevel="M" />
      <QRCode value="https://ant.design/" errorLevel="Q" />
      <QRCode value="https://ant.design/" errorLevel="H" />
    </Space>
  ),
};

export const Status: Story = {
  render: () => (
    <Space>
      <QRCode value="https://ant.design/" status="active" />
      <QRCode value="https://ant.design/" status="expired" />
      <QRCode value="https://ant.design/" status="loading" />
    </Space>
  ),
};
