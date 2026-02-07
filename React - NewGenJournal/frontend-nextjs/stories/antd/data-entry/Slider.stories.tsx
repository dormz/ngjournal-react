import React from 'react';

import { Slider, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Slider> = {
  title: 'Ant Design/Data Entry/Slider',
  component: Slider,
  argTypes: {
    disabled: { control: 'boolean' },
    range: { control: 'boolean' },
    vertical: { control: 'boolean' },
    dots: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: 30,
  },
};

export const Range: Story = {
  args: {
    range: true,
    defaultValue: [20, 50],
  },
};

export const WithSteps: Story = {
  render: () => (
    <div>
      <Slider defaultValue={30} step={10} />
      <Slider defaultValue={30} step={10} dots />
    </div>
  ),
};

export const WithMarks: Story = {
  render: () => (
    <Slider
      marks={{
        0: '0°C',
        26: '26°C',
        37: '37°C',
        100: { style: { color: '#f50' }, label: '100°C' },
      }}
      defaultValue={37}
    />
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ height: 300, display: 'flex', gap: 40, padding: '0 16px' }}>
      <Slider vertical defaultValue={30} />
      <Slider vertical range defaultValue={[20, 50]} />
      <Slider
        vertical
        range
        marks={{ 0: '0°C', 26: '26°C', 37: '37°C', 100: '100°C' }}
        defaultValue={[26, 37]}
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: 30,
    disabled: true,
  },
};

export const Tooltip: Story = {
  render: () => (
    <div>
      <Slider defaultValue={30} tooltip={{ open: true }} />
      <Slider defaultValue={30} tooltip={{ formatter: (value) => `${value}%` }} style={{ marginTop: 40 }} />
    </div>
  ),
};
