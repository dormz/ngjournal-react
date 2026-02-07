import React from 'react';

import { Mentions, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Mentions> = {
  title: 'Ant Design/Data Entry/Mentions',
  component: Mentions,
  argTypes: {
    size: { control: 'select', options: ['small', 'middle', 'large'] },
    disabled: { control: 'boolean' },
    status: { control: 'select', options: ['', 'warning', 'error'] },
    placement: { control: 'select', options: ['top', 'bottom'] },
  },
};

export default meta;
type Story = StoryObj<typeof Mentions>;

const defaultOptions = [
  { value: 'afc163', label: 'afc163' },
  { value: 'zombieJ', label: 'zombieJ' },
  { value: 'yesmeck', label: 'yesmeck' },
];

export const Default: Story = {
  args: {
    style: { width: '100%' },
    placeholder: 'Input @ to mention people',
    options: defaultOptions,
  },
};

export const Prefix: Story = {
  args: {
    style: { width: '100%' },
    placeholder: 'Input @ to mention people, # to tag',
    prefix: ['@', '#'],
    options: defaultOptions,
  },
};

export const Disabled: Story = {
  args: {
    style: { width: '100%' },
    disabled: true,
    defaultValue: '@afc163',
    options: defaultOptions,
  },
};

export const ReadOnly: Story = {
  args: {
    style: { width: '100%' },
    readOnly: true,
    defaultValue: '@afc163',
    options: defaultOptions,
  },
};

export const StatusValidation: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Mentions status="error" placeholder="Error status" options={defaultOptions} />
      <Mentions status="warning" placeholder="Warning status" options={defaultOptions} />
    </Space>
  ),
};

export const Placement: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Mentions placement="top" placeholder="Placement top" options={defaultOptions} />
      <Mentions placement="bottom" placeholder="Placement bottom" options={defaultOptions} />
    </Space>
  ),
};
