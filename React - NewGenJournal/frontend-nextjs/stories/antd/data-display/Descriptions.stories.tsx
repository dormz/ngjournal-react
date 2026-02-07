import React from 'react';

import { Descriptions, Badge, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Descriptions> = {
  title: 'Ant Design/Data Display/Descriptions',
  component: Descriptions,
  argTypes: {
    bordered: { control: 'boolean' },
    column: { control: 'number' },
    layout: { control: 'select', options: ['horizontal', 'vertical'] },
    size: { control: 'select', options: ['default', 'middle', 'small'] },
  },
};

export default meta;
type Story = StoryObj<typeof Descriptions>;

export const Default: Story = {
  args: {
    title: 'User Info',
    items: [
      { key: '1', label: 'UserName', children: 'Zhou Maomao' },
      { key: '2', label: 'Telephone', children: '1810000000' },
      { key: '3', label: 'Live', children: 'Hangzhou, Zhejiang' },
      { key: '4', label: 'Remark', children: 'empty' },
      { key: '5', label: 'Address', children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China' },
    ],
  },
};

export const Bordered: Story = {
  args: {
    title: 'User Info',
    bordered: true,
    items: [
      { key: '1', label: 'Product', children: 'Cloud Database' },
      { key: '2', label: 'Billing Mode', children: 'Prepaid' },
      { key: '3', label: 'Automatic Renewal', children: 'YES' },
      { key: '4', label: 'Order time', children: '2018-04-24 18:00:00' },
      { key: '5', label: 'Usage Time', children: '2019-04-24 18:00:00', span: 2 },
      { key: '6', label: 'Status', children: <Badge status="processing" text="Running" />, span: 3 },
      {
        key: '7',
        label: 'Negotiated Amount',
        children: '$80.00',
      },
      { key: '8', label: 'Discount', children: '$20.00' },
      { key: '9', label: 'Official Receipts', children: '$60.00' },
      {
        key: '10',
        label: 'Config Info',
        children: (
          <>
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
          </>
        ),
      },
    ],
  },
};

export const Sizes: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Descriptions
        title="Small"
        size="small"
        bordered
        items={[
          { key: '1', label: 'Product', children: 'Cloud Database' },
          { key: '2', label: 'Billing', children: 'Prepaid' },
          { key: '3', label: 'Time', children: '18:00:00' },
        ]}
      />
      <Descriptions
        title="Default"
        bordered
        items={[
          { key: '1', label: 'Product', children: 'Cloud Database' },
          { key: '2', label: 'Billing', children: 'Prepaid' },
          { key: '3', label: 'Time', children: '18:00:00' },
        ]}
      />
    </Space>
  ),
};

export const VerticalLayout: Story = {
  args: {
    title: 'User Info',
    layout: 'vertical',
    items: [
      { key: '1', label: 'UserName', children: 'Zhou Maomao' },
      { key: '2', label: 'Telephone', children: '1810000000' },
      { key: '3', label: 'Live', children: 'Hangzhou, Zhejiang' },
      { key: '4', label: 'Address', children: 'No. 18, Wantang Road, Xihu District, Hangzhou' },
      { key: '5', label: 'Remark', children: 'empty' },
    ],
  },
};
