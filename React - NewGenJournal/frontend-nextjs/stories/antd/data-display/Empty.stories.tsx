import React from 'react';

import { Empty, Button, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Empty> = {
  title: 'Ant Design/Data Display/Empty',
  component: Empty,
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const Default: Story = {};

export const Simple: Story = {
  args: {
    image: Empty.PRESENTED_IMAGE_SIMPLE,
  },
};

export const CustomDescription: Story = {
  args: {
    description: <span>Customize <a href="#">Description</a></span>,
  },
};

export const NoDescription: Story = {
  args: {
    description: false,
  },
};

export const WithAction: Story = {
  render: () => (
    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      styles={{ image: { height: 60 } }}
      description={<span>Customize <a href="#">Description</a></span>}
    >
      <Button type="primary">Create Now</Button>
    </Empty>
  ),
};
