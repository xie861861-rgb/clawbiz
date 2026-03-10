'use client';

const resources = [
  {
    icon: '📖',
    title: '官方文档',
    desc: '完整的API参考和使用指南',
    link: 'https://docs.openclaw.ai',
  },
  {
    icon: '💬',
    title: 'Discord社区',
    desc: '与开发者和用户交流',
    link: 'https://discord.com/invite/clawd',
  },
  {
    icon: '🛒',
    title: '技能市场',
    desc: '发现、安装和分享AI技能',
    link: 'https://clawhub.com',
  },
  {
    icon: '📦',
    title: 'GitHub',
    desc: '源代码和社区贡献',
    link: 'https://github.com/openclaw/openclaw',
  },
];

export default function ResourcesSection() {
  return (
    <section id="resources" className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            学习资源
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            丰富的学习资源，帮助您快速掌握AI Agent开发
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((r, i) => (
            <a
              key={i}
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{r.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {r.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {r.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
