import React from 'react';

import { TreeSelect, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof TreeSelect> = {
  title: 'Ant Design/Data Entry/TreeSelect',
  component: TreeSelect,
  argTypes: {
    size: { control: 'select', options: ['small', 'middle', 'large'] },
    disabled: { control: 'boolean' },
    multiple: { control: 'boolean' },
    showSearch: { control: 'boolean' },
    treeCheckable: { control: 'boolean' },
    status: { control: 'select', options: ['', 'warning', 'error'] },
  },
};

export default meta;
type Story = StoryObj<typeof TreeSelect>;

const treeData = [
  {
    value: 'parent 1',
    title: 'Parent 1',
    children: [
      {
        value: 'parent 1-0',
        title: 'Parent 1-0',
        children: [
          { value: 'leaf1', title: 'Leaf 1' },
          { value: 'leaf2', title: 'Leaf 2' },
        ],
      },
      {
        value: 'parent 1-1',
        title: 'Parent 1-1',
        children: [
          { value: 'leaf3', title: 'Leaf 3' },
        ],
      },
    ],
  },
  {
    value: 'parent 2',
    title: 'Parent 2',
  },
];

export const Default: Story = {
  args: {
    treeData,
    placeholder: 'Please select',
    style: { width: 300 },
    treeDefaultExpandAll: true,
  },
};

export const Multiple: Story = {
  args: {
    treeData,
    multiple: true,
    treeDefaultExpandAll: true,
    placeholder: 'Select multiple',
    style: { width: 300 },
  },
};

export const Checkable: Story = {
  args: {
    treeData,
    treeCheckable: true,
    treeDefaultExpandAll: true,
    showCheckedStrategy: TreeSelect.SHOW_PARENT,
    placeholder: 'Checkable tree',
    style: { width: 300 },
  },
};

export const WithSearch: Story = {
  args: {
    treeData,
    showSearch: true,
    treeDefaultExpandAll: true,
    placeholder: 'Search tree',
    style: { width: 300 },
  },
};

export const Disabled: Story = {
  args: {
    treeData,
    defaultValue: 'leaf1',
    disabled: true,
    style: { width: 300 },
  },
};

export const Sizes: Story = {
  render: () => (
    <Space orientation="vertical">
      <TreeSelect size="large" treeData={treeData} placeholder="Large" style={{ width: 300 }} />
      <TreeSelect treeData={treeData} placeholder="Default" style={{ width: 300 }} />
      <TreeSelect size="small" treeData={treeData} placeholder="Small" style={{ width: 300 }} />
    </Space>
  ),
};
