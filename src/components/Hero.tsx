'use client';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center hero-glow overflow-hidden pt-28 pb-10 sm:pt-0 sm:pb-0">
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(37, 99, 235, 0.10)' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(16, 185, 129, 0.08)', animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse" style={{ background: 'rgba(37, 99, 235, 0.05)', animationDelay: '4s' }} />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
            企业AI转型专家
          </span>
        </div>

        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 tracking-tight" style={{ color: '#fff' }}>
          🐾 Claw<span className="gradient-text">Biz</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 px-2" style={{ color: 'rgba(255,255,255,0.9)' }}>
          助力企业AI转型升级
        </p>

        {/* Secondary tagline */}
        <p className="text-xs sm:text-sm md:text-base mb-6 sm:mb-10 max-w-xl mx-auto px-3" style={{ color: 'rgba(255,255,255,0.5)' }}>
          专业咨询 · 技术架构 · 落地实施
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-500 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
            style={{ color: '#fff' }}
          >
            💬 立即咨询
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
