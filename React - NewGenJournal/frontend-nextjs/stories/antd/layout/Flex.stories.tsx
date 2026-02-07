import React from 'react';

import { Flex, Button, Tag } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Flex> = {
  title: 'Ant Design/Layout/Flex',
  component: Flex,
  argTypes: {
    vertical: { control: 'boolean' },
    wrap: { control: 'boolean' },
    justify: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    },
    align: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'stretch'],
    },
    gap: {
      control: 'select',
      options: ['small', 'middle', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

const boxStyle: React.CSSProperties = {
  width: '25%',
  height: 54,
  backgroundColor: 'rgba(150, 150, 255, 0.6)',
  borderRadius: 6,
};

export const BasicHorizontal: Story = {
  render: () => (
    <Flex gap="middle">
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="link">Link</Button>
    </Flex>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Flex vertical gap="middle" style={{ width: 200 }}>
      <Button type="primary" block>Primary</Button>
      <Button block>Default</Button>
      <Button type="dashed" block>Dashed</Button>
    </Flex>
  ),
};

export const JustifyAlign: Story = {
  render: () => (
    <Flex gap="middle" vertical>
      {(['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'] as const).map(
        (justify) => (
          <Flex key={justify} justify={justify} style={{ background: 'rgba(0, 0, 0, 0.05)', padding: 4 }}>
            <div style={boxStyle} />
            <div style={boxStyle} />
            <div style={boxStyle} />
          </Flex>
        ),
      )}
    </Flex>
  ),
};

export const Wrap: Story = {
  render: () => (
    <Flex wrap gap="small">
      {Array.from({ length: 20 }, (_, i) => (
        <Tag key={i} color="blue">Tag {i + 1}</Tag>
      ))}
    </Flex>
  ),
};

export const Gap: Story = {
  render: () => (
    <Flex vertical gap="middle">
      <Flex gap="small">
        <Button type="primary">Small Gap</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Flex>
      <Flex gap="middle">
        <Button type="primary">Middle Gap</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Flex>
      <Flex gap="large">
        <Button type="primary">Large Gap</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </Flex>
    </Flex>
  ),
};
