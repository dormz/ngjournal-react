import React from 'react';

import { Popover, Button, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Popover> = {
  title: 'Ant Design/Data Display/Popover',
  component: Popover,
  argTypes: {
    trigger: { control: 'select', options: ['hover', 'click', 'focus'] },
    placement: {
      control: 'select',
      options: [
        'top', 'left', 'right', 'bottom',
        'topLeft', 'topRight', 'bottomLeft', 'bottomRight',
        'leftTop', 'leftBottom', 'rightTop', 'rightBottom',
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

export const Default: Story = {
  render: () => (
    <Popover content={content} title="Title">
      <Button type="primary">Hover me</Button>
    </Popover>
  ),
};

export const Triggers: Story = {
  render: () => (
    <Space>
      <Popover content={content} title="Title" trigger="hover">
        <Button>Hover</Button>
      </Popover>
      <Popover content={content} title="Title" trigger="click">
        <Button>Click</Button>
      </Popover>
      <Popover content={content} title="Title" trigger="focus">
        <Button>Focus</Button>
      </Popover>
    </Space>
  ),
};

export const Placement: Story = {
  render: () => (
    <div style={{ padding: 100 }}>
      <Space wrap size="middle">
        <Popover content={content} title="Title" placement="topLeft"><Button>TL</Button></Popover>
        <Popover content={content} title="Title" placement="top"><Button>Top</Button></Popover>
        <Popover content={content} title="Title" placement="topRight"><Button>TR</Button></Popover>
        <Popover content={content} title="Title" placement="left"><Button>Left</Button></Popover>
        <Popover content={content} title="Title" placement="right"><Button>Right</Button></Popover>
        <Popover content={content} title="Title" placement="bottomLeft"><Button>BL</Button></Popover>
        <Popover content={content} title="Title" placement="bottom"><Button>Bottom</Button></Popover>
        <Popover content={content} title="Title" placement="bottomRight"><Button>BR</Button></Popover>
      </Space>
    </div>
  ),
};

export const Arrow: Story = {
  render: () => (
    <Space>
      <Popover content={content} title="Title">
        <Button>With Arrow</Button>
      </Popover>
      <Popover content={content} title="Title" arrow={{ pointAtCenter: true }}>
        <Button>Arrow at Center</Button>
      </Popover>
      <Popover content={content} title="Title" arrow={false}>
        <Button>No Arrow</Button>
      </Popover>
    </Space>
  ),
};
