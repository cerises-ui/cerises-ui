import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import WindiCSS from 'vite-plugin-windicss';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import path from 'path';

export default defineConfig({
  alias: {
    '@': path.resolve('src'),
    site: path.resolve('site'),
    docs: path.resolve('docs'),
  },
  // resolve: {
  //   alias: {
  //     '@': path.resolve('src'),
  //     site: path.resolve('site'),
  //     docs: path.resolve('docs'),
  //   },
  // },
  plugins: [
    mdx({ jsxImportSource: 'solid-jsx', remarkPlugins: [remarkGfm] }),
    solidPlugin(),
    WindiCSS({
      scan: {
        fileExtensions: ['html', 'js', 'ts', 'jsx', 'tsx'],
      },
    }),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
    setupFiles: './setupVitest.ts',
    // solid needs to be inline to work around
    // a resolution issue in vitest:
    deps: {
      inline: [/solid-js/],
    },
    // if you have few tests, try commenting one
    // or both out to improve performance:
    threads: false,
    isolate: false,
  },
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
});
