'use client';

export default function Community() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            联系我们
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            专业团队为您提供企业AI转型咨询与服务
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 微信咨询 */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              微信咨询
            </h3>
            <img
              src="/wechat-personal-qr.jpg"
              alt="微信二维码"
              className="w-40 h-40 mx-auto rounded-xl border border-gray-200 mb-4"
            />
            <p className="text-sm text-gray-500">
              扫码添加微信，备注"ClawBiz咨询"
            </p>
          </div>

          {/* 商业合作 */}
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8">
            <div className="text-center mb-6">
              <div className="text-4xl mb-2">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900">
                商业合作
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-xl">👤</span>
                <div>
                  <p className="text-sm text-gray-500">联系人</p>
                  <p className="font-medium text-gray-900">AI跨界老谢（深圳）</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-xl">📱</span>
                <div>
                  <p className="text-sm text-gray-500">电话</p>
                  <p className="font-medium text-gray-900">13798599798</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="text-xl">📧</span>
                <div>
                  <p className="text-sm text-gray-500">邮箱</p>
                  <p className="font-medium text-gray-900">xie861861@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
