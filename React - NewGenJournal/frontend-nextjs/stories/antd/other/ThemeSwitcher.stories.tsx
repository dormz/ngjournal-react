import React from 'react';

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
  ConfigProvider,
  Divider,
  Flex,
  Input,
  Progress,
  Space,
  Switch,
  Tag,
  Typography,
} from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ThemeSwitcher } from '../../../app/theme/ThemeSwitcher';
import { ThemeProvider } from '../../../app/theme/ThemeProvider';
import { tenantThemeList } from '../../../app/theme/themeConfig';

const { Title, Text } = Typography;

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Ant Design/Other/ThemeSwitcher',
  component: ThemeSwitcher,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          'A dropdown that lets users switch the active tenant theme at runtime. ' +
          'Each tenant in the application can have its own branded color scheme. ' +
          'Themes are defined in `app/theme/themeConfig.ts`.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

// ---------------------------------------------------------------------------
// Sample components panel used in multiple stories
// ---------------------------------------------------------------------------

function ComponentShowcase() {
  return (
    <Flex vertical gap={16} style={{ maxWidth: 500 }}>
      {/* Buttons */}
      <Card title="Buttons" size="small">
        <Space wrap>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="primary" danger>
            Danger
          </Button>
        </Space>
      </Card>

      {/* Inputs */}
      <Card title="Inputs" size="small">
        <Flex vertical style={{ width: '100%' }}>
          <Input prefix={<UserOutlined />} placeholder="Username" />
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          <Flex gap={12}>
            <Switch defaultChecked />
            <Text>Enable notifications</Text>
          </Flex>
        </Flex>
      </Card>

      {/* Feedback */}
      <Card title="Feedback" size="small">
        <Flex vertical style={{ width: '100%' }}>
          <Alert title="Informational note" type="info" showIcon />
          <Alert title="Operation successful" type="success" showIcon />
          <Alert title="Something needs attention" type="warning" showIcon />
        </Flex>
      </Card>

      {/* Tags & Progress */}
      <Card title="Tags & Progress" size="small">
        <Flex vertical style={{ width: '100%' }}>
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
          <Progress percent={75} />
          <Progress percent={100} />
        </Flex>
      </Card>
    </Flex>
  );
}

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

/** The default ThemeSwitcher dropdown in action. */
export const Default: Story = {
  render: () => (
    <ThemeProvider>
      <Flex vertical gap={24}>
        <Flex justify="space-between" align="center">
          <Title level={4} style={{ margin: 0 }}>
            Theme Switcher Demo
          </Title>
          <ThemeSwitcher />
        </Flex>
        <Divider style={{ margin: 0 }} />
        <ComponentShowcase />
      </Flex>
    </ThemeProvider>
  ),
};

/** All tenant themes rendered side-by-side for visual comparison. */
export const AllThemes: Story = {
  render: () => (
    <Flex vertical gap={24}>
      {tenantThemeList.map((t) => (
        <ConfigProvider key={t.key} theme={t.antdTheme ?? {}}>
          <Card
            title={t.label}
            size="small"
            style={{
              background:
                (t.antdTheme.token as Record<string, unknown>)?.colorBgBase != null
                  ? String((t.antdTheme.token as Record<string, unknown>).colorBgBase)
                  : undefined,
            }}
          >
            <Space wrap>
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="primary" danger>
                Danger
              </Button>
              <Switch defaultChecked />
              <Tag color="processing">Tag</Tag>
              <Progress percent={60} style={{ width: 170 }} />
            </Space>
          </Card>
        </ConfigProvider>
      ))}
    </Flex>
  ),
};
