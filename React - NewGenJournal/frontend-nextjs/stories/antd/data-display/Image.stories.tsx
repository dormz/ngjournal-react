import React from 'react';

import { Image, Space } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Image> = {
  title: 'Ant Design/Data Display/Image',
  component: Image,
  argTypes: {
    preview: { control: 'boolean' },
    width: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    width: 200,
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
};

export const Fallback: Story = {
  args: {
    width: 200,
    src: 'error',
    fallback:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGVMDCBuf+pgIGBS5OBkJ4K2eGmYRBkYGBPZoL9wJKKVKmXwmjswMDJIKc0tJdcmJLKVBjCYg1KPG1pL/sxCTjEwDD8SY1EfGBoqMoYI0AEaCAQMDAYESC2TLN+QVIHr8fcHBwt3FvYU9nYGBggfT0g0IJ4NMLH8I9GBhYU/EFMDHkAPz4xdQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC41ZYUyZQAAAKdJREFUeF7t0AENAAAIAzC2f9NXoMNJIC5BAS9CAREGZ1m2GS4YETgTCAIMAIMQCAKEEyEBAYJIICAQSQQEBCKJgIBAJBEQEIgkAgICkURAQCCSCAgIRBIBAYFIIiAgEEkEBAQiiYCAQCQREBCIJAICAkH8EQYEIomAgEAkERAQiCQCAgKRREBAIJIICAgkARAECAJMICAQSAQEBAIJCAgEEmEYEQYDNMsC3Zy0v2wAAAAASUVORK5CYII=',
  },
};

export const PreviewDisabled: Story = {
  args: {
    width: 200,
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    preview: false,
  },
};

export const PreviewGroup: Story = {
  render: () => (
    <Image.PreviewGroup>
      <Space>
        <Image
          width={150}
          src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
        />
        <Image
          width={150}
          src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp"
        />
        <Image
          width={150}
          src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"
        />
      </Space>
    </Image.PreviewGroup>
  ),
};

export const Placeholder: Story = {
  args: {
    width: 200,
    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    placeholder: true,
  },
};
