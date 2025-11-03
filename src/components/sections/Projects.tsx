// src/components/sections/Projects.tsx
import React from 'react';
import { Briefcase } from 'lucide-react';

export default function Projects() {
    return (
        <div className="section bg-gradient-to-br from-violet-600 via-fuchsia-500 to-pink-500">
            <div className="flex flex-col items-center justify-center h-screen text-white px-8">
                <div className="mb-8">
                    <Briefcase size={64} strokeWidth={1.5} />
                </div>
                <h2 className="text-5xl font-bold mb-12 text-center">주요 프로젝트</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105">
                        <h3 className="text-2xl font-bold mb-4">전자상거래 플랫폼</h3>
                        <p className="text-sm mb-4 opacity-90">
                            React와 Node.js를 활용한 실시간 쇼핑몰 구축. 결제 시스템 통합 및 관리자 대시보드 개발
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-white/20 px-3 py-1 rounded-full text-xs">React</span>
                            <span className="bg-white/20 px-3 py-1 rounded-full text-xs">Node.js</span>
                            <span className="bg-white/20 px-3 py-1 rounded-full text-xs">MongoDB</span>
                        </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105">
                        <h3 className="text-2xl font-bold mb-4">소셜 미디어 앱</h3>
                        <p className="text-sm mb-4 opacity-90">
                            실시간 채팅과 피드 기능을 제공하는 SNS 플랫폼. WebSocket을 활용한 실시간 통신 구현
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-white/20 px-3 py-1 rounded-full text-xs">Next.js</span>
                            <span className="bg-white/20 px-3 py-1 rounded-full text-xs">WebSocket</span>
                            <span className="bg-white/20 px-3 py-1 rounded-full text-xs">PostgreSQL</span>
                        </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all hover:scale-105">
                        <h3 className="text-2xl font-bold mb-4">AI 기반 추천 시스템</h3>
                        <p className="text-sm mb-4 opacity-90">
                            머신러닝을 활용한 개인화 콘텐츠 추천 엔진. Python과 TensorFlow로 모델 구축
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <span className="bg-white/20 px-3 py-1 rounded-full text-xs">Python</span>
                            <span className="bg-white/20 px-3 py-1 rounded-full text-xs">TensorFlow</span>
                            <span className="bg-white/20 px-3 py-1 rounded-full text-xs">Flask</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}