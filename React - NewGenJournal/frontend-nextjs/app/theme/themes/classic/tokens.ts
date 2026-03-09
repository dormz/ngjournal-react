import type { ThemeConfig } from 'antd';

/**
 * Global design tokens for the Classic theme.
 * Shared across all components unless overridden in component files.
 */
export const classicTokens: NonNullable<ThemeConfig['token']> = {
  fontFamily: "'Georgia', 'Times New Roman', Times, serif",
  colorPrimary: '#1890ff',
  colorInfo: '#1890ff',
  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#f5222d',
  borderRadius: 2,
  borderRadiusLG: 4,
  borderRadiusSM: 2,
  fontSize: 14,
  controlHeight: 32,
  controlHeightLG: 40,
  controlHeightSM: 24,
};
