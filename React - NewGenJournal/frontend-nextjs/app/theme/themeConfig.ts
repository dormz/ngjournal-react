import type { ThemeConfig } from 'antd';
import { theme } from 'antd';

// ---------------------------------------------------------------------------
// Tenant theme definition
// ---------------------------------------------------------------------------

export interface TenantTheme {
  /** Unique key used for persistence and lookup */
  key: string;
  /** Human-readable label shown in the theme switcher */
  label: string;
  /** Ant Design ThemeConfig passed directly to ConfigProvider */
  antdTheme: ThemeConfig;
}

// ---------------------------------------------------------------------------
// Shared defaults – keeps individual tenant configs DRY
// ---------------------------------------------------------------------------

const sharedToken: ThemeConfig['token'] = {
  fontFamily:
    "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  borderRadius: 8,
};

// ---------------------------------------------------------------------------
// Tenant themes
// ---------------------------------------------------------------------------

export const tenantThemes: Record<string, TenantTheme> = {
  default: {
    key: 'default',
    label: 'Default (Blue)',
    antdTheme: {
      token: {
        ...sharedToken,
        colorPrimary: '#1677ff',
      },
    },
  },

  ocean: {
    key: 'ocean',
    label: 'Ocean (Teal)',
    antdTheme: {
      token: {
        ...sharedToken,
        colorPrimary: '#0d9488',
        colorInfo: '#0891b2',
        colorSuccess: '#16a34a',
      },
    },
  },

  sunset: {
    key: 'sunset',
    label: 'Sunset (Orange)',
    antdTheme: {
      token: {
        ...sharedToken,
        colorPrimary: '#ea580c',
        colorInfo: '#d97706',
        colorSuccess: '#65a30d',
        colorWarning: '#ca8a04',
      },
    },
  },

  royal: {
    key: 'royal',
    label: 'Royal (Purple)',
    antdTheme: {
      token: {
        ...sharedToken,
        colorPrimary: '#7c3aed',
        colorInfo: '#6366f1',
        colorSuccess: '#059669',
      },
    },
  },

  rose: {
    key: 'rose',
    label: 'Rose (Pink)',
    antdTheme: {
      token: {
        ...sharedToken,
        colorPrimary: '#e11d48',
        colorInfo: '#db2777',
        colorSuccess: '#0d9488',
      },
    },
  },

  midnight: {
    key: 'midnight',
    label: 'Midnight (Dark)',
    antdTheme: {
      algorithm: theme.darkAlgorithm,
      token: {
        ...sharedToken,
        colorPrimary: '#6366f1',
        colorBgBase: '#0f172a',
        colorInfo: '#818cf8',
      },
    },
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Ordered list for rendering in a picker / dropdown */
export const tenantThemeList: TenantTheme[] = Object.values(tenantThemes);

/** Safe lookup – falls back to the default theme */
export function getTenantTheme(key: string | null | undefined): TenantTheme {
  if (key && key in tenantThemes) {
    return tenantThemes[key];
  }
  return tenantThemes.default;
}

/** The key to use in localStorage */
export const THEME_STORAGE_KEY = 'ngjournal-tenant-theme';

/** Default theme key */
export const DEFAULT_THEME_KEY = 'default';
