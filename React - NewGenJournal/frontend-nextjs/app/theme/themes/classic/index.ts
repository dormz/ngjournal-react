import type { ThemeConfig } from 'antd';

import { classicComponents } from './components';
import { classicTokens } from './tokens';

/**
 * Full Ant Design theme config for the "Classic" tenant theme.
 * Global tokens and component overrides are defined in separate files
 * under this directory (tokens.ts and components/*.ts).
 */
export const classicTheme: ThemeConfig = {
  token: classicTokens,
  components: classicComponents,
};
