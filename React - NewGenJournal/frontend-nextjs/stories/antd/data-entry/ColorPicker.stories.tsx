import React from 'react';

import { ColorPicker, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof ColorPicker> = {
  title: 'Ant Design/Data Entry/ColorPicker',
  component: ColorPicker,
  argTypes: {
    size: { control: 'select', options: ['small', 'middle', 'large'] },
    disabled: { control: 'boolean' },
    showText: { control: 'boolean' },
    allowClear: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  args: {
    defaultValue: '#1677ff',
  },
};

export const Sizes: Story = {
  render: () => (
    <Space>
      <ColorPicker size="small" defaultValue="#1677ff" />
      <ColorPicker defaultValue="#1677ff" />
      <ColorPicker size="large" defaultValue="#1677ff" />
    </Space>
  ),
};

export const ShowText: Story = {
  args: {
    defaultValue: '#1677ff',
    showText: true,
  },
};

export const AllowClear: Story = {
  args: {
    defaultValue: '#1677ff',
    allowClear: true,
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: '#1677ff',
    disabled: true,
  },
};

export const Presets: Story = {
  render: () => (
    <ColorPicker
      presets={[
        {
          label: 'Recommended',
          colors: [
            '#000000',
            '#000000E0',
            '#000000A6',
            '#00000073',
            '#00000040',
            '#00000026',
            '#0000001A',
            '#00000012',
            '#0000000A',
            '#00000005',
            '#F5222D',
            '#FA8C16',
            '#FADB14',
            '#8BBB11',
            '#52C41A',
            '#13A8A8',
            '#1677FF',
            '#2F54EB',
            '#722ED1',
            '#EB2F96',
          ],
        },
        {
          label: 'Recent',
          colors: ['#F5222D', '#1677FF', '#52C41A'],
        },
      ]}
    />
  ),
};

export const FormatControl: Story = {
  args: {
    defaultValue: '#1677ff',
    showText: true,
    format: 'hex',
  },
};
