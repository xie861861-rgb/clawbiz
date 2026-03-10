'use client';

import { useState } from 'react';

export default function ConsultButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
        aria-label="付费咨询"
      >
        <span className="text-xl">💬</span>
        <span className="hidden sm:inline">付费咨询</span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
      </button>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <span className="text-3xl">🦞</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                ClawBiz 付费咨询
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                企业AI转型 · 技术架构咨询
              </p>
            </div>

            {/* Pricing */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-semibold text-gray-900">基础咨询</p>
                  <p className="text-xs text-gray-500">30分钟 · 问题解答</p>
                </div>
                <span className="text-lg font-bold text-blue-600">¥500</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-xl border-2 border-blue-200">
                <div>
                  <p className="font-semibold text-gray-900">部署协助</p>
                  <p className="text-xs text-gray-500">1小时 · 远程指导确保跑通</p>
                </div>
                <span className="text-lg font-bold text-blue-600">¥1000</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div>
                  <p className="font-semibold text-gray-900">企业定制</p>
                  <p className="text-xs text-gray-500">私有化部署 · Skills开发</p>
                </div>
                <span className="text-lg font-bold text-gray-600">私聊</span>
              </div>
            </div>

            {/* QR Code */}
            <div className="text-center">
              <img
                src="/wechat-personal-qr.jpg"
                alt="微信二维码"
                className="w-32 h-32 mx-auto rounded-xl border border-gray-200 mb-3"
              />
              <p className="text-sm text-gray-600">
                扫码添加微信，备注"ClawBiz咨询"
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-100">
              <span className="text-xs text-gray-400">💼 企业AI服务</span>
              <span className="text-xs text-gray-400">✨ 专业团队</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
