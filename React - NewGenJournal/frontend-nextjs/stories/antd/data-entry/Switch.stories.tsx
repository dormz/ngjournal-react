import React from 'react';

import { Switch, Space } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Switch> = {
  title: 'Ant Design/Data Entry/Switch',
  component: Switch,
  argTypes: {
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    size: { control: 'select', options: ['default', 'small'] },
    defaultChecked: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  render: () => (
    <Space>
      <Switch disabled defaultChecked />
      <Switch disabled />
    </Space>
  ),
};

export const TextAndIcon: Story = {
  render: () => (
    <Space orientation="vertical">
      <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked />
      <Switch checkedChildren="1" unCheckedChildren="0" />
      <Switch
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        defaultChecked
      />
    </Space>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Space>
      <Switch defaultChecked />
      <Switch size="small" defaultChecked />
    </Space>
  ),
};

export const Loading: Story = {
  render: () => (
    <Space>
      <Switch loading defaultChecked />
      <Switch size="small" loading />
    </Space>
  ),
};
