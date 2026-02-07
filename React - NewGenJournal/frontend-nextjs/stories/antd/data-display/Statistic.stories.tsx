import React from 'react';

import { Statistic, Card, Col, Row, Space } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, LikeOutlined } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Statistic> = {
  title: 'Ant Design/Data Display/Statistic',
  component: Statistic,
  argTypes: {
    precision: { control: 'number' },
    loading: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Statistic>;

export const Default: Story = {
  render: () => (
    <Row gutter={16}>
      <Col span={12}>
        <Statistic title="Active Users" value={112893} />
      </Col>
      <Col span={12}>
        <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
      </Col>
    </Row>
  ),
};

export const WithPrefix: Story = {
  render: () => (
    <Row gutter={16}>
      <Col span={12}>
        <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
      </Col>
      <Col span={12}>
        <Statistic title="Unmerged" value={93} suffix="/ 100" />
      </Col>
    </Row>
  ),
};

export const InCard: Story = {
  render: () => (
    <Row gutter={16}>
      <Col span={12}>
        <Card bordered={false}>
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card bordered={false}>
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
    </Row>
  ),
};

export const Countdown: Story = {
  render: () => (
    <Row gutter={16}>
      <Col span={12}>
        <Statistic.Countdown title="Countdown" value={Date.now() + 1000 * 60 * 60 * 24 * 2} />
      </Col>
      <Col span={12}>
        <Statistic.Countdown
          title="Day Level"
          value={Date.now() + 1000 * 60 * 60 * 24 * 2}
          format="D [days] H:mm:ss"
        />
      </Col>
    </Row>
  ),
};

export const Loading: Story = {
  args: {
    title: 'Active Users',
    value: 112893,
    loading: true,
  },
};
