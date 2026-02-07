import React from 'react';

import { Select, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Select> = {
  title: 'Ant Design/Data Entry/Select',
  component: Select,
  argTypes: {
    size: { control: 'select', options: ['small', 'middle', 'large'] },
    mode: { control: 'select', options: [undefined, 'multiple', 'tags'] },
    disabled: { control: 'boolean' },
    allowClear: { control: 'boolean' },
    showSearch: { control: 'boolean' },
    status: { control: 'select', options: ['', 'warning', 'error'] },
    loading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
  { value: 'tom', label: 'Tom' },
  { value: 'disabled', label: 'Disabled', disabled: true },
];

export const Default: Story = {
  args: {
    defaultValue: 'lucy',
    style: { width: 200 },
    options,
  },
};

export const Sizes: Story = {
  render: () => (
    <Space orientation="vertical">
      <Select size="large" defaultValue="lucy" style={{ width: 200 }} options={options} />
      <Select defaultValue="lucy" style={{ width: 200 }} options={options} />
      <Select size="small" defaultValue="lucy" style={{ width: 200 }} options={options} />
    </Space>
  ),
};

export const WithSearch: Story = {
  args: {
    showSearch: true,
    placeholder: 'Select a person',
    style: { width: 200 },
    optionFilterProp: 'label',
    options,
  },
};

export const Multiple: Story = {
  args: {
    mode: 'multiple',
    allowClear: true,
    style: { width: '100%' },
    placeholder: 'Please select',
    defaultValue: ['jack', 'lucy'],
    options: [
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'tom', label: 'Tom' },
      { value: 'jerry', label: 'Jerry' },
      { value: 'mike', label: 'Mike' },
    ],
  },
};

export const Tags: Story = {
  args: {
    mode: 'tags',
    style: { width: '100%' },
    placeholder: 'Tags Mode',
    options: [
      { value: 'gold', label: 'Gold' },
      { value: 'lime', label: 'Lime' },
      { value: 'green', label: 'Green' },
      { value: 'cyan', label: 'Cyan' },
    ],
  },
};

export const GroupedOptions: Story = {
  args: {
    style: { width: 200 },
    options: [
      {
        label: 'Manager',
        options: [
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
        ],
      },
      {
        label: 'Engineer',
        options: [
          { value: 'tom', label: 'Tom' },
        ],
      },
    ],
  },
};

export const StatusValidation: Story = {
  render: () => (
    <Space>
      <Select status="error" defaultValue="lucy" style={{ width: 200 }} options={options} />
      <Select status="warning" defaultValue="lucy" style={{ width: 200 }} options={options} />
    </Space>
  ),
};

export const Loading: Story = {
  args: {
    loading: true,
    defaultValue: 'lucy',
    style: { width: 200 },
    options,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'lucy',
    style: { width: 200 },
    options,
  },
};

export const Borderless: Story = {
  args: {
    defaultValue: 'lucy',
    style: { width: 200 },
    variant: 'borderless',
    options,
  },
};
