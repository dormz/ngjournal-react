import React from 'react';

import { Checkbox, Divider, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Checkbox> = {
  title: 'Ant Design/Data Entry/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    children: 'Checkbox',
  },
};

export const Disabled: Story = {
  render: () => (
    <Space orientation="vertical">
      <Checkbox disabled>Disabled</Checkbox>
      <Checkbox disabled defaultChecked>Disabled Checked</Checkbox>
    </Space>
  ),
};

export const Group: Story = {
  render: () => (
    <Space orientation="vertical">
      <Checkbox.Group
        options={['Apple', 'Pear', 'Orange']}
        defaultValue={['Apple']}
        onChange={(checkedValues) => console.log('checked:', checkedValues)}
      />
      <Divider />
      <Checkbox.Group
        options={[
          { label: 'Apple', value: 'Apple' },
          { label: 'Pear', value: 'Pear' },
          { label: 'Orange', value: 'Orange', disabled: true },
        ]}
        defaultValue={['Pear']}
      />
    </Space>
  ),
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    children: 'Check all',
  },
};
