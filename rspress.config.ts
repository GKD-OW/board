import * as path from "node:path";
import { defineConfig } from "rspress/config";
import { pluginClientRedirects } from "@rspress/plugin-client-redirects";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  title: "熔火工坊",
  icon: "https://img.alicdn.com/tfs/TB1RCBLoz39YK4jSZPcXXXrUFXa-853-954.png",
  logo: {
    light: "https://img.alicdn.com/tfs/TB1RCBLoz39YK4jSZPcXXXrUFXa-853-954.png",
    dark: "https://img.alicdn.com/tfs/TB1RCBLoz39YK4jSZPcXXXrUFXa-853-954.png",
  },
  ssg: true,
  themeConfig: {
    socialLinks: [
      {
        icon: "qq",
        mode: "link",
        content: "https://jq.qq.com/?_wv=1027&k=5J2QSeu",
      },
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/GKD-OW/board",
      },
    ],
  },
  builderConfig: {
    html: {
      tags: [
        {
          tag: 'script',
          head: true,
          append: false,
          attrs: {
            src: 'https://g.alicdn.com/code/lib/qrcodejs/1.0.0/qrcode.min.js',
          },
        },
        {
          tag: 'script',
          head: true,
          append: false,
          attrs: {
            src: 'https://g.alicdn.com/code/lib/??react/18.3.1/umd/react.production.min.js,react-dom/18.3.1/umd/react-dom.production.min.js',
          },
        },
      ]
    },
    tools: {
      
      bundlerChain(chain, { target }) {
        if (target === 'web') {
          // chain.optimization.runtimeChunk(false);
          chain.externals({
            react: 'window.React',
            'react-dom': 'window.ReactDOM',
          });
        }
      }
    }
  },
  plugins: [
    pluginClientRedirects({
      redirects: [
        {
          from: "^\/$",
          to: "/about",
        },
        {
          from: "/index.html",
          to: "/about",
        },
        {
          from: "^$",
          to: "/about",
        },
      ],
    }),
  ],
});
