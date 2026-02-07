import React, { useState } from 'react';

import { Drawer, Button, Space, Form, Input, Select, DatePicker, Col, Row } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Drawer> = {
  title: 'Ant Design/Feedback/Drawer',
  component: Drawer,
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const BasicDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      <Drawer title="Basic Drawer" onClose={() => setOpen(false)} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export const Default: Story = {
  render: () => <BasicDrawer />,
};

const PlacementDrawer = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<'top' | 'right' | 'bottom' | 'left'>('right');

  const showDrawer = (p: 'top' | 'right' | 'bottom' | 'left') => {
    setPlacement(p);
    setOpen(true);
  };

  return (
    <>
      <Space>
        <Button onClick={() => showDrawer('top')}>Top</Button>
        <Button onClick={() => showDrawer('right')}>Right</Button>
        <Button onClick={() => showDrawer('bottom')}>Bottom</Button>
        <Button onClick={() => showDrawer('left')}>Left</Button>
      </Space>
      <Drawer
        title={`${placement} Drawer`}
        placement={placement}
        onClose={() => setOpen(false)}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export const Placement: Story = {
  render: () => <PlacementDrawer />,
};

const SizeDrawer = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<'default' | 'large'>('default');

  const showDrawer = (s: 'default' | 'large') => {
    setSize(s);
    setOpen(true);
  };

  return (
    <>
      <Space>
        <Button onClick={() => showDrawer('default')}>Default Size</Button>
        <Button onClick={() => showDrawer('large')}>Large Size</Button>
      </Space>
      <Drawer
        title={`${size} Drawer`}
        size={size}
        onClose={() => setOpen(false)}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export const Sizes: Story = {
  render: () => <SizeDrawer />,
};

const ExtraDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Open with Extra
      </Button>
      <Drawer
        title="Drawer with extra actions"
        onClose={() => setOpen(false)}
        open={open}
        extra={
          <Space>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="primary" onClick={() => setOpen(false)}>OK</Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export const WithExtra: Story = {
  render: () => <ExtraDrawer />,
};

const FormDrawer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        New Account
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={() => setOpen(false)}
        open={open}
        extra={
          <Space>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)} type="primary">Submit</Button>
          </Space>
        }
      >
        <Form layout="vertical">
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter name' }]}>
                <Input placeholder="Please enter name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="url" label="Url" rules={[{ required: true, message: 'Please enter url' }]}>
                <Input addonBefore="http://" addonAfter=".com" placeholder="Please enter url" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="owner" label="Owner" rules={[{ required: true, message: 'Please select an owner' }]}>
                <Select placeholder="Please select an owner">
                  <Select.Option value="jack">Jack</Select.Option>
                  <Select.Option value="tom">Tom</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="dateTime" label="DateTime" rules={[{ required: true, message: 'Please choose the dateTime' }]}>
                <DatePicker.RangePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="description" label="Description" rules={[{ required: true, message: 'Please enter description' }]}>
                <Input.TextArea rows={4} placeholder="Please enter description" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Drawer>
    </>
  );
};

export const WithForm: Story = {
  render: () => <FormDrawer />,
};
