import React from 'react';

import { Radio, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Radio> = {
  title: 'Ant Design/Data Entry/Radio',
  component: Radio,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    children: 'Radio',
  },
};

export const GroupBasic: Story = {
  render: () => (
    <Radio.Group defaultValue={1}>
      <Radio value={1}>A</Radio>
      <Radio value={2}>B</Radio>
      <Radio value={3}>C</Radio>
      <Radio value={4}>D</Radio>
    </Radio.Group>
  ),
};

export const GroupVertical: Story = {
  render: () => (
    <Radio.Group defaultValue={1}>
      <Space direction="vertical">
        <Radio value={1}>Option A</Radio>
        <Radio value={2}>Option B</Radio>
        <Radio value={3}>Option C</Radio>
        <Radio value={4}>More...</Radio>
      </Space>
    </Radio.Group>
  ),
};

export const ButtonStyle: Story = {
  render: () => (
    <Space direction="vertical">
      <Radio.Group defaultValue="a">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button value="a">Hangzhou</Radio.Button>
        <Radio.Button value="b">Shanghai</Radio.Button>
        <Radio.Button value="c">Beijing</Radio.Button>
        <Radio.Button value="d">Chengdu</Radio.Button>
      </Radio.Group>
    </Space>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Space direction="vertical">
      <Radio.Group defaultValue="a" size="large">
        <Radio.Button value="a">Large</Radio.Button>
        <Radio.Button value="b">Large</Radio.Button>
        <Radio.Button value="c">Large</Radio.Button>
      </Radio.Group>
      <Radio.Group defaultValue="a">
        <Radio.Button value="a">Default</Radio.Button>
        <Radio.Button value="b">Default</Radio.Button>
        <Radio.Button value="c">Default</Radio.Button>
      </Radio.Group>
      <Radio.Group defaultValue="a" size="small">
        <Radio.Button value="a">Small</Radio.Button>
        <Radio.Button value="b">Small</Radio.Button>
        <Radio.Button value="c">Small</Radio.Button>
      </Radio.Group>
    </Space>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Space direction="vertical">
      <Radio disabled>Disabled</Radio>
      <Radio disabled defaultChecked>Disabled Checked</Radio>
    </Space>
  ),
};

export const WithOptions: Story = {
  render: () => (
    <Radio.Group
      options={[
        { label: 'Apple', value: 'Apple' },
        { label: 'Pear', value: 'Pear' },
        { label: 'Orange', value: 'Orange', disabled: true },
      ]}
      defaultValue="Apple"
      optionType="button"
      buttonStyle="solid"
    />
  ),
};
