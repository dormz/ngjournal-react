import React from 'react';

import { Popconfirm, Button, Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Popconfirm> = {
  title: 'Ant Design/Feedback/Popconfirm',
  component: Popconfirm,
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top', 'left', 'right', 'bottom',
        'topLeft', 'topRight', 'bottomLeft', 'bottomRight',
        'leftTop', 'leftBottom', 'rightTop', 'rightBottom',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popconfirm>;

export const Default: Story = {
  render: () => (
    <Popconfirm
      title="Delete the task"
      description="Are you sure to delete this task?"
      onConfirm={() => console.log('Confirmed')}
      onCancel={() => console.log('Cancelled')}
      okText="Yes"
      cancelText="No"
    >
      <Button danger>Delete</Button>
    </Popconfirm>
  ),
};

export const Placement: Story = {
  render: () => (
    <div style={{ padding: 80 }}>
      <Space wrap size="middle">
        {(['topLeft', 'top', 'topRight', 'leftTop', 'left', 'leftBottom', 'rightTop', 'right', 'rightBottom', 'bottomLeft', 'bottom', 'bottomRight'] as const).map(
          (placement) => (
            <Popconfirm
              key={placement}
              title="Are you sure?"
              description={`Placed at ${placement}`}
              placement={placement}
            >
              <Button>{placement}</Button>
            </Popconfirm>
          ),
        )}
      </Space>
    </div>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <Popconfirm
      title="Delete?"
      description="Are you sure to delete this task?"
      icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
    >
      <Button danger>Delete</Button>
    </Popconfirm>
  ),
};

export const ConditionalTrigger: Story = {
  render: () => (
    <Space>
      <Popconfirm
        title="Delete?"
        description="Popconfirm is enabled"
        disabled={false}
      >
        <Button>Enabled</Button>
      </Popconfirm>
      <Popconfirm
        title="Delete?"
        description="Popconfirm is disabled"
        disabled={true}
      >
        <Button>Disabled</Button>
      </Popconfirm>
    </Space>
  ),
};
