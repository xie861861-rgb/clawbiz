'use client';

import { useState } from 'react';
import ConsultButton from './ConsultButton';

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          联系我们
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          点击右下角按钮添加微信咨询
        </p>
      </div>
      <ConsultButton locale="zh" />
    </main>
  );
}
