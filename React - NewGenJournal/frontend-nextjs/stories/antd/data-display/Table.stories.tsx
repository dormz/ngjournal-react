import React from 'react';

import { Table, Tag, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Table> = {
  title: 'Ant Design/Data Display/Table',
  component: Table,
  argTypes: {
    bordered: { control: 'boolean' },
    loading: { control: 'boolean' },
    size: { control: 'select', options: ['default', 'middle', 'small'] },
    showHeader: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name', render: (text: string) => <a>{text}</a> },
  { title: 'Age', dataIndex: 'age', key: 'age' },
  { title: 'Address', dataIndex: 'address', key: 'address' },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_: unknown, record: DataType) =>
      record.tags.map((tag) => {
        let color = tag.length > 5 ? 'geekblue' : 'green';
        if (tag === 'loser') color = 'volcano';
        return (
          <Tag color={color} key={tag}>
            {tag.toUpperCase()}
          </Tag>
        );
      }),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_: unknown, record: DataType) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park', tags: ['nice', 'developer'] },
  { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park', tags: ['loser'] },
  { key: '3', name: 'Joe Black', age: 32, address: 'Sydney No. 1 Lake Park', tags: ['cool', 'teacher'] },
];

export const Default: Story = {
  args: {
    columns,
    dataSource: data,
  },
};

export const Bordered: Story = {
  args: {
    columns,
    dataSource: data,
    bordered: true,
    title: () => 'Header',
    footer: () => 'Footer',
  },
};

export const Loading: Story = {
  args: {
    columns,
    dataSource: data,
    loading: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <Space orientation="vertical" size="large" style={{ width: '100%' }}>
      <Table columns={columns} dataSource={data} size="small" title={() => 'Small'} />
      <Table columns={columns} dataSource={data} size="middle" title={() => 'Middle'} />
      <Table columns={columns} dataSource={data} title={() => 'Default'} />
    </Space>
  ),
};

export const WithSelection: Story = {
  args: {
    columns,
    dataSource: data,
    rowSelection: {
      type: 'checkbox',
      onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
    },
  },
};

export const Pagination: Story = {
  args: {
    columns: columns.slice(0, 3),
    dataSource: Array.from({ length: 46 }, (_, i) => ({
      key: String(i),
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
      tags: ['nice'],
    })),
    pagination: { pageSize: 10 },
  },
};

export const Sortable: Story = {
  args: {
    columns: [
      { title: 'Name', dataIndex: 'name', sorter: (a: DataType, b: DataType) => a.name.localeCompare(b.name) },
      {
        title: 'Age',
        dataIndex: 'age',
        sorter: (a: DataType, b: DataType) => a.age - b.age,
        defaultSortOrder: 'descend' as const,
      },
      { title: 'Address', dataIndex: 'address' },
    ],
    dataSource: data,
  },
};

export const Filterable: Story = {
  args: {
    columns: [
      {
        title: 'Name',
        dataIndex: 'name',
        filters: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
        ],
        onFilter: (value: unknown, record: DataType) => record.name.indexOf(value as string) === 0,
      },
      { title: 'Age', dataIndex: 'age' },
      { title: 'Address', dataIndex: 'address' },
    ],
    dataSource: data,
  },
};

export const Empty: Story = {
  args: {
    columns,
    dataSource: [],
  },
};
