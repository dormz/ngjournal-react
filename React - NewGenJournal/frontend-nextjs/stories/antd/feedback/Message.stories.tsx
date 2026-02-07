import React from 'react';

import { Button, Space, App } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta = {
  title: 'Ant Design/Feedback/Message',
};

export default meta;
type Story = StoryObj;

const MessageDemo = () => {
  const { message } = App.useApp();

  return (
    <Space wrap>
      <Button onClick={() => message.success('This is a success message')}>Success</Button>
      <Button onClick={() => message.error('This is an error message')}>Error</Button>
      <Button onClick={() => message.warning('This is a warning message')}>Warning</Button>
      <Button onClick={() => message.info('This is an info message')}>Info</Button>
      <Button onClick={() => message.loading('Action in progress..', 2.5)}>Loading</Button>
    </Space>
  );
};

export const Default: Story = {
  render: () => <MessageDemo />,
};

const DurationDemo = () => {
  const { message } = App.useApp();

  return (
    <Space>
      <Button onClick={() => message.success({ content: 'Short message (1s)', duration: 1 })}>
        1 second
      </Button>
      <Button onClick={() => message.success({ content: 'Long message (5s)', duration: 5 })}>
        5 seconds
      </Button>
      <Button
        onClick={() => {
          const hide = message.loading('Loading...', 0);
          setTimeout(hide, 3000);
        }}
      >
        Manual close (3s)
      </Button>
    </Space>
  );
};

export const Duration: Story = {
  render: () => <DurationDemo />,
};

const SequentialDemo = () => {
  const { message } = App.useApp();

  const showSequential = () => {
    message
      .loading('Action in progress..', 2.5)
      .then(() => message.success('Loading finished', 2.5))
      .then(() => message.info('Loading finished is finished', 2.5));
  };

  return <Button onClick={showSequential}>Sequential messages</Button>;
};

export const Sequential: Story = {
  render: () => <SequentialDemo />,
};
