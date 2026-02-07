import React from 'react';

import { Tree, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Tree> = {
  title: 'Ant Design/Data Display/Tree',
  component: Tree,
  argTypes: {
    checkable: { control: 'boolean' },
    draggable: { control: 'boolean' },
    showLine: { control: 'boolean' },
    showIcon: { control: 'boolean' },
    blockNode: { control: 'boolean' },
    disabled: { control: 'boolean' },
    defaultExpandAll: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Tree>;

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
          { title: 'leaf', key: '0-0-0-1' },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          { title: <span style={{ color: '#1677ff' }}>sss</span>, key: '0-0-1-0' },
        ],
      },
    ],
  },
];

export const Default: Story = {
  args: {
    defaultExpandedKeys: ['0-0-0', '0-0-1'],
    defaultSelectedKeys: ['0-0-0', '0-0-1'],
    treeData,
  },
};

export const Checkable: Story = {
  args: {
    checkable: true,
    defaultExpandedKeys: ['0-0-0', '0-0-1'],
    defaultCheckedKeys: ['0-0-0'],
    treeData,
  },
};

export const ShowLine: Story = {
  args: {
    showLine: true,
    switcherIcon: <DownOutlined />,
    defaultExpandedKeys: ['0-0-0'],
    treeData,
  },
};

export const Draggable: Story = {
  args: {
    draggable: true,
    defaultExpandedKeys: ['0-0-0', '0-0-1'],
    blockNode: true,
    treeData,
  },
};

export const DirectoryTree: Story = {
  render: () => (
    <Tree.DirectoryTree
      multiple
      defaultExpandAll
      treeData={[
        {
          title: 'parent 0',
          key: '0-0',
          children: [
            { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
            { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
          ],
        },
        {
          title: 'parent 1',
          key: '0-1',
          children: [
            { title: 'leaf 1-0', key: '0-1-0', isLeaf: true },
            { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
          ],
        },
      ]}
    />
  ),
};

export const SearchableTree: Story = {
  args: {
    defaultExpandAll: true,
    treeData: [
      {
        title: 'Documents',
        key: 'docs',
        children: [
          { title: 'Readme.md', key: 'readme', isLeaf: true },
          { title: 'Changelog.md', key: 'changelog', isLeaf: true },
        ],
      },
      {
        title: 'Source',
        key: 'src',
        children: [
          { title: 'index.ts', key: 'index', isLeaf: true },
          { title: 'app.tsx', key: 'app', isLeaf: true },
          {
            title: 'components',
            key: 'components',
            children: [
              { title: 'Button.tsx', key: 'button', isLeaf: true },
              { title: 'Input.tsx', key: 'input', isLeaf: true },
            ],
          },
        ],
      },
    ],
  },
};
