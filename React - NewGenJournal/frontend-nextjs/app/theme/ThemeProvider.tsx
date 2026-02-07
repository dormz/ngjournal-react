'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { ConfigProvider } from 'antd';

import {
  DEFAULT_THEME_KEY,
  getTenantTheme,
  THEME_STORAGE_KEY,
  type TenantTheme,
} from './themeConfig';

// ---------------------------------------------------------------------------
// Context shape
// ---------------------------------------------------------------------------

interface ThemeContextValue {
  /** Currently active tenant theme */
  currentTheme: TenantTheme;
  /** Switch to a different tenant theme by key */
  setThemeKey: (key: string) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

interface ThemeProviderProps {
  /**
   * Optional initial theme key.
   * In a real multi-tenant app you would resolve this from the request
   * (e.g. subdomain, cookie, or API) and pass it here from a Server Component.
   * Falls back to localStorage, then to the default theme.
   */
  initialThemeKey?: string;
  children: React.ReactNode;
}

export function ThemeProvider({ initialThemeKey, children }: ThemeProviderProps) {
  // -----------------------------------------------------------------------
  // State – resolve initial value synchronously to avoid a flash
  // -----------------------------------------------------------------------
  const [themeKey, setThemeKeyState] = useState<string>(() => {
    // Priority: prop > localStorage > default
    if (initialThemeKey) return initialThemeKey;

    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored) return stored;
    }

    return DEFAULT_THEME_KEY;
  });

  const currentTheme = useMemo(() => getTenantTheme(themeKey), [themeKey]);

  // -----------------------------------------------------------------------
  // Persist selection
  // -----------------------------------------------------------------------
  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, themeKey);
  }, [themeKey]);

  // -----------------------------------------------------------------------
  // Setter exposed via context
  // -----------------------------------------------------------------------
  const setThemeKey = useCallback((key: string) => {
    setThemeKeyState(key);
  }, []);

  // -----------------------------------------------------------------------
  // Context value (stable reference)
  // -----------------------------------------------------------------------
  const contextValue = useMemo<ThemeContextValue>(
    () => ({ currentTheme, setThemeKey }),
    [currentTheme, setThemeKey],
  );

  // -----------------------------------------------------------------------
  // Render – ConfigProvider receives the Ant Design theme config
  // -----------------------------------------------------------------------
  return (
    <ThemeContext.Provider value={contextValue}>
      <ConfigProvider theme={currentTheme.antdTheme ?? {}}>
        {children}
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

/**
 * Access the current tenant theme and the setter from any client component.
 *
 * @example
 * ```tsx
 * const { currentTheme, setThemeKey } = useTheme();
 * ```
 */
export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a <ThemeProvider>');
  }
  return ctx;
}
