// src/components/sections/Intro.tsx
import React from 'react';
import { User, ChevronDown } from 'lucide-react';

export default function Intro() {
    return (
        <div className="section bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
            <div className="flex flex-col items-center justify-center h-screen text-white px-8">
                <div className="mb-8 animate-bounce">
                    <User size={80} strokeWidth={1.5} />
                </div>
                <h1 className="text-6xl font-bold mb-4 text-center">안녕하세요</h1>
                <h2 className="text-3xl mb-6 text-center">저는 백엔드 개발자 정진욱입니다</h2>
                <p className="text-xl text-center max-w-2xl mb-8 opacity-90">
                    창의적인 문제 해결과 사용자 중심의 경험을 만드는 것을 좋아합니다.
                </p>
                <div className="animate-bounce mt-8">
                    <ChevronDown size={32} />
                </div>
            </div>
        </div>
    );
}