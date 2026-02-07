import React from 'react';

import { DatePicker, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const { RangePicker } = DatePicker;

const meta: Meta<typeof DatePicker> = {
  title: 'Ant Design/Data Entry/DatePicker',
  component: DatePicker,
  argTypes: {
    size: { control: 'select', options: ['small', 'middle', 'large'] },
    disabled: { control: 'boolean' },
    picker: { control: 'select', options: ['date', 'week', 'month', 'quarter', 'year'] },
    status: { control: 'select', options: ['', 'warning', 'error'] },
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    placeholder: 'Select date',
  },
};

export const Pickers: Story = {
  render: () => (
    <Space direction="vertical" size="middle">
      <DatePicker placeholder="Select date" />
      <DatePicker picker="week" placeholder="Select week" />
      <DatePicker picker="month" placeholder="Select month" />
      <DatePicker picker="quarter" placeholder="Select quarter" />
      <DatePicker picker="year" placeholder="Select year" />
    </Space>
  ),
};

export const RangePickerDemo: Story = {
  render: () => (
    <Space direction="vertical" size="middle">
      <RangePicker />
      <RangePicker showTime />
      <RangePicker picker="week" />
      <RangePicker picker="month" />
      <RangePicker picker="quarter" />
      <RangePicker picker="year" />
    </Space>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Space direction="vertical" size="middle">
      <DatePicker size="large" />
      <DatePicker />
      <DatePicker size="small" />
    </Space>
  ),
};

export const ShowTime: Story = {
  args: {
    showTime: true,
    placeholder: 'Select date and time',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled',
  },
};

export const StatusValidation: Story = {
  render: () => (
    <Space direction="vertical">
      <DatePicker status="error" />
      <DatePicker status="warning" />
      <RangePicker status="error" />
      <RangePicker status="warning" />
    </Space>
  ),
};

export const Borderless: Story = {
  args: {
    variant: 'borderless',
    placeholder: 'Borderless',
  },
};
