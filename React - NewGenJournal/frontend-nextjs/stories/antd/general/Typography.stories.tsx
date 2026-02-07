import React from 'react';

import { Typography, Divider, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const { Title, Text, Paragraph, Link } = Typography;

const meta: Meta<typeof Typography> = {
  title: 'Ant Design/General/Typography',
  component: Typography,
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Titles: Story = {
  render: () => (
    <div>
      <Title>h1. Ant Design</Title>
      <Title level={2}>h2. Ant Design</Title>
      <Title level={3}>h3. Ant Design</Title>
      <Title level={4}>h4. Ant Design</Title>
      <Title level={5}>h5. Ant Design</Title>
    </div>
  ),
};

export const TextVariants: Story = {
  render: () => (
    <Space direction="vertical">
      <Text>Ant Design (default)</Text>
      <Text type="secondary">Ant Design (secondary)</Text>
      <Text type="success">Ant Design (success)</Text>
      <Text type="warning">Ant Design (warning)</Text>
      <Text type="danger">Ant Design (danger)</Text>
      <Text disabled>Ant Design (disabled)</Text>
      <Text mark>Ant Design (mark)</Text>
      <Text code>Ant Design (code)</Text>
      <Text keyboard>Ant Design (keyboard)</Text>
      <Text underline>Ant Design (underline)</Text>
      <Text delete>Ant Design (delete)</Text>
      <Text strong>Ant Design (strong)</Text>
      <Text italic>Ant Design (italic)</Text>
    </Space>
  ),
};

export const ParagraphDemo: Story = {
  render: () => (
    <div>
      <Paragraph>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved, which might cause designers and developers difficulties and
        duplication and reduce the efficiency of development.
      </Paragraph>
      <Paragraph>
        After massive project practice and summaries, Ant Design, a design language for background
        applications, is refined by Ant UED Team. Ant Design provides a complete range of design patterns
        and high-quality components that can be used to create efficient and enjoyable work experiences.
      </Paragraph>
    </div>
  ),
};

export const LinkDemo: Story = {
  render: () => (
    <Space direction="vertical">
      <Link href="https://ant.design" target="_blank">Ant Design (Link)</Link>
      <Link href="https://ant.design" target="_blank" disabled>Ant Design (Disabled Link)</Link>
    </Space>
  ),
};

export const Copyable: Story = {
  render: () => (
    <Space direction="vertical">
      <Paragraph copyable>This is a copyable text.</Paragraph>
      <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
    </Space>
  ),
};

export const Editable: Story = {
  render: () => (
    <Space direction="vertical">
      <Paragraph editable>This is an editable text.</Paragraph>
      <Title level={5} editable>Editable Title</Title>
    </Space>
  ),
};

export const Ellipsis: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <Paragraph ellipsis>
        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design
        provides a complete range of design patterns and high-quality components.
      </Paragraph>
      <Paragraph ellipsis={{ rows: 2, expandable: 'collapsible' }}>
        Ant Design, a design language for background applications, is refined by Ant UED Team. Ant Design
        provides a complete range of design patterns and high-quality components that can be used to create
        efficient and enjoyable work experiences. After massive project practice and summaries from Ant
        Financial, this design language has been polished and refined over many iterations.
      </Paragraph>
    </div>
  ),
};
