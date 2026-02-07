import React from 'react';

import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Ant Design/Navigation/Breadcrumb',
  component: Breadcrumb,
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { title: 'Home' },
      { title: 'Application Center', href: '' },
      { title: 'Application List', href: '' },
      { title: 'An Application' },
    ],
  },
};

export const WithIcon: Story = {
  args: {
    items: [
      { href: '', title: <HomeOutlined /> },
      {
        href: '',
        title: (
          <>
            <UserOutlined />
            <span>Application List</span>
          </>
        ),
      },
      { title: 'Application' },
    ],
  },
};

export const WithSeparator: Story = {
  args: {
    separator: '>',
    items: [
      { title: 'Home' },
      { title: 'Application Center' },
      { title: 'Application List' },
      { title: 'An Application' },
    ],
  },
};

export const WithDropdown: Story = {
  args: {
    items: [
      { title: 'Ant Design' },
      {
        title: 'Component',
        menu: {
          items: [
            { key: '1', label: 'General' },
            { key: '2', label: 'Layout' },
            { key: '3', label: 'Navigation' },
          ],
        },
      },
      { title: 'Button' },
    ],
  },
};
