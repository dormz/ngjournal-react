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
    title: 'Success Text',
    type: 'success',
  },
};

export const Types: Story = {
  render: () => (
    <Space orientation="vertical" style={{ width: '100%' }}>
      <Alert title="Success Text" type="success" />
      <Alert title="Info Text" type="info" />
      <Alert title="Warning Text" type="warning" />
      <Alert title="Error Text" type="error" />
    </Space>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Space orientation="vertical" style={{ width: '100%' }}>
      <Alert title="Success Tips" description="Detailed description and advice about successful copywriting." type="success" />
      <Alert title="Informational Notes" description="Additional description and information about copywriting." type="info" />
      <Alert title="Warning" description="This is a warning notice about copywriting." type="warning" />
      <Alert title="Error" description="This is an error message about copywriting." type="error" />
    </Space>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Space orientation="vertical" style={{ width: '100%' }}>
      <Alert title="Success Tips" type="success" showIcon />
      <Alert title="Informational Notes" type="info" showIcon />
      <Alert title="Warning" type="warning" showIcon />
      <Alert title="Error" type="error" showIcon />
      <Alert title="Success Tips" description="Detailed description." type="success" showIcon />
      <Alert title="Informational Notes" description="Additional description." type="info" showIcon />
      <Alert title="Warning" description="This is a warning notice." type="warning" showIcon />
      <Alert title="Error" description="This is an error message." type="error" showIcon />
    </Space>
  ),
};

export const Closable: Story = {
  render: () => (
    <Space orientation="vertical" style={{ width: '100%' }}>
      <Alert
        title="Warning Text Warning Text"
        type="warning"
        closable
        onClose={() => console.log('Closed')}
      />
      <Alert
        title="Error Text"
        description="Error Description Error Description"
        type="error"
        closable
      />
    </Space>
  ),
};

export const Banner: Story = {
  render: () => (
    <Space orientation="vertical" style={{ width: '100%' }}>
      <Alert title="Warning text" banner />
      <Alert title="Very long warning text" banner closable />
      <Alert title="Warning text without icon" banner showIcon={false} />
      <Alert type="error" title="Error text" banner />
    </Space>
  ),
};

export const Action: Story = {
  render: () => (
    <Space orientation="vertical" style={{ width: '100%' }}>
      <Alert
        title="Success Tips"
        type="success"
        showIcon
        action={<a href="#">Details</a>}
      />
      <Alert
        title="Error Text"
        showIcon
        description="Error description"
        type="error"
        action={<a href="#">Details</a>}
      />
    </Space>
  ),
};
