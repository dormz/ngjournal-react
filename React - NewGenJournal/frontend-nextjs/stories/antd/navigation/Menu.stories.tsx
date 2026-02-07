import React from 'react';

import { Menu } from 'antd';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type { MenuProps } from 'antd';

const meta: Meta<typeof Menu> = {
  title: 'Ant Design/Navigation/Menu',
  component: Menu,
  argTypes: {
    mode: { control: 'select', options: ['horizontal', 'vertical', 'inline'] },
    theme: { control: 'select', options: ['light', 'dark'] },
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

const horizontalItems: MenuProps['items'] = [
  { key: 'mail', label: 'Navigation One', icon: <MailOutlined /> },
  { key: 'app', label: 'Navigation Two', icon: <AppstoreOutlined />, disabled: true },
  {
    key: 'sub',
    label: 'Navigation Three - Submenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          { key: 'setting:1', label: 'Option 1' },
          { key: 'setting:2', label: 'Option 2' },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          { key: 'setting:3', label: 'Option 3' },
          { key: 'setting:4', label: 'Option 4' },
        ],
      },
    ],
  },
  {
    key: 'link',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
  },
];

export const Horizontal: Story = {
  args: {
    mode: 'horizontal',
    defaultSelectedKeys: ['mail'],
    items: horizontalItems,
  },
};

const verticalItems: MenuProps['items'] = [
  { key: '1', icon: <MailOutlined />, label: 'Navigation One' },
  { key: '2', icon: <CalendarOutlined />, label: 'Navigation Two' },
  {
    key: 'sub1',
    label: 'Navigation Three',
    icon: <AppstoreOutlined />,
    children: [
      { key: '3', label: 'Option 3' },
      { key: '4', label: 'Option 4' },
      {
        key: 'sub1-2',
        label: 'Submenu',
        children: [
          { key: '5', label: 'Option 5' },
          { key: '6', label: 'Option 6' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Four',
    icon: <SettingOutlined />,
    children: [
      { key: '7', label: 'Option 7' },
      { key: '8', label: 'Option 8' },
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
    ],
  },
  {
    key: 'link',
    icon: <LinkOutlined />,
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Ant Design
      </a>
    ),
  },
];

export const InlineMenu: Story = {
  args: {
    mode: 'inline',
    defaultSelectedKeys: ['1'],
    defaultOpenKeys: ['sub1'],
    style: { width: 256 },
    items: verticalItems,
  },
};

export const VerticalMenu: Story = {
  args: {
    mode: 'vertical',
    defaultSelectedKeys: ['1'],
    style: { width: 256 },
    items: verticalItems,
  },
};

export const DarkTheme: Story = {
  args: {
    theme: 'dark',
    mode: 'inline',
    defaultSelectedKeys: ['1'],
    defaultOpenKeys: ['sub1'],
    style: { width: 256 },
    items: verticalItems,
  },
};

export const Collapsed: Story = {
  args: {
    mode: 'inline',
    defaultSelectedKeys: ['1'],
    inlineCollapsed: true,
    style: { width: 80 },
    items: verticalItems,
  },
};
