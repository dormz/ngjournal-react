import React from 'react';

import { Button, Space, App } from 'antd';
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta = {
  title: 'Ant Design/Feedback/Notification',
};

export default meta;
type Story = StoryObj;

const NotificationDemo = () => {
  const { notification } = App.useApp();

  return (
    <Space wrap>
      <Button
        onClick={() =>
          notification.open({
            message: 'Notification Title',
            description:
              'This is the content of the notification. This is the content of the notification.',
          })
        }
      >
        Basic
      </Button>
      <Button
        onClick={() =>
          notification.success({
            message: 'Success',
            description: 'This is a success notification.',
          })
        }
      >
        Success
      </Button>
      <Button
        onClick={() =>
          notification.info({
            message: 'Info',
            description: 'This is an info notification.',
          })
        }
      >
        Info
      </Button>
      <Button
        onClick={() =>
          notification.warning({
            message: 'Warning',
            description: 'This is a warning notification.',
          })
        }
      >
        Warning
      </Button>
      <Button
        onClick={() =>
          notification.error({
            message: 'Error',
            description: 'This is an error notification.',
          })
        }
      >
        Error
      </Button>
    </Space>
  );
};

export const Default: Story = {
  render: () => <NotificationDemo />,
};

const PlacementDemo = () => {
  const { notification } = App.useApp();

  const openNotification = (placement: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight') => {
    notification.info({
      message: `Notification ${placement}`,
      description: `This notification is placed at ${placement}.`,
      placement,
    });
  };

  return (
    <Space>
      <Button onClick={() => openNotification('topLeft')} icon={<RadiusUpleftOutlined />}>
        topLeft
      </Button>
      <Button onClick={() => openNotification('topRight')} icon={<RadiusUprightOutlined />}>
        topRight
      </Button>
      <Button onClick={() => openNotification('bottomLeft')} icon={<RadiusBottomleftOutlined />}>
        bottomLeft
      </Button>
      <Button onClick={() => openNotification('bottomRight')} icon={<RadiusBottomrightOutlined />}>
        bottomRight
      </Button>
    </Space>
  );
};

export const Placement: Story = {
  render: () => <PlacementDemo />,
};

const DurationDemo = () => {
  const { notification } = App.useApp();

  return (
    <Space>
      <Button
        onClick={() =>
          notification.open({
            message: 'Auto close (4.5s)',
            description: 'Default auto close.',
          })
        }
      >
        Default Duration
      </Button>
      <Button
        onClick={() =>
          notification.open({
            message: 'Never auto close',
            description: 'This will not auto close.',
            duration: 0,
          })
        }
      >
        Never Close
      </Button>
    </Space>
  );
};

export const Duration: Story = {
  render: () => <DurationDemo />,
};

const WithButtonDemo = () => {
  const { notification } = App.useApp();

  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button size="small" onClick={() => notification.destroy(key)}>
          Dismiss
        </Button>
        <Button type="primary" size="small" onClick={() => notification.destroy(key)}>
          Confirm
        </Button>
      </Space>
    );
    notification.open({
      message: 'Notification Title',
      description: 'A function will be called after the notification is closed.',
      btn,
      key,
    });
  };

  return <Button onClick={openNotification}>With Button</Button>;
};

export const WithButton: Story = {
  render: () => <WithButtonDemo />,
};
