import React from 'react';

import {
  ConfigProvider,
  Button,
  Space,
  DatePicker,
  Input,
  Select,
  Switch,
  Divider,
  Radio,
  Rate,
  Slider,
} from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof ConfigProvider> = {
  title: 'Ant Design/Other/ConfigProvider',
  component: ConfigProvider,
};

export default meta;
type Story = StoryObj<typeof ConfigProvider>;

export const CustomTheme: Story = {
  render: () => (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00b96b',
          borderRadius: 2,
        },
      }}
    >
      <Space direction="vertical" size="middle">
        <Space>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
        </Space>
        <Input placeholder="Custom themed input" style={{ width: 300 }} />
        <Select
          defaultValue="lucy"
          style={{ width: 200 }}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
          ]}
        />
        <DatePicker />
        <Switch defaultChecked />
        <Slider defaultValue={30} style={{ width: 300 }} />
        <Rate defaultValue={3} />
      </Space>
    </ConfigProvider>
  ),
};

export const DarkAlgorithm: Story = {
  render: () => (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: '#141414',
          colorTextBase: '#fff',
        },
      }}
    >
      <div style={{ padding: 24, background: '#141414', borderRadius: 8 }}>
        <Space direction="vertical" size="middle">
          <Space>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
          </Space>
          <Input placeholder="Dark input" style={{ width: 300 }} />
          <DatePicker />
        </Space>
      </div>
    </ConfigProvider>
  ),
};

export const CompactSize: Story = {
  render: () => (
    <ConfigProvider componentSize="small">
      <Space direction="vertical" size="middle">
        <Space>
          <Button type="primary">Small Primary</Button>
          <Button>Small Default</Button>
        </Space>
        <Input placeholder="Small input" style={{ width: 300 }} />
        <Select
          defaultValue="lucy"
          style={{ width: 200 }}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
          ]}
        />
        <DatePicker />
      </Space>
    </ConfigProvider>
  ),
};

export const BrandColor: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <ConfigProvider theme={{ token: { colorPrimary: '#1677ff' } }}>
        <Space>
          <Button type="primary">Blue Theme</Button>
          <Button>Default</Button>
          <Switch defaultChecked />
        </Space>
      </ConfigProvider>
      <ConfigProvider theme={{ token: { colorPrimary: '#722ED1' } }}>
        <Space>
          <Button type="primary">Purple Theme</Button>
          <Button>Default</Button>
          <Switch defaultChecked />
        </Space>
      </ConfigProvider>
      <ConfigProvider theme={{ token: { colorPrimary: '#EB2F96' } }}>
        <Space>
          <Button type="primary">Pink Theme</Button>
          <Button>Default</Button>
          <Switch defaultChecked />
        </Space>
      </ConfigProvider>
      <ConfigProvider theme={{ token: { colorPrimary: '#FA8C16' } }}>
        <Space>
          <Button type="primary">Orange Theme</Button>
          <Button>Default</Button>
          <Switch defaultChecked />
        </Space>
      </ConfigProvider>
    </Space>
  ),
};

export const BorderRadius: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <ConfigProvider theme={{ token: { borderRadius: 0 } }}>
        <Space>
          <Button type="primary">No Radius</Button>
          <Input placeholder="No radius" style={{ width: 200 }} />
          <Select defaultValue="lucy" style={{ width: 150 }} options={[{ value: 'lucy', label: 'Lucy' }]} />
        </Space>
      </ConfigProvider>
      <Divider />
      <ConfigProvider theme={{ token: { borderRadius: 16 } }}>
        <Space>
          <Button type="primary">Large Radius</Button>
          <Input placeholder="Large radius" style={{ width: 200 }} />
          <Select defaultValue="lucy" style={{ width: 150 }} options={[{ value: 'lucy', label: 'Lucy' }]} />
        </Space>
      </ConfigProvider>
    </Space>
  ),
};
