import React from 'react';

import { App, Button, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof App> = {
  title: 'Ant Design/Other/App',
  component: App,
};

export default meta;
type Story = StoryObj<typeof App>;

const AppDemo = () => {
  const { message, modal, notification } = App.useApp();

  return (
    <Space wrap>
      <Button
        type="primary"
        onClick={() => message.success('Hello, Ant Design!')}
      >
        Message
      </Button>
      <Button
        onClick={() =>
          modal.confirm({
            title: 'Confirm',
            content: 'This is a confirm modal from App context.',
          })
        }
      >
        Modal
      </Button>
      <Button
        onClick={() =>
          notification.info({
            title: 'Notification',
            description: 'This is a notification from App context.',
          })
        }
      >
        Notification
      </Button>
    </Space>
  );
};

export const Default: Story = {
  render: () => <AppDemo />,
};

export const Description: Story = {
  render: () => (
    <div>
      <p>
        The <code>App</code> component provides <code>message</code>,{' '}
        <code>modal</code>, and <code>notification</code> through React context,
        eliminating the need for static method calls.
      </p>
      <p>
        This is already configured globally in the Storybook preview decorator.
        All stories have access to these APIs via <code>App.useApp()</code>.
      </p>
      <AppDemo />
    </div>
  ),
};
