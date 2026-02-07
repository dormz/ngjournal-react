import React, { useState } from 'react';

import { Modal, Button, Space } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Modal> = {
  title: 'Ant Design/Feedback/Modal',
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: () => <ModalDemo />,
};

const ConfirmDemo = () => {
  const showConfirm = () => {
    Modal.confirm({
      title: 'Do you want to delete these items?',
      icon: <ExclamationCircleFilled />,
      content: 'Some descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  const showInfo = () => {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>Some messages...some messages...</p>
          <p>Some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  };

  const showSuccess = () => {
    Modal.success({ content: 'Some messages...some messages...' });
  };

  const showError = () => {
    Modal.error({ title: 'This is an error message', content: 'some messages...some messages...' });
  };

  const showWarning = () => {
    Modal.warning({ title: 'This is a warning message', content: 'some messages...some messages...' });
  };

  return (
    <Space wrap>
      <Button onClick={showConfirm}>Confirm</Button>
      <Button onClick={showInfo}>Info</Button>
      <Button onClick={showSuccess}>Success</Button>
      <Button onClick={showError}>Error</Button>
      <Button onClick={showWarning}>Warning</Button>
    </Space>
  );
};

export const Confirm: Story = {
  render: () => <ConfirmDemo />,
};

const CustomFooterDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Custom Footer
      </Button>
      <Modal
        title="Custom Footer"
        open={open}
        onCancel={() => setOpen(false)}
        footer={[
          <Button key="back" onClick={() => setOpen(false)}>Return</Button>,
          <Button key="submit" type="primary" onClick={() => setOpen(false)}>Submit</Button>,
          <Button key="link" type="primary" href="https://google.com">Search on Google</Button>,
        ]}
      >
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export const CustomFooter: Story = {
  render: () => <CustomFooterDemo />,
};

const LoadingDemo = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Loading Modal
      </Button>
      <Modal
        title="Async Close"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={() => setOpen(false)}
      >
        <p>Click OK and wait 2 seconds...</p>
      </Modal>
    </>
  );
};

export const AsyncClose: Story = {
  render: () => <LoadingDemo />,
};
