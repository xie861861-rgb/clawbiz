'use client';

const services = [
  {
    icon: '💼',
    title: '企业AI咨询',
    desc: '评估企业AI现状，制定转型路线图，识别最佳落地场景。',
  },
  {
    icon: '🏗️',
    title: '技术架构设计',
    desc: '设计高可用，安全、可扩展的AI Agent架构方案。',
  },
  {
    icon: '🚀',
    title: '落地实施',
    desc: '全程陪同式实施，确保AI Agent顺利上线并产生价值。',
  },
  {
    icon: '📚',
    title: '培训赋能',
    desc: '团队培训，确保企业掌握AI Agent的使用和维护能力。',
  },
  {
    icon: '🔧',
    title: '定制开发',
    desc: '根据企业需求定制Skills，拓展AI Agent能力边界。',
  },
  {
    icon: '🛡️',
    title: '安全加固',
    desc: 'AI Agent安全评估与加固，防范潜在安全风险。',
  },
];

export default function LearningPath() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            我们的服务
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            全方位助力企业AI转型，从咨询到落地一站式服务
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
