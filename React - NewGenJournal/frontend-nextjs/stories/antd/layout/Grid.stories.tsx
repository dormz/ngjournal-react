import React from 'react';

import { Col, Row } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Row> = {
  title: 'Ant Design/Layout/Grid',
  component: Row,
};

export default meta;
type Story = StoryObj<typeof Row>;

const colStyle: React.CSSProperties = {
  background: '#0092ff',
  padding: '8px 0',
  textAlign: 'center',
  color: '#fff',
  borderRadius: 4,
};

const colStyleLight: React.CSSProperties = {
  ...colStyle,
  background: '#0092ffcc',
};

export const BasicGrid: Story = {
  render: () => (
    <div>
      <Row>
        <Col span={24}><div style={colStyle}>col-24</div></Col>
      </Row>
      <Row style={{ marginTop: 8 }}>
        <Col span={12}><div style={colStyle}>col-12</div></Col>
        <Col span={12}><div style={colStyleLight}>col-12</div></Col>
      </Row>
      <Row style={{ marginTop: 8 }}>
        <Col span={8}><div style={colStyle}>col-8</div></Col>
        <Col span={8}><div style={colStyleLight}>col-8</div></Col>
        <Col span={8}><div style={colStyle}>col-8</div></Col>
      </Row>
      <Row style={{ marginTop: 8 }}>
        <Col span={6}><div style={colStyle}>col-6</div></Col>
        <Col span={6}><div style={colStyleLight}>col-6</div></Col>
        <Col span={6}><div style={colStyle}>col-6</div></Col>
        <Col span={6}><div style={colStyleLight}>col-6</div></Col>
      </Row>
    </div>
  ),
};

export const Gutter: Story = {
  render: () => (
    <div>
      <Row gutter={16}>
        <Col span={6}><div style={colStyle}>col-6</div></Col>
        <Col span={6}><div style={colStyle}>col-6</div></Col>
        <Col span={6}><div style={colStyle}>col-6</div></Col>
        <Col span={6}><div style={colStyle}>col-6</div></Col>
      </Row>
      <Row gutter={[16, 24]} style={{ marginTop: 16 }}>
        <Col span={6}><div style={colStyle}>col-6</div></Col>
        <Col span={6}><div style={colStyle}>col-6</div></Col>
        <Col span={6}><div style={colStyle}>col-6</div></Col>
        <Col span={6}><div style={colStyle}>col-6</div></Col>
        <Col span={6}><div style={colStyle}>col-6</div></Col>
        <Col span={6}><div style={colStyle}>col-6</div></Col>
        <Col span={6}><div style={colStyle}>col-6</div></Col>
        <Col span={6}><div style={colStyle}>col-6</div></Col>
      </Row>
    </div>
  ),
};

export const Offset: Story = {
  render: () => (
    <div>
      <Row>
        <Col span={8}><div style={colStyle}>col-8</div></Col>
        <Col span={8} offset={8}><div style={colStyle}>col-8 offset-8</div></Col>
      </Row>
      <Row style={{ marginTop: 8 }}>
        <Col span={6} offset={6}><div style={colStyle}>col-6 offset-6</div></Col>
        <Col span={6} offset={6}><div style={colStyle}>col-6 offset-6</div></Col>
      </Row>
    </div>
  ),
};

export const FlexAlignment: Story = {
  render: () => (
    <div>
      <Row justify="start" style={{ background: '#f5f5f5', padding: 8, marginBottom: 8 }}>
        <Col span={4}><div style={colStyle}>col-4</div></Col>
        <Col span={4}><div style={colStyleLight}>col-4</div></Col>
        <Col span={4}><div style={colStyle}>col-4</div></Col>
      </Row>
      <Row justify="center" style={{ background: '#f5f5f5', padding: 8, marginBottom: 8 }}>
        <Col span={4}><div style={colStyle}>col-4</div></Col>
        <Col span={4}><div style={colStyleLight}>col-4</div></Col>
        <Col span={4}><div style={colStyle}>col-4</div></Col>
      </Row>
      <Row justify="end" style={{ background: '#f5f5f5', padding: 8, marginBottom: 8 }}>
        <Col span={4}><div style={colStyle}>col-4</div></Col>
        <Col span={4}><div style={colStyleLight}>col-4</div></Col>
        <Col span={4}><div style={colStyle}>col-4</div></Col>
      </Row>
      <Row justify="space-between" style={{ background: '#f5f5f5', padding: 8, marginBottom: 8 }}>
        <Col span={4}><div style={colStyle}>col-4</div></Col>
        <Col span={4}><div style={colStyleLight}>col-4</div></Col>
        <Col span={4}><div style={colStyle}>col-4</div></Col>
      </Row>
      <Row justify="space-around" style={{ background: '#f5f5f5', padding: 8 }}>
        <Col span={4}><div style={colStyle}>col-4</div></Col>
        <Col span={4}><div style={colStyleLight}>col-4</div></Col>
        <Col span={4}><div style={colStyle}>col-4</div></Col>
      </Row>
    </div>
  ),
};

export const Responsive: Story = {
  render: () => (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8} lg={6}><div style={colStyle}>Responsive</div></Col>
      <Col xs={24} sm={12} md={8} lg={6}><div style={colStyleLight}>Responsive</div></Col>
      <Col xs={24} sm={12} md={8} lg={6}><div style={colStyle}>Responsive</div></Col>
      <Col xs={24} sm={12} md={8} lg={6}><div style={colStyleLight}>Responsive</div></Col>
    </Row>
  ),
};
