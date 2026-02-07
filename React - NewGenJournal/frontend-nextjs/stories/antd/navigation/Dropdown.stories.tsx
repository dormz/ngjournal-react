import React from 'react';

import { Dropdown, Button, Space } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type { MenuProps } from 'antd';

const meta: Meta<typeof Dropdown> = {
  title: 'Ant Design/Navigation/Dropdown',
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const items: MenuProps['items'] = [
  { key: '1', label: '1st menu item' },
  { key: '2', label: '2nd menu item' },
  { key: '3', label: '3rd menu item (disabled)', disabled: true },
  { key: '4', label: 'a danger item', danger: true },
];

export const Default: Story = {
  render: () => (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  ),
};

export const Placement: Story = {
  render: () => (
    <Space size="middle">
      <Dropdown menu={{ items }} placement="bottomLeft">
        <Button>bottomLeft</Button>
      </Dropdown>
      <Dropdown menu={{ items }} placement="bottom">
        <Button>bottom</Button>
      </Dropdown>
      <Dropdown menu={{ items }} placement="bottomRight">
        <Button>bottomRight</Button>
      </Dropdown>
      <Dropdown menu={{ items }} placement="topLeft">
        <Button>topLeft</Button>
      </Dropdown>
      <Dropdown menu={{ items }} placement="top">
        <Button>top</Button>
      </Dropdown>
      <Dropdown menu={{ items }} placement="topRight">
        <Button>topRight</Button>
      </Dropdown>
    </Space>
  ),
};

export const Arrow: Story = {
  render: () => (
    <Space size="middle">
      <Dropdown menu={{ items }} arrow>
        <Button>With Arrow</Button>
      </Dropdown>
      <Dropdown menu={{ items }} arrow={{ pointAtCenter: true }}>
        <Button>Arrow at Center</Button>
      </Dropdown>
    </Space>
  ),
};

export const Trigger: Story = {
  render: () => (
    <Space size="middle">
      <Dropdown menu={{ items }} trigger={['hover']}>
        <Button>Hover</Button>
      </Dropdown>
      <Dropdown menu={{ items }} trigger={['click']}>
        <Button>Click</Button>
      </Dropdown>
      <Dropdown menu={{ items }} trigger={['contextMenu']}>
        <div
          style={{
            padding: '16px 32px',
            background: '#f5f5f5',
            textAlign: 'center',
            cursor: 'pointer',
          }}
        >
          Right Click on me
        </div>
      </Dropdown>
    </Space>
  ),
};

export const ButtonDropdown: Story = {
  render: () => (
    <Space>
      <Space.Compact>
        <Button>Actions</Button>
        <Dropdown menu={{ items }}>
          <Button icon={<DownOutlined />} />
        </Dropdown>
      </Space.Compact>
      <Space.Compact>
        <Button type="primary">Actions</Button>
        <Dropdown menu={{ items }}>
          <Button type="primary" icon={<DownOutlined />} />
        </Dropdown>
      </Space.Compact>
    </Space>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Dropdown
      menu={{
        items: [
          { key: '1', label: 'Happy item', icon: <SmileOutlined /> },
          { key: '2', label: 'Normal item' },
          { type: 'divider' },
          { key: '3', label: 'Disabled item', disabled: true },
        ],
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  ),
};
