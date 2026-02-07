import React from 'react';

import { Input, Space } from 'antd';
import { UserOutlined, InfoCircleOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const { TextArea, Search, Password } = Input;

const meta: Meta<typeof Input> = {
  title: 'Ant Design/Data Entry/Input',
  component: Input,
  argTypes: {
    size: { control: 'select', options: ['small', 'middle', 'large'] },
    status: { control: 'select', options: ['', 'warning', 'error'] },
    disabled: { control: 'boolean' },
    allowClear: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Basic usage',
  },
};

export const Sizes: Story = {
  render: () => (
    <Space direction="vertical" size="middle" style={{ width: 300 }}>
      <Input size="large" placeholder="Large input" prefix={<UserOutlined />} />
      <Input placeholder="Default input" prefix={<UserOutlined />} />
      <Input size="small" placeholder="Small input" prefix={<UserOutlined />} />
    </Space>
  ),
};

export const PrefixSuffix: Story = {
  render: () => (
    <Space direction="vertical" size="middle" style={{ width: 300 }}>
      <Input
        placeholder="Enter your username"
        prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={<InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
      />
      <Input prefix="¥" suffix="RMB" />
      <Input prefix="https://" suffix=".com" />
    </Space>
  ),
};

export const SearchInput: Story = {
  render: () => (
    <Space direction="vertical" size="middle" style={{ width: 300 }}>
      <Search placeholder="input search text" onSearch={(value) => console.log(value)} />
      <Search placeholder="input search text" allowClear onSearch={(value) => console.log(value)} />
      <Search placeholder="input search text" enterButton onSearch={(value) => console.log(value)} />
      <Search placeholder="input search text" enterButton="Search" size="large" loading />
    </Space>
  ),
};

export const PasswordInput: Story = {
  render: () => (
    <Space direction="vertical" size="middle" style={{ width: 300 }}>
      <Password placeholder="input password" />
      <Password
        placeholder="input password"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
    </Space>
  ),
};

export const TextAreaDemo: Story = {
  render: () => (
    <Space direction="vertical" size="middle" style={{ width: 400 }}>
      <TextArea rows={4} placeholder="Basic textarea" />
      <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
      <TextArea showCount maxLength={100} placeholder="With character count" />
      <TextArea placeholder="Autosize textarea" autoSize />
      <TextArea placeholder="Autosize with limits" autoSize={{ minRows: 2, maxRows: 6 }} />
    </Space>
  ),
};

export const StatusValidation: Story = {
  render: () => (
    <Space direction="vertical" size="middle" style={{ width: 300 }}>
      <Input status="error" placeholder="Error status" />
      <Input status="warning" placeholder="Warning status" />
      <Input status="error" prefix={<UserOutlined />} placeholder="Error with prefix" />
      <Input status="warning" prefix={<UserOutlined />} placeholder="Warning with prefix" />
    </Space>
  ),
};

export const AllowClear: Story = {
  args: {
    placeholder: 'input with clear icon',
    allowClear: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const AddonBeforeAfter: Story = {
  render: () => (
    <Space direction="vertical" size="middle" style={{ width: 400 }}>
      <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
      <Input addonBefore="https://" defaultValue="mysite" />
      <Input addonAfter=".com" defaultValue="mysite" />
    </Space>
  ),
};
