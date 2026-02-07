import React from 'react';

import { Upload, Button, Space } from 'antd';
import { UploadOutlined, InboxOutlined, PlusOutlined } from '@ant-design/icons';

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

const meta: Meta<typeof Upload> = {
  title: 'Ant Design/Data Entry/Upload',
  component: Upload,
};

export default meta;
type Story = StoryObj<typeof Upload>;

export const Default: Story = {
  args: {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    children: <Button icon={<UploadOutlined />}>Click to Upload</Button>,
  },
};

export const DragAndDrop: Story = {
  render: () => (
    <Upload.Dragger
      name="file"
      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
      multiple
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibited from uploading company data or
        other banned files.
      </p>
    </Upload.Dragger>
  ),
};

export const PictureCard: Story = {
  render: () => (
    <Upload
      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
      listType="picture-card"
    >
      <button style={{ border: 0, background: 'none', cursor: 'pointer' }} type="button">
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </button>
    </Upload>
  ),
};

export const PictureList: Story = {
  render: () => (
    <Upload
      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
      listType="picture"
      defaultFileList={[
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ]}
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  ),
};

export const FileList: Story = {
  render: () => (
    <Upload
      action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
      defaultFileList={[
        { uid: '1', name: 'xxx.png', status: 'done', url: '#' },
        { uid: '2', name: 'yyy.png', status: 'done', url: '#' },
        { uid: '3', name: 'zzz.png', status: 'error', url: '#' },
      ]}
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  ),
};
