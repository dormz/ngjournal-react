import React from 'react';

import {
  Form,
  Input,
  Button,
  Checkbox,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Radio,
  Rate,
  Slider,
  Upload,
  Space,
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Form> = {
  title: 'Ant Design/Data Entry/Form',
  component: Form,
  argTypes: {
    layout: { control: 'select', options: ['horizontal', 'vertical', 'inline'] },
    size: { control: 'select', options: ['small', 'middle', 'large'] },
    disabled: { control: 'boolean' },
    labelAlign: { control: 'select', options: ['left', 'right'] },
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const BasicLogin: Story = {
  render: () => (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" label={null}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  ),
};

export const HorizontalLayout: Story = {
  render: () => (
    <Form
      layout="horizontal"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="Input">
        <Input />
      </Form.Item>
      <Form.Item label="Select">
        <Select
          options={[
            { value: 'demo', label: 'Demo' },
            { value: 'test', label: 'Test' },
          ]}
        />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="InputNumber">
        <InputNumber />
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Button">
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  ),
};

export const VerticalLayout: Story = {
  render: () => (
    <Form layout="vertical" style={{ maxWidth: 600 }}>
      <Form.Item label="Input">
        <Input placeholder="input placeholder" />
      </Form.Item>
      <Form.Item label="Select">
        <Select
          placeholder="select placeholder"
          options={[
            { value: 'demo', label: 'Demo' },
            { value: 'test', label: 'Test' },
          ]}
        />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  ),
};

export const InlineLayout: Story = {
  render: () => (
    <Form layout="inline">
      <Form.Item label="Username">
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Login</Button>
      </Form.Item>
    </Form>
  ),
};

export const Registration: Story = {
  render: () => (
    <Form
      name="register"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
    >
      <Form.Item
        label="E-mail"
        name="email"
        rules={[
          { type: 'email', message: 'Not a valid email!' },
          { required: true, message: 'Please input your email!' },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          { required: true, message: 'Please confirm your password!' },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Passwords do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Nickname"
        name="nickname"
        rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Gender" name="gender">
        <Select placeholder="Select your gender">
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
          <Select.Option value="other">Other</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Agreement"
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
      >
        <Checkbox>
          I have read the <a href="#">agreement</a>
        </Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  ),
};

export const AllControls: Story = {
  render: () => (
    <Form
      name="all-controls"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
    >
      <Form.Item label="Input" name="input">
        <Input />
      </Form.Item>
      <Form.Item label="Select" name="select">
        <Select
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
          ]}
        />
      </Form.Item>
      <Form.Item label="Radio" name="radio">
        <Radio.Group>
          <Radio value="a">Item A</Radio>
          <Radio value="b">Item B</Radio>
          <Radio value="c">Item C</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Rate" name="rate">
        <Rate />
      </Form.Item>
      <Form.Item label="Slider" name="slider">
        <Slider />
      </Form.Item>
      <Form.Item label="Switch" name="switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="DatePicker" name="datepicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="InputNumber" name="inputnumber">
        <InputNumber min={1} max={10} />
      </Form.Item>
      <Form.Item label="Upload" name="upload" valuePropName="fileList">
        <Upload action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload">
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  ),
};

export const DisabledForm: Story = {
  render: () => (
    <Form disabled labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{ maxWidth: 600 }}>
      <Form.Item label="Input">
        <Input />
      </Form.Item>
      <Form.Item label="Select">
        <Select options={[{ value: 'demo', label: 'Demo' }]} />
      </Form.Item>
      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Button">
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Space direction="vertical" size="large" style={{ width: '100%' }}>
      <Form size="small" layout="inline">
        <Form.Item label="Small">
          <Input placeholder="Small size" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
      <Form size="middle" layout="inline">
        <Form.Item label="Middle">
          <Input placeholder="Middle size" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
      <Form size="large" layout="inline">
        <Form.Item label="Large">
          <Input placeholder="Large size" />
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </Space>
  ),
};
