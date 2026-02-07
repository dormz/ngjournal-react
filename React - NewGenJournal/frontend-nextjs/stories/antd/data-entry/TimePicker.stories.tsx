import React from 'react';

import { TimePicker, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof TimePicker> = {
  title: 'Ant Design/Data Entry/TimePicker',
  component: TimePicker,
  argTypes: {
    size: { control: 'select', options: ['small', 'middle', 'large'] },
    disabled: { control: 'boolean' },
    use12Hours: { control: 'boolean' },
    status: { control: 'select', options: ['', 'warning', 'error'] },
  },
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
  args: {
    placeholder: 'Select time',
  },
};

export const Sizes: Story = {
  render: () => (
    <Space>
      <TimePicker size="large" />
      <TimePicker />
      <TimePicker size="small" />
    </Space>
  ),
};

export const TwelveHour: Story = {
  args: {
    use12Hours: true,
    placeholder: 'Select time (12h)',
  },
};

export const RangeTimePicker: Story = {
  render: () => <TimePicker.RangePicker />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const StatusValidation: Story = {
  render: () => (
    <Space>
      <TimePicker status="error" />
      <TimePicker status="warning" />
    </Space>
  ),
};
