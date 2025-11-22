import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html: {
    template: './public/index.html',
  },
  plugins: [pluginReact()],
  output: {
    assetPrefix: 'https://portfolio-sigma-liard-61.vercel.app/foliospace',
    publicPath: '/foliospace/',
  },
});