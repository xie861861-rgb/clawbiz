import { Metadata } from 'next';
import HomePage from '@/components/HomePage';

export const metadata: Metadata = {
  title: 'ClawBiz - 企业AI转型专家',
  description: '企业AI转型咨询服务，专业技术架构咨询，助力企业实现AI升级',
};

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
