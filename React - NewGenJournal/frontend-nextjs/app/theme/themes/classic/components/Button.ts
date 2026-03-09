import type { ThemeConfig } from 'antd';

/** Classic theme overrides for Button component */
export const Button: NonNullable<ThemeConfig['components']>['Button'] = {
  primaryShadow: 'none',
  defaultBorderColor: '#d9d9d9',
  defaultColor: 'rgba(0, 0, 0, 0.88)',
  borderRadius: 2,
  borderRadiusLG: 4,
  borderRadiusSM: 2,
};
