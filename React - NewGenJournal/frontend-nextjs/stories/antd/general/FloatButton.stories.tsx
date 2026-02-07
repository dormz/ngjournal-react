import React from 'react';

import { FloatButton } from 'antd';
import { CustomerServiceOutlined, CommentOutlined, QuestionCircleOutlined } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof FloatButton> = {
  title: 'Ant Design/General/FloatButton',
  component: FloatButton,
};

export default meta;
type Story = StoryObj<typeof FloatButton>;

export const Default: Story = {
  render: () => (
    <div style={{ height: 300, position: 'relative', overflow: 'hidden' }}>
      <FloatButton onClick={() => console.log('click')} style={{ position: 'absolute' }} />
    </div>
  ),
};

export const WithTooltip: Story = {
  render: () => (
    <div style={{ height: 300, position: 'relative', overflow: 'hidden' }}>
      <FloatButton
        tooltip={<div>Documents</div>}
        style={{ position: 'absolute' }}
      />
    </div>
  ),
};

export const CustomIcon: Story = {
  render: () => (
    <div style={{ height: 300, position: 'relative', overflow: 'hidden' }}>
      <FloatButton
        icon={<CustomerServiceOutlined />}
        type="primary"
        style={{ position: 'absolute', insetInlineEnd: 24 }}
      />
      <FloatButton
        icon={<CommentOutlined />}
        style={{ position: 'absolute', insetInlineEnd: 80 }}
      />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div style={{ height: 300, position: 'relative', overflow: 'hidden' }}>
      <FloatButton.Group shape="circle" style={{ position: 'absolute', insetInlineEnd: 24 }}>
        <FloatButton icon={<QuestionCircleOutlined />} />
        <FloatButton />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
      <FloatButton.Group shape="square" style={{ position: 'absolute', insetInlineEnd: 94 }}>
        <FloatButton icon={<QuestionCircleOutlined />} />
        <FloatButton />
        <FloatButton.BackTop visibilityHeight={0} />
      </FloatButton.Group>
    </div>
  ),
};

export const BackTop: Story = {
  render: () => (
    <div style={{ height: 300, position: 'relative', overflow: 'hidden' }}>
      <FloatButton.BackTop style={{ position: 'absolute' }} visibilityHeight={0} />
    </div>
  ),
};
