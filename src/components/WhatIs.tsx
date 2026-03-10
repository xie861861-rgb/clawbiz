'use client';

import { useRef } from 'react';

export default function WhatIs() {
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      icon: '🧠',
      title: '专业咨询',
      desc: '评估企业AI现状，制定科学转型路线图，识别最佳落地场景。',
    },
    {
      icon: '⚡',
      title: '技术架构',
      desc: '设计高可用，安全、可扩展的AI Agent架构方案。',
    },
    {
      icon: '🔒',
      title: '落地实施',
      desc: '全程陪同式实施，确保AI Agent顺利上线并产生价值。',
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            关于我们
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            企业AI转型专家
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            专注于企业AI升级，提供从咨询到落地的全流程服务
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-gray-800/50 rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
