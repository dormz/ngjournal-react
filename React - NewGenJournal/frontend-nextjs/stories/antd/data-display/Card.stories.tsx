import React from 'react';

import { Card, Col, Row, Space, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const { Meta: CardMeta } = Card;

const meta: Meta<typeof Card> = {
  title: 'Ant Design/Data Display/Card',
  component: Card,
  argTypes: {
    size: { control: 'select', options: ['default', 'small'] },
    bordered: { control: 'boolean' },
    loading: { control: 'boolean' },
    hoverable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card title',
    extra: <a href="#">More</a>,
    style: { width: 300 },
    children: (
      <div>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </div>
    ),
  },
};

export const NoBorder: Story = {
  render: () => (
    <div style={{ background: '#ececec', padding: 30 }}>
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  ),
};

export const WithMeta: Story = {
  render: () => (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
    >
      <CardMeta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Card
      style={{ width: 300 }}
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <CardMeta
        avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  ),
};

export const Loading: Story = {
  args: {
    loading: true,
    title: 'Card title',
    style: { width: 300 },
  },
};

export const GridCards: Story = {
  render: () => (
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  ),
};

export const Small: Story = {
  args: {
    size: 'small',
    title: 'Small Card',
    extra: <a href="#">More</a>,
    style: { width: 300 },
    children: (
      <div>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </div>
    ),
  },
};

export const Tabs: Story = {
  render: () => (
    <Card
      style={{ width: 500 }}
      tabList={[
        { key: 'tab1', label: 'Tab 1' },
        { key: 'tab2', label: 'Tab 2' },
      ]}
      defaultActiveTabKey="tab1"
    >
      Content of the tab
    </Card>
  ),
};
