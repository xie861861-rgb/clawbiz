import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://clawbiz.cn'),
  title: {
    default: 'ClawBiz - 企业AI转型专家',
    template: '%s | ClawBiz',
  },
  description: '企业AI转型咨询服务，专业技术架构咨询，助力企业实现AI升级',
  keywords: [
    'AI转型', '企业AI', 'AI咨询', '技术架构',
    'AI Agent', 'OpenClaw', '企业服务'
  ],
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className="font-sans">{children}</body>
    </html>
  );
}
