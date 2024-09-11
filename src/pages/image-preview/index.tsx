import React, { useState } from 'react';
import { Image, Button, Space } from 'antd';
import {
  FullscreenOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
} from '@ant-design/icons';

const ImagePreview: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [scale, setScale] = useState(1);

  const handleZoomIn = () => {
    setScale((prevScale) => prevScale + 0.1);
  };

  const handleZoomOut = () => {
    setScale((prevScale) => Math.max(0.1, prevScale - 0.1));
  };

  return (
    <div>
      <Space direction="vertical" size="middle">
        <Space>
          <Button icon={<ZoomInOutlined />} onClick={handleZoomIn}>
            放大
          </Button>
          <Button icon={<ZoomOutOutlined />} onClick={handleZoomOut}>
            缩小
          </Button>
          <Button
            icon={<FullscreenOutlined />}
            onClick={() => setVisible(true)}
          >
            全屏
          </Button>
        </Space>
        <div
          style={{
            width: 400,
            height: 400,
            overflow: 'auto',
            border: '1px solid #d9d9d9',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            preview={{
              visible,
              onVisibleChange: setVisible,
              scaleStep: 0.1,
              minScale: 0.1,
              maxScale: 5,
            }}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            style={{
              transform: `scale(${scale})`,
              transition: 'transform 0.3s',
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
            }}
          />
        </div>
      </Space>
    </div>
  );
};

export default ImagePreview;
