import React from 'react';

import { InputNumber, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof InputNumber> = {
  title: 'Ant Design/Data Entry/InputNumber',
  component: InputNumber,
  argTypes: {
    size: { control: 'select', options: ['small', 'middle', 'large'] },
    disabled: { control: 'boolean' },
    status: { control: 'select', options: ['', 'warning', 'error'] },
    controls: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof InputNumber>;

export const Default: Story = {
  args: {
    min: 1,
    max: 10,
    defaultValue: 3,
  },
};

export const Sizes: Story = {
  render: () => (
    <Space>
      <InputNumber size="large" min={1} max={100000} defaultValue={3} />
      <InputNumber min={1} max={100000} defaultValue={3} />
      <InputNumber size="small" min={1} max={100000} defaultValue={3} />
    </Space>
  ),
};

export const Disabled: Story = {
  args: {
    min: 1,
    max: 10,
    defaultValue: 3,
    disabled: true,
  },
};

export const Formatter: Story = {
  render: () => (
    <Space>
      <InputNumber
        defaultValue={1000}
        formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        parser={(value) => value!.replace(/\$\s?|(,*)/g, '') as unknown as number}
      />
      <InputNumber
        defaultValue={100}
        min={0}
        max={100}
        formatter={(value) => `${value}%`}
        parser={(value) => value!.replace('%', '') as unknown as number}
      />
    </Space>
  ),
};

export const Decimal: Story = {
  args: {
    min: 0,
    max: 10,
    step: 0.1,
    defaultValue: 3.1,
  },
};

export const StatusValidation: Story = {
  render: () => (
    <Space>
      <InputNumber status="error" defaultValue={3} />
      <InputNumber status="warning" defaultValue={3} />
    </Space>
  ),
};

export const Borderless: Story = {
  args: {
    min: 1,
    max: 10,
    defaultValue: 3,
    variant: 'borderless',
  },
};

export const WithAddon: Story = {
  render: () => (
    <Space direction="vertical">
      <InputNumber addonBefore="+" addonAfter="$" defaultValue={100} />
      <InputNumber addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
    </Space>
  ),
};
