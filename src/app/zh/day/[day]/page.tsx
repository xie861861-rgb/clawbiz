import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'ClawBiz - 企业AI转型专家',
  description: '企业AI转型咨询服务',
};

export default function DayPage() {
  redirect('/');
}
