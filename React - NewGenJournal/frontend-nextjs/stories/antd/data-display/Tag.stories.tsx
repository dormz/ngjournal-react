import React from 'react';

import { Tag, Space, Divider } from 'antd';
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Tag> = {
  title: 'Ant Design/Data Display/Tag',
  component: Tag,
  argTypes: {
    closable: { control: 'boolean' },
    variant: { control: 'select', options: ['outlined', 'filled', 'solid', 'borderless'] },
    color: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  render: () => (
    <Space size={[0, 8]} wrap>
      <Tag>Tag 1</Tag>
      <Tag><a href="https://github.com/ant-design/ant-design/issues/1862">Link</a></Tag>
      <Tag closable onClose={(e) => { e.preventDefault(); console.log('Closed'); }}>Closable</Tag>
      <Tag closable onClose={() => console.log('Closed')}>Closable 2</Tag>
    </Space>
  ),
};

export const Colors: Story = {
  render: () => (
    <div>
      <Divider orientation="left">Presets</Divider>
      <Space size={[0, 8]} wrap>
        {['magenta', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple'].map(
          (color) => (
            <Tag color={color} key={color}>
              {color}
            </Tag>
          ),
        )}
      </Space>
      <Divider orientation="left">Custom</Divider>
      <Space size={[0, 8]} wrap>
        <Tag color="#f50">#f50</Tag>
        <Tag color="#2db7f5">#2db7f5</Tag>
        <Tag color="#87d068">#87d068</Tag>
        <Tag color="#108ee9">#108ee9</Tag>
      </Space>
    </div>
  ),
};

export const StatusTags: Story = {
  render: () => (
    <Space orientation="vertical">
      <Space size={[0, 8]} wrap>
        <Tag icon={<CheckCircleOutlined />} color="success">success</Tag>
        <Tag icon={<SyncOutlined spin />} color="processing">processing</Tag>
        <Tag icon={<CloseCircleOutlined />} color="error">error</Tag>
        <Tag icon={<ExclamationCircleOutlined />} color="warning">warning</Tag>
        <Tag icon={<ClockCircleOutlined />} color="default">waiting</Tag>
        <Tag icon={<MinusCircleOutlined />} color="default">stop</Tag>
      </Space>
      <Space size={[0, 8]} wrap>
        <Tag color="success">success</Tag>
        <Tag color="processing">processing</Tag>
        <Tag color="error">error</Tag>
        <Tag color="warning">warning</Tag>
        <Tag color="default">default</Tag>
      </Space>
    </Space>
  ),
};

export const Filled: Story = {
  render: () => (
    <Space size={[0, 8]} wrap>
      <Tag variant="filled">Tag 1</Tag>
      <Tag variant="filled" color="processing">Processing</Tag>
      <Tag variant="filled" color="success">Success</Tag>
      <Tag variant="filled" color="error">Error</Tag>
      <Tag variant="filled" color="warning">Warning</Tag>
      <Tag variant="filled" color="magenta">Magenta</Tag>
      <Tag variant="filled" color="red">Red</Tag>
      <Tag variant="filled" color="volcano">Volcano</Tag>
      <Tag variant="filled" color="orange">Orange</Tag>
      <Tag variant="filled" color="gold">Gold</Tag>
      <Tag variant="filled" color="lime">Lime</Tag>
      <Tag variant="filled" color="green">Green</Tag>
      <Tag variant="filled" color="cyan">Cyan</Tag>
      <Tag variant="filled" color="blue">Blue</Tag>
      <Tag variant="filled" color="geekblue">Geekblue</Tag>
      <Tag variant="filled" color="purple">Purple</Tag>
    </Space>
  ),
};

export const Checkable: Story = {
  render: () => (
    <Space size={[0, 8]} wrap>
      <Tag.CheckableTag checked>Checked</Tag.CheckableTag>
      <Tag.CheckableTag checked={false}>Unchecked</Tag.CheckableTag>
    </Space>
  ),
};
