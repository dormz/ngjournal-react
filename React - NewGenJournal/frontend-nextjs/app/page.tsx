'use client';

import {
  CheckCircleOutlined,
  InfoCircleOutlined,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  Alert,
  Badge,
  Button,
  Card,
  Divider,
  Flex,
  Input,
  Progress,
  Space,
  Switch,
  Tag,
  Typography,
} from 'antd';

import { ThemeSwitcher } from './theme';

const { Title, Paragraph, Text } = Typography;

export default function Home() {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '32px 16px' }}>
      {/* ---- Header ---- */}
      <Flex justify="space-between" align="center" wrap="wrap" gap={16}>
        <Title level={3} style={{ margin: 0 }}>
          NewGenJournal
        </Title>
        <ThemeSwitcher />
      </Flex>

      <Divider />

      {/* ---- Component showcase ---- */}
      <Flex vertical gap={24}>
        {/* Buttons */}
        <Card title="Buttons" size="small">
          <Space wrap>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <Button type="link">Link</Button>
            <Button type="primary" danger>
              Danger
            </Button>
          </Space>
        </Card>

        {/* Form inputs */}
        <Card title="Inputs" size="small">
          <Space direction="vertical" style={{ width: '100%', maxWidth: 360 }}>
            <Input prefix={<UserOutlined />} placeholder="Username" />
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            <Flex gap={12}>
              <Switch defaultChecked />
              <Text>Enable notifications</Text>
            </Flex>
          </Space>
        </Card>

        {/* Feedback */}
        <Card title="Feedback" size="small">
          <Space direction="vertical" style={{ width: '100%' }}>
            <Alert message="Informational note" type="info" showIcon />
            <Alert message="Operation successful" type="success" showIcon />
            <Alert message="Something needs attention" type="warning" showIcon />
            <Alert message="Something went wrong" type="error" showIcon />
          </Space>
        </Card>

        {/* Tags & Badges */}
        <Card title="Tags &amp; Badges" size="small">
          <Space wrap>
            <Tag color="processing" icon={<InfoCircleOutlined />}>
              Processing
            </Tag>
            <Tag color="success" icon={<CheckCircleOutlined />}>
              Success
            </Tag>
            <Tag color="warning">Warning</Tag>
            <Tag color="error">Error</Tag>
            <Badge count={5}>
              <Button>Notifications</Button>
            </Badge>
          </Space>
        </Card>

        {/* Progress */}
        <Card title="Progress" size="small">
          <Space direction="vertical" style={{ width: '100%' }}>
            <Progress percent={75} />
            <Progress percent={100} />
            <Progress percent={40} status="exception" />
          </Space>
        </Card>

        <Paragraph type="secondary" style={{ textAlign: 'center' }}>
          Switch the theme using the dropdown above. Each tenant can have its own
          branded color scheme, and you can add more themes in{' '}
          <Text code>app/theme/themeConfig.ts</Text>.
        </Paragraph>
      </Flex>
    </div>
  );
}
