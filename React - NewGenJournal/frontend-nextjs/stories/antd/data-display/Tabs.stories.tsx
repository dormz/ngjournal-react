import React from 'react';

import { Tabs, Space } from 'antd';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Tabs> = {
  title: 'Ant Design/Data Display/Tabs',
  component: Tabs,
  argTypes: {
    type: { control: 'select', options: ['line', 'card', 'editable-card'] },
    size: { control: 'select', options: ['small', 'middle', 'large'] },
    tabPosition: { control: 'select', options: ['top', 'right', 'bottom', 'left'] },
    centered: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    defaultActiveKey: '1',
    items: [
      { key: '1', label: 'Tab 1', children: 'Content of Tab Pane 1' },
      { key: '2', label: 'Tab 2', children: 'Content of Tab Pane 2' },
      { key: '3', label: 'Tab 3', children: 'Content of Tab Pane 3' },
    ],
  },
};

export const Disabled: Story = {
  args: {
    defaultActiveKey: '1',
    items: [
      { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
      { key: '2', label: 'Tab 2', children: 'Content of Tab 2', disabled: true },
      { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
    ],
  },
};

export const Centered: Story = {
  args: {
    centered: true,
    items: [
      { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
      { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
      { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
    ],
  },
};

export const WithIcon: Story = {
  args: {
    defaultActiveKey: '1',
    items: [
      { key: '1', label: 'Tab 1', children: 'Tab 1', icon: <AppleOutlined /> },
      { key: '2', label: 'Tab 2', children: 'Tab 2', icon: <AndroidOutlined /> },
    ],
  },
};

export const CardType: Story = {
  args: {
    type: 'card',
    items: [
      { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
      { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
      { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
    ],
  },
};

export const Sizes: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Tabs
        size="small"
        items={[
          { key: '1', label: 'Small 1', children: 'Content 1' },
          { key: '2', label: 'Small 2', children: 'Content 2' },
        ]}
      />
      <Tabs
        items={[
          { key: '1', label: 'Default 1', children: 'Content 1' },
          { key: '2', label: 'Default 2', children: 'Content 2' },
        ]}
      />
      <Tabs
        size="large"
        items={[
          { key: '1', label: 'Large 1', children: 'Content 1' },
          { key: '2', label: 'Large 2', children: 'Content 2' },
        ]}
      />
    </Space>
  ),
};

export const Position: Story = {
  render: () => (
    <Tabs
      tabPosition="left"
      items={[
        { key: '1', label: 'Tab 1', children: 'Content of Tab 1' },
        { key: '2', label: 'Tab 2', children: 'Content of Tab 2' },
        { key: '3', label: 'Tab 3', children: 'Content of Tab 3' },
      ]}
    />
  ),
};

export const ExtraContent: Story = {
  args: {
    tabBarExtraContent: <a href="#">Extra Action</a>,
    items: [
      { key: '1', label: 'Tab 1', children: 'Content 1' },
      { key: '2', label: 'Tab 2', children: 'Content 2' },
      { key: '3', label: 'Tab 3', children: 'Content 3' },
    ],
  },
};

export const ManyTabs: Story = {
  args: {
    items: Array.from({ length: 30 }, (_, i) => ({
      key: String(i),
      label: `Tab ${i + 1}`,
      children: `Content of Tab ${i + 1}`,
    })),
  },
};
