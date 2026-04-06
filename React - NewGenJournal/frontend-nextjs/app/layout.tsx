import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

import { AntdRegistry } from '@ant-design/nextjs-registry';

import { ThemeProvider } from './theme';

import StoreProvider from './StoreProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NewGenJournal',
  description: 'NewGenJournal – Multi-tenant themed application',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // In a real multi-tenant app, resolve the tenant's theme key here from the
  // request (e.g. subdomain, cookie, or database lookup) and pass it down:
  //   const tenantThemeKey = await resolveTenantTheme(request);
  //   <ThemeProvider initialThemeKey={tenantThemeKey}>

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StoreProvider>
          <AntdRegistry>
            <ThemeProvider>{children}</ThemeProvider>
          </AntdRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
