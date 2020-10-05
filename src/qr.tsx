import React, { FunctionComponent, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import './qr.css';

interface QRProps {
  url: string;
  size?: number;
  logo?: string;
  logoSize?: number;
}

const QR: FunctionComponent<QRProps> = props => {
  const { url, size = 300, logo, logoSize } = props;
  const canvas = useRef(null);
  useEffect(() => {
    if (canvas.current) {
      QRCode.toCanvas(canvas.current, url, {
        margin: 0,
        width: size,
      });
    }
  }, [url, size]);

  const ls = `${logoSize || Math.round(size * 0.2)}px`;

  return (
    <div className="qr">
      <canvas ref={canvas} width={size} height={size} />
      {logo && (
        <div
          className="logo-container"
          style={{
            height: ls,
            width: ls,
          }}
        >
          <img className="logo" src={logo} />
        </div>
      )}
    </div>
  );
};

export default QR;
