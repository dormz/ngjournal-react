import React from 'react';

import { Spin, Space, Alert } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Spin> = {
  title: 'Ant Design/Feedback/Spin',
  component: Spin,
  argTypes: {
    size: { control: 'select', options: ['small', 'default', 'large'] },
    spinning: { control: 'boolean' },
    delay: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Spin>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <Space size="middle">
      <Spin size="small" />
      <Spin />
      <Spin size="large" />
    </Space>
  ),
};

export const InsideContainer: Story = {
  render: () => (
    <Spin tip="Loading...">
      <Alert
        title="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
    </Spin>
  ),
};

export const CustomIndicator: Story = {
  render: () => (
    <Space size="middle">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    </Space>
  ),
};

export const Nested: Story = {
  render: () => (
    <Spin spinning={true}>
      <div style={{ padding: 50, background: '#f0f2f5', borderRadius: 4 }}>
        <Alert
          title="Alert message title"
          description="Further details about the context of this alert."
          type="info"
        />
        <div style={{ marginTop: 16 }}>
          Content area that is being loaded.
        </div>
      </div>
    </Spin>
  ),
};

export const Tip: Story = {
  render: () => (
    <Spin tip="Loading" size="large">
      <div style={{ padding: 50, background: 'rgba(0,0,0,0.05)', borderRadius: 4 }} />
    </Spin>
  ),
};

export const Fullscreen: Story = {
  render: () => (
    <div style={{ position: 'relative', height: 300, background: '#f5f5f5', borderRadius: 8, overflow: 'hidden' }}>
      <Spin
        spinning={true}
        tip="Loading..."
        size="large"
        style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <div style={{ height: 300, width: '100%' }} />
      </Spin>
    </div>
  ),
};
