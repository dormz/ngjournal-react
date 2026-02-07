import React from 'react';

import { List, Avatar, Typography, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof List> = {
  title: 'Ant Design/Data Display/List',
  component: List,
  argTypes: {
    bordered: { control: 'boolean' },
    size: { control: 'select', options: ['default', 'small', 'large'] },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

const data = [
  'Racing car sprance the fictional track at incredible speed.',
  'Optically, it was a breathtaking spectacle of nature at its finest.',
  'The old lighthouse stood silently, watching over the harbor below.',
  'Afternoon sunlight filters through the canopy of ancient oaks.',
];

export const Default: Story = {
  args: {
    header: <div>Header</div>,
    footer: <div>Footer</div>,
    bordered: true,
    dataSource: data,
    renderItem: (item: string) => <List.Item>{item}</List.Item>,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    header: <div>Small Header</div>,
    footer: <div>Small Footer</div>,
    bordered: true,
    dataSource: data,
    renderItem: (item: string) => <List.Item>{item}</List.Item>,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    header: <div>Large Header</div>,
    footer: <div>Large Footer</div>,
    bordered: true,
    dataSource: data,
    renderItem: (item: string) => <List.Item>{item}</List.Item>,
  },
};

export const WithMeta: Story = {
  render: () => (
    <List
      itemLayout="horizontal"
      dataSource={[
        { title: 'Ant Design Title 1' },
        { title: 'Ant Design Title 2' },
        { title: 'Ant Design Title 3' },
        { title: 'Ant Design Title 4' },
      ]}
      renderItem={(item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
            title={<a href="#">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />
  ),
};

export const VerticalLayout: Story = {
  render: () => (
    <List
      itemLayout="vertical"
      dataSource={[
        {
          title: 'Ant Design Title 1',
          avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=1',
          description: 'Ant Design, a design language for background applications.',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources.',
        },
        {
          title: 'Ant Design Title 2',
          avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=2',
          description: 'Ant Design, a design language for background applications.',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources.',
        },
      ]}
      renderItem={(item) => (
        <List.Item extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}>
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href="#">{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  ),
};

export const Grid: Story = {
  render: () => (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={['Item 1', 'Item 2', 'Item 3', 'Item 4']}
      renderItem={(item) => (
        <List.Item>
          <div style={{ padding: 16, background: '#fafafa', textAlign: 'center' }}>{item}</div>
        </List.Item>
      )}
    />
  ),
};
