import React from 'react';

import { Tooltip, Button, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Tooltip> = {
  title: 'Ant Design/Data Display/Tooltip',
  component: Tooltip,
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top', 'left', 'right', 'bottom',
        'topLeft', 'topRight', 'bottomLeft', 'bottomRight',
        'leftTop', 'leftBottom', 'rightTop', 'rightBottom',
      ],
    },
    color: { control: 'color' },
    trigger: { control: 'select', options: ['hover', 'focus', 'click'] },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    title: 'Prompt text',
    children: <span>Tooltip will show on mouse enter.</span>,
  },
};

export const Placement: Story = {
  render: () => (
    <div style={{ padding: 80 }}>
      <div style={{ marginLeft: 70, whiteSpace: 'nowrap' }}>
        <Space>
          <Tooltip placement="topLeft" title="Prompt text"><Button>TL</Button></Tooltip>
          <Tooltip placement="top" title="Prompt text"><Button>Top</Button></Tooltip>
          <Tooltip placement="topRight" title="Prompt text"><Button>TR</Button></Tooltip>
        </Space>
      </div>
      <div style={{ width: 70, float: 'left', marginTop: 8 }}>
        <Space orientation="vertical">
          <Tooltip placement="leftTop" title="Prompt text"><Button>LT</Button></Tooltip>
          <Tooltip placement="left" title="Prompt text"><Button>Left</Button></Tooltip>
          <Tooltip placement="leftBottom" title="Prompt text"><Button>LB</Button></Tooltip>
        </Space>
      </div>
      <div style={{ width: 70, marginLeft: 304, marginTop: 8 }}>
        <Space orientation="vertical">
          <Tooltip placement="rightTop" title="Prompt text"><Button>RT</Button></Tooltip>
          <Tooltip placement="right" title="Prompt text"><Button>Right</Button></Tooltip>
          <Tooltip placement="rightBottom" title="Prompt text"><Button>RB</Button></Tooltip>
        </Space>
      </div>
      <div style={{ marginLeft: 70, marginTop: 8, whiteSpace: 'nowrap' }}>
        <Space>
          <Tooltip placement="bottomLeft" title="Prompt text"><Button>BL</Button></Tooltip>
          <Tooltip placement="bottom" title="Prompt text"><Button>Bottom</Button></Tooltip>
          <Tooltip placement="bottomRight" title="Prompt text"><Button>BR</Button></Tooltip>
        </Space>
      </div>
    </div>
  ),
};

export const Arrow: Story = {
  render: () => (
    <Space>
      <Tooltip title="Prompt text">
        <Button>With Arrow</Button>
      </Tooltip>
      <Tooltip title="Prompt text" arrow={{ pointAtCenter: true }}>
        <Button>Arrow at Center</Button>
      </Tooltip>
      <Tooltip title="Prompt text" arrow={false}>
        <Button>No Arrow</Button>
      </Tooltip>
    </Space>
  ),
};

export const Colors: Story = {
  render: () => (
    <Space wrap>
      {['pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime'].map(
        (color) => (
          <Tooltip key={color} title="Prompt text" color={color}>
            <Button>{color}</Button>
          </Tooltip>
        ),
      )}
    </Space>
  ),
};
