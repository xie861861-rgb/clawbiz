export default function Footer() {
  return (
    <footer className="hero-glow py-6 sm:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="text-xs sm:text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              © 2026 ClawBiz. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-[10px] sm:text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              <span>企业AI转型专家</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
