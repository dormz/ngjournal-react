import React from 'react';

import { Alert, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Alert> = {
  title: 'Ant Design/Feedback/Alert',
  component: Alert,
  argTypes: {
    type: { control: 'select', options: ['success', 'info', 'warning', 'error'] },
    closable: { control: 'boolean' },
    showIcon: { control: 'boolean' },
    banner: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    message: 'Success Text',
    type: 'success',
  },
};

export const Types: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Alert message="Success Text" type="success" />
      <Alert message="Info Text" type="info" />
      <Alert message="Warning Text" type="warning" />
      <Alert message="Error Text" type="error" />
    </Space>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Alert message="Success Tips" description="Detailed description and advice about successful copywriting." type="success" />
      <Alert message="Informational Notes" description="Additional description and information about copywriting." type="info" />
      <Alert message="Warning" description="This is a warning notice about copywriting." type="warning" />
      <Alert message="Error" description="This is an error message about copywriting." type="error" />
    </Space>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Alert message="Success Tips" type="success" showIcon />
      <Alert message="Informational Notes" type="info" showIcon />
      <Alert message="Warning" type="warning" showIcon />
      <Alert message="Error" type="error" showIcon />
      <Alert message="Success Tips" description="Detailed description." type="success" showIcon />
      <Alert message="Informational Notes" description="Additional description." type="info" showIcon />
      <Alert message="Warning" description="This is a warning notice." type="warning" showIcon />
      <Alert message="Error" description="This is an error message." type="error" showIcon />
    </Space>
  ),
};

export const Closable: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Alert
        message="Warning Text Warning Text"
        type="warning"
        closable
        onClose={() => console.log('Closed')}
      />
      <Alert
        message="Error Text"
        description="Error Description Error Description"
        type="error"
        closable
      />
    </Space>
  ),
};

export const Banner: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Alert message="Warning text" banner />
      <Alert message="Very long warning text" banner closable />
      <Alert message="Warning text without icon" banner showIcon={false} />
      <Alert type="error" message="Error text" banner />
    </Space>
  ),
};

export const Action: Story = {
  render: () => (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Alert
        message="Success Tips"
        type="success"
        showIcon
        action={<a href="#">Details</a>}
      />
      <Alert
        message="Error Text"
        showIcon
        description="Error description"
        type="error"
        action={<a href="#">Details</a>}
      />
    </Space>
  ),
};
