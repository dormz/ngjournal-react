import React from 'react';

import { Cascader, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Cascader> = {
  title: 'Ant Design/Data Entry/Cascader',
  component: Cascader,
  argTypes: {
    size: { control: 'select', options: ['small', 'middle', 'large'] },
    disabled: { control: 'boolean' },
    multiple: { control: 'boolean' },
    showSearch: { control: 'boolean' },
    status: { control: 'select', options: ['', 'warning', 'error'] },
  },
};

export default meta;
type Story = StoryObj<typeof Cascader>;

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          { value: 'xihu', label: 'West Lake' },
          { value: 'xiasha', label: 'Xia Sha', disabled: true },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          { value: 'zhonghuamen', label: 'Zhong Hua Men' },
        ],
      },
    ],
  },
];

export const Default: Story = {
  args: {
    options,
    placeholder: 'Please select',
    style: { width: 300 },
  },
};

export const DefaultValue: Story = {
  args: {
    options,
    defaultValue: ['zhejiang', 'hangzhou', 'xihu'],
    style: { width: 300 },
  },
};

export const Sizes: Story = {
  render: () => (
    <Space direction="vertical">
      <Cascader size="large" options={options} placeholder="Large" style={{ width: 300 }} />
      <Cascader options={options} placeholder="Default" style={{ width: 300 }} />
      <Cascader size="small" options={options} placeholder="Small" style={{ width: 300 }} />
    </Space>
  ),
};

export const WithSearch: Story = {
  args: {
    options,
    showSearch: true,
    placeholder: 'Search & select',
    style: { width: 300 },
  },
};

export const Multiple: Story = {
  args: {
    options,
    multiple: true,
    maxTagCount: 'responsive',
    placeholder: 'Select multiple',
    style: { width: 300 },
  },
};

export const Disabled: Story = {
  args: {
    options,
    defaultValue: ['zhejiang', 'hangzhou', 'xihu'],
    disabled: true,
    style: { width: 300 },
  },
};

export const StatusValidation: Story = {
  render: () => (
    <Space direction="vertical">
      <Cascader options={options} status="error" style={{ width: 300 }} placeholder="Error" />
      <Cascader options={options} status="warning" style={{ width: 300 }} placeholder="Warning" />
    </Space>
  ),
};
