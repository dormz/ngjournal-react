import React from 'react';

import { Space, Button, Card, Divider, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Space> = {
  title: 'Ant Design/Layout/Space',
  component: Space,
  argTypes: {
    direction: { control: 'select', options: ['horizontal', 'vertical'] },
    size: { control: 'select', options: ['small', 'middle', 'large'] },
    wrap: { control: 'boolean' },
    align: { control: 'select', options: ['start', 'end', 'center', 'baseline'] },
  },
};

export default meta;
type Story = StoryObj<typeof Space>;

export const Default: Story = {
  render: () => (
    <Space>
      <Button type="primary">Button</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
    </Space>
  ),
};

export const VerticalSpace: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Card title="Card" size="small"><p>Card content</p></Card>
      <Card title="Card" size="small"><p>Card content</p></Card>
      <Card title="Card" size="small"><p>Card content</p></Card>
    </Space>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div>
      <Space size="small">
        <Button type="primary">Small</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Space>
      <Divider />
      <Space size="middle">
        <Button type="primary">Middle</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Space>
      <Divider />
      <Space size="large">
        <Button type="primary">Large</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Space>
    </div>
  ),
};

export const Wrap: Story = {
  render: () => (
    <Space size={[8, 16]} wrap>
      {Array.from({ length: 20 }, (_, i) => (
        <Button key={i}>Button {i + 1}</Button>
      ))}
    </Space>
  ),
};

export const Split: Story = {
  render: () => (
    <Space split={<Divider type="vertical" />}>
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </Space>
  ),
};

export const Compact: Story = {
  render: () => (
    <Space.Compact>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Space.Compact>
  ),
};
