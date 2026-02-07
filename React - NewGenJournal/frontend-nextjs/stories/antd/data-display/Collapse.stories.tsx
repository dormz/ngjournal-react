import React from 'react';

import { Collapse, Space } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Collapse> = {
  title: 'Ant Design/Data Display/Collapse',
  component: Collapse,
  argTypes: {
    accordion: { control: 'boolean' },
    bordered: { control: 'boolean' },
    ghost: { control: 'boolean' },
    size: { control: 'select', options: ['small', 'middle', 'large'] },
  },
};

export default meta;
type Story = StoryObj<typeof Collapse>;

const text =
  'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.';

export const Default: Story = {
  args: {
    items: [
      { key: '1', label: 'This is panel header 1', children: <p>{text}</p> },
      { key: '2', label: 'This is panel header 2', children: <p>{text}</p> },
      { key: '3', label: 'This is panel header 3', children: <p>{text}</p> },
    ],
    defaultActiveKey: ['1'],
  },
};

export const Accordion: Story = {
  args: {
    accordion: true,
    items: [
      { key: '1', label: 'This is panel header 1', children: <p>{text}</p> },
      { key: '2', label: 'This is panel header 2', children: <p>{text}</p> },
      { key: '3', label: 'This is panel header 3', children: <p>{text}</p> },
    ],
  },
};

export const Borderless: Story = {
  args: {
    bordered: false,
    items: [
      { key: '1', label: 'This is panel header 1', children: <p>{text}</p> },
      { key: '2', label: 'This is panel header 2', children: <p>{text}</p> },
      { key: '3', label: 'This is panel header 3', children: <p>{text}</p> },
    ],
    defaultActiveKey: ['1'],
  },
};

export const Ghost: Story = {
  render: () => (
    <div style={{ background: '#f7f7f7', padding: 16 }}>
      <Collapse
        ghost
        items={[
          { key: '1', label: 'This is panel header 1', children: <p>{text}</p> },
          { key: '2', label: 'This is panel header 2', children: <p>{text}</p> },
          { key: '3', label: 'This is panel header 3', children: <p>{text}</p> },
        ]}
      />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Space direction="vertical" size="middle" style={{ width: '100%' }}>
      <Collapse
        size="small"
        items={[{ key: '1', label: 'Small', children: <p>{text}</p> }]}
        defaultActiveKey={['1']}
      />
      <Collapse
        items={[{ key: '1', label: 'Default', children: <p>{text}</p> }]}
        defaultActiveKey={['1']}
      />
      <Collapse
        size="large"
        items={[{ key: '1', label: 'Large', children: <p>{text}</p> }]}
        defaultActiveKey={['1']}
      />
    </Space>
  ),
};

export const Nested: Story = {
  args: {
    items: [
      {
        key: '1',
        label: 'This is panel header 1',
        children: (
          <Collapse
            items={[
              { key: '1-1', label: 'Nested panel 1', children: <p>{text}</p> },
              { key: '1-2', label: 'Nested panel 2', children: <p>{text}</p> },
            ]}
          />
        ),
      },
      { key: '2', label: 'This is panel header 2', children: <p>{text}</p> },
    ],
    defaultActiveKey: ['1'],
  },
};

export const Collapsible: Story = {
  args: {
    items: [
      { key: '1', label: 'This panel can only be collapsed by clicking text', children: <p>{text}</p>, collapsible: 'header' },
      { key: '2', label: 'This panel can only be collapsed by clicking icon', children: <p>{text}</p>, collapsible: 'icon' },
      { key: '3', label: 'This panel cannot be collapsed', children: <p>{text}</p>, collapsible: 'disabled' },
    ],
  },
};
