import React from 'react';

import { AutoComplete, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof AutoComplete> = {
  title: 'Ant Design/Data Entry/AutoComplete',
  component: AutoComplete,
  argTypes: {
    size: { control: 'select', options: ['small', 'middle', 'large'] },
    disabled: { control: 'boolean' },
    allowClear: { control: 'boolean' },
    status: { control: 'select', options: ['', 'warning', 'error'] },
  },
};

export default meta;
type Story = StoryObj<typeof AutoComplete>;

const mockOptions = [
  { value: 'Burns Bay Road' },
  { value: 'Downing Street' },
  { value: 'Wall Street' },
];

export const Default: Story = {
  args: {
    options: mockOptions,
    style: { width: 200 },
    placeholder: 'Input here',
  },
};

export const Customized: Story = {
  args: {
    options: [
      {
        label: 'Libraries',
        options: [
          { label: 'AntDesign', value: 'AntDesign' },
          { label: 'AntDesign UI', value: 'AntDesign UI' },
        ],
      },
      {
        label: 'Solutions',
        options: [
          { label: 'AntDesign UI FAQ', value: 'AntDesign UI FAQ' },
          { label: 'AntDesign FAQ', value: 'AntDesign FAQ' },
        ],
      },
    ],
    style: { width: 250 },
    placeholder: 'Input here',
  },
};

export const AllowClear: Story = {
  args: {
    options: mockOptions,
    style: { width: 200 },
    placeholder: 'Input here',
    allowClear: true,
  },
};

export const Disabled: Story = {
  args: {
    options: mockOptions,
    style: { width: 200 },
    placeholder: 'Input here',
    disabled: true,
  },
};

export const StatusValidation: Story = {
  render: () => (
    <Space direction="vertical">
      <AutoComplete options={mockOptions} style={{ width: 200 }} status="error" placeholder="Error" />
      <AutoComplete options={mockOptions} style={{ width: 200 }} status="warning" placeholder="Warning" />
    </Space>
  ),
};
