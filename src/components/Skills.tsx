'use client';

const solutions = [
  {
    icon: '🏢',
    title: '制造业',
    color: 'from-blue-500 to-blue-600',
    desc: '智能生产调度，质量检测、供应链优化',
  },
  {
    icon: '🛒',
    title: '零售业',
    color: 'from-purple-500 to-purple-600',
    desc: '智能客服、库存管理、数据分析',
  },
  {
    icon: '🏥',
    title: '医疗健康',
    color: 'from-red-500 to-red-600',
    desc: '患者管理、辅助诊断、医疗数据分析',
  },
  {
    icon: '💰',
    title: '金融业',
    color: 'from-green-500 to-green-600',
    desc: '风险评估、智能投顾、反欺诈',
  },
];

export default function Skills() {
  return (
    <section id="solutions" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            行业解决方案
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            针对不同行业和场景的AI解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${s.color} flex items-center justify-center text-2xl mb-4`}>
                {s.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
