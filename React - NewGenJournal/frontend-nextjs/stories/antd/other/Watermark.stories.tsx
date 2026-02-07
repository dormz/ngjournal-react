import React from 'react';

import { Watermark, Card } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Watermark> = {
  title: 'Ant Design/Other/Watermark',
  component: Watermark,
  argTypes: {
    content: { control: 'text' },
    rotate: { control: { type: 'range', min: -180, max: 180 } },
    gap: { control: 'object' },
    offset: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof Watermark>;

export const Default: Story = {
  render: () => (
    <Watermark content="Ant Design">
      <div style={{ height: 300 }}>
        <Card title="Card Title">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </Watermark>
  ),
};

export const MultiLine: Story = {
  render: () => (
    <Watermark content={['Ant Design', 'Happy Working']}>
      <div style={{ height: 300 }}>
        <Card title="Card Title">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </Watermark>
  ),
};

export const CustomColor: Story = {
  render: () => (
    <Watermark content="Ant Design" font={{ color: 'rgba(0, 0, 0, 0.15)' }}>
      <div style={{ height: 300 }}>
        <Card title="Card Title">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </Watermark>
  ),
};

export const CustomGap: Story = {
  render: () => (
    <Watermark content="Ant Design" gap={[100, 100]}>
      <div style={{ height: 300 }}>
        <Card title="Card Title">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </Watermark>
  ),
};

export const CustomRotation: Story = {
  render: () => (
    <Watermark content="Ant Design" rotate={0}>
      <div style={{ height: 300 }}>
        <Card title="Card Title">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </div>
    </Watermark>
  ),
};
