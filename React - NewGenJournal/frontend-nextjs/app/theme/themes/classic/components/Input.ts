import type { ThemeConfig } from 'antd';

/** Classic theme overrides for Input component */
export const Input: NonNullable<ThemeConfig['components']>['Input'] = {
  activeBorderColor: '#1890ff',
  hoverBorderColor: '#40a9ff',
  borderRadius: 2,
  activeShadow: '0 0 0 1px rgba(24, 144, 255, 0.2)',
};
