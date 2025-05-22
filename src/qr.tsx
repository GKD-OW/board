import React, { FunctionComponent, useEffect, useRef } from 'react';
import './qr.css';

declare global {
  interface Window {
    QRCode: any;
  }
}

interface QRProps {
  url: string;
  size?: number;
  logo?: string;
  logoSize?: number;
}

const QR: FunctionComponent<QRProps> = props => {
  const { url, size = 300, logo, logoSize } = props;
  const dom = useRef(null);
  useEffect(() => {
    if (dom.current) {
      new window.QRCode(dom.current, {
        text: url,
        width: size,
        height: size,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: window.QRCode.CorrectLevel.H,
      });
    }
  }, [url, size]);

  const ls = `${logoSize || Math.round(size * 0.2)}px`;

  return (
    <div className="qr">
      <div ref={dom} width={size} height={size} />
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
