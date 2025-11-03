// src/components/sections/Contact.tsx
import React from 'react';
// Mail 대신 FileText (문서/블로그) 아이콘을 import합니다.
import { FileText, Github, Linkedin } from 'lucide-react';

export default function Contact() {
    return (
        <div className="section bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="flex flex-col items-center justify-center h-screen text-white px-8">
                <div className="mb-8">
                    {/* 대표 아이콘을 FileText로 변경 */}
                    <FileText size={64} strokeWidth={1.5} />
                </div>
                <h2 className="text-5xl font-bold mb-8 text-center">연락하기</h2>
                <p className="text-xl text-center max-w-2xl mb-12 opacity-90">
                    함께 일하고 싶으시거나 궁금한 점이 있으시면 언제든 연락주세요!
                </p>

                <div className="flex flex-col gap-6 text-lg">

                    {/* 1. 블로그 (이메일 대신 추가) */}
                    <a
                        // 여기에 실제 블로그 주소를 넣어주세요.
                        href="https://your-blog.tistory.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 hover:text-purple-300 transition-colors"
                    >
                        <FileText size={24} />
                        <span>your-blog.tistory.com</span>
                    </a>

                    {/* 2. GitHub (주소 수정 예정) */}
                    <a
                        // 여기에 실제 GitHub 주소를 넣어주세요.
                        href="https://github.com/your-real-github-id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 hover:text-purple-300 transition-colors"
                    >
                        <Github size={24} />
                        <span>github.com/your-real-github-id</span>
                    </a>

                    {/* 3. LinkedIn (기존 유지) */}
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 hover:text-purple-300 transition-colors"
                    >
                        <Linkedin size={24} />
                        <span>linkedin.com/in/yourname</span>
                    </a>
                </div>
            </div>
        </div>
    );
}