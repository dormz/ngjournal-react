import type { ThemeConfig } from 'antd';

import { Button } from './Button';
import { Card } from './Card';
import { Input } from './Input';
import { Select } from './Select';
import { Table } from './Table';

/**
 * Classic theme component token overrides.
 * Add or remove components here; each component has its own file in this directory.
 */
export const classicComponents: NonNullable<ThemeConfig['components']> = {
  Button,
  Input,
  Select,
  Card,
  Table,
};
