import React from 'react';

import { Carousel } from 'antd';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Carousel> = {
  title: 'Ant Design/Data Display/Carousel',
  component: Carousel,
  argTypes: {
    autoplay: { control: 'boolean' },
    dots: { control: 'boolean' },
    dotPosition: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    effect: { control: 'select', options: ['scrollx', 'fade'] },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const contentStyle: React.CSSProperties = {
  height: 160,
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
  margin: 0,
};

export const Default: Story = {
  render: () => (
    <Carousel style={{ width: 500 }}>
      <div><h3 style={contentStyle}>1</h3></div>
      <div><h3 style={contentStyle}>2</h3></div>
      <div><h3 style={contentStyle}>3</h3></div>
      <div><h3 style={contentStyle}>4</h3></div>
    </Carousel>
  ),
};

export const Autoplay: Story = {
  render: () => (
    <Carousel autoplay style={{ width: 500 }}>
      <div><h3 style={contentStyle}>1</h3></div>
      <div><h3 style={contentStyle}>2</h3></div>
      <div><h3 style={contentStyle}>3</h3></div>
      <div><h3 style={contentStyle}>4</h3></div>
    </Carousel>
  ),
};

export const FadeEffect: Story = {
  render: () => (
    <Carousel effect="fade" style={{ width: 500 }}>
      <div><h3 style={contentStyle}>1</h3></div>
      <div><h3 style={contentStyle}>2</h3></div>
      <div><h3 style={contentStyle}>3</h3></div>
      <div><h3 style={contentStyle}>4</h3></div>
    </Carousel>
  ),
};

export const VerticalDots: Story = {
  render: () => (
    <Carousel dotPosition="left" style={{ width: 500 }}>
      <div><h3 style={contentStyle}>1</h3></div>
      <div><h3 style={contentStyle}>2</h3></div>
      <div><h3 style={contentStyle}>3</h3></div>
      <div><h3 style={contentStyle}>4</h3></div>
    </Carousel>
  ),
};
