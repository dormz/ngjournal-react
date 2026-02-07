import React from 'react';

import { Button, Flex, Space } from 'antd';
import { DownloadOutlined, SearchOutlined, PoweroffOutlined } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Button> = {
  title: 'Ant Design/General/Button',
  component: Button,
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'primary', 'dashed', 'text', 'link'],
    },
    size: {
      control: 'select',
      options: ['small', 'middle', 'large'],
    },
    shape: {
      control: 'select',
      options: ['default', 'circle', 'round'],
    },
    danger: { control: 'boolean' },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    ghost: { control: 'boolean' },
    block: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    type: 'default',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    type: 'primary',
  },
};

export const Dashed: Story = {
  args: {
    children: 'Dashed Button',
    type: 'dashed',
  },
};

export const Text: Story = {
  args: {
    children: 'Text Button',
    type: 'text',
  },
};

export const Link: Story = {
  args: {
    children: 'Link Button',
    type: 'link',
  },
};

export const Sizes: Story = {
  render: () => (
    <Space direction="vertical">
      <Space>
        <Button type="primary" size="large">Large</Button>
        <Button type="primary">Default</Button>
        <Button type="primary" size="small">Small</Button>
      </Space>
      <Space>
        <Button type="primary" size="large" shape="round">Large</Button>
        <Button type="primary" shape="round">Default</Button>
        <Button type="primary" size="small" shape="round">Small</Button>
      </Space>
      <Space>
        <Button type="primary" size="large" shape="circle" icon={<DownloadOutlined />} />
        <Button type="primary" shape="circle" icon={<DownloadOutlined />} />
        <Button type="primary" size="small" shape="circle" icon={<DownloadOutlined />} />
      </Space>
    </Space>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Space>
      <Button type="primary" icon={<SearchOutlined />}>Search</Button>
      <Button shape="circle" icon={<SearchOutlined />} />
      <Button type="primary" shape="round" icon={<DownloadOutlined />}>Download</Button>
      <Button type="primary" icon={<DownloadOutlined />} />
    </Space>
  ),
};

export const Loading: Story = {
  render: () => (
    <Space>
      <Button type="primary" loading>Loading</Button>
      <Button type="primary" size="small" loading>Loading</Button>
      <Button type="primary" icon={<PoweroffOutlined />} loading />
    </Space>
  ),
};

export const Danger: Story = {
  render: () => (
    <Space>
      <Button type="primary" danger>Primary</Button>
      <Button danger>Default</Button>
      <Button type="dashed" danger>Dashed</Button>
      <Button type="text" danger>Text</Button>
      <Button type="link" danger>Link</Button>
    </Space>
  ),
};

export const Ghost: Story = {
  render: () => (
    <div style={{ padding: 16, background: 'rgb(190, 200, 200)' }}>
      <Space>
        <Button type="primary" ghost>Primary</Button>
        <Button ghost>Default</Button>
        <Button type="dashed" ghost>Dashed</Button>
        <Button danger ghost>Danger</Button>
      </Space>
    </div>
  ),
};

export const Block: Story = {
  render: () => (
    <Flex vertical gap="small" style={{ width: 300 }}>
      <Button type="primary" block>Primary</Button>
      <Button block>Default</Button>
      <Button type="dashed" block>Dashed</Button>
      <Button type="link" block>Link</Button>
    </Flex>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Space direction="vertical">
      <Space>
        <Button type="primary">Primary</Button>
        <Button type="primary" disabled>Primary (disabled)</Button>
      </Space>
      <Space>
        <Button>Default</Button>
        <Button disabled>Default (disabled)</Button>
      </Space>
      <Space>
        <Button type="dashed">Dashed</Button>
        <Button type="dashed" disabled>Dashed (disabled)</Button>
      </Space>
      <Space>
        <Button type="text">Text</Button>
        <Button type="text" disabled>Text (disabled)</Button>
      </Space>
      <Space>
        <Button type="link">Link</Button>
        <Button type="link" disabled>Link (disabled)</Button>
      </Space>
      <Space>
        <Button danger>Danger Default</Button>
        <Button danger disabled>Danger Default (disabled)</Button>
      </Space>
    </Space>
  ),
};
