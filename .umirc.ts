import { defineConfig } from 'dumi';

export default defineConfig({
  title: '公告',
  favicon: 'https://www.owmod.net/favicon.ico',
  logo: 'https://img.alicdn.com/tfs/TB1RCBLoz39YK4jSZPcXXXrUFXa-853-954.png',
  outputPath: 'docs-dist',
  externals: {
    react: 'window.React',
    'react-dom': 'window.ReactDOM',
    qrcode: 'window.QRCode',
  },
  scripts: [
    'https://g.alicdn.com/code/lib/??react/16.13.1/umd/react.production.min.js,react-dom/16.13.1/umd/react-dom.production.min.js',
    'https://gw.alipayobjects.com/os/lib/qrcode/1.4.4/build/qrcode.min.js',
  ],
});
