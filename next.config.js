/** @type {import('next').NextConfig} */
const nextConfig = {
  // 核心：强制静态导出，禁用 standalone 模式
  output: 'export',
  // 指定静态导出目录
  distDir: '.next',
  // 兼容 Cloudflare Pages 的静态资源处理
  images: {
    unoptimized: true
  },
  // 关闭 telemetry
  telemetry: false,
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

module.exports = nextConfig;
