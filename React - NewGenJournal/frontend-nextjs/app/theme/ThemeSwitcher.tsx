'use client';

import { BgColorsOutlined } from '@ant-design/icons';
import { Dropdown, type MenuProps, Tag, theme, Tooltip } from 'antd';

import { tenantThemeList } from './themeConfig';
import { useTheme } from './ThemeProvider';

/**
 * A dropdown button that lets users (or admins) switch the active tenant theme.
 *
 * In production you might restrict this to an admin panel, or resolve the theme
 * automatically from the tenant context. This component is useful during
 * development and for demos.
 */
export function ThemeSwitcher() {
  const { currentTheme, setThemeKey } = useTheme();
  const { token } = theme.useToken();

  const menuItems: MenuProps['items'] = tenantThemeList.map((t) => ({
    key: t.key,
    label: (
      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span
          style={{
            width: 14,
            height: 14,
            borderRadius: '50%',
            backgroundColor: (t.antdTheme.token as Record<string, unknown>)
              ?.colorPrimary as string,
            border: '2px solid rgba(0,0,0,0.06)',
            flexShrink: 0,
          }}
        />
        {t.label}
        {t.key === currentTheme.key && (
          <Tag color="processing" style={{ marginInlineStart: 'auto' }}>
            Active
          </Tag>
        )}
      </span>
    ),
  }));

  const onClick: MenuProps['onClick'] = ({ key }) => {
    setThemeKey(key);
  };

  return (
    <Tooltip title="Switch theme">
      <Dropdown menu={{ items: menuItems, onClick, selectedKeys: [currentTheme.key] }}>
        <span
          role="button"
          tabIndex={0}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            cursor: 'pointer',
            padding: '4px 12px',
            borderRadius: token.borderRadius,
            border: `1px solid ${token.colorBorder}`,
            color: token.colorText,
            fontSize: token.fontSize,
            transition: 'all 0.2s',
          }}
        >
          <BgColorsOutlined style={{ fontSize: 16, color: token.colorPrimary }} />
          {currentTheme.label}
        </span>
      </Dropdown>
    </Tooltip>
  );
}
