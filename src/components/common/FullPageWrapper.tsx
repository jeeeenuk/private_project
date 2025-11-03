// src/components/common/FullPageWrapper.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import Intro from '@/components/sections/Intro';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

// fullpage.js API의 최소 타입 정의
interface FullpageApi {
    destroy: (type: string) => void;
    moveTo: (section: number, slide?: number) => void;
    moveSectionUp: () => void;
    moveSectionDown: () => void;
}

export default function FullPageWrapper() {
    const fullpageRef = useRef<FullpageApi | null>(null);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        const initializeFullpage = async () => {
            try {
                // @ts-expect-error - fullpage.js has no TypeScript definitions
                const { default: FullpageConstructor } = await import('fullpage.js');

                if (fullpageRef.current) return;

                fullpageRef.current = new FullpageConstructor('#fullpage', {
                    licenseKey: 'YOUR_KEY_HERE',
                    navigation: true,
                    navigationPosition: 'right',
                    navigationTooltips: ['소개', '기술 스택', '프로젝트', '연락처'],
                    showActiveTooltip: true,
                    scrollingSpeed: 700,
                    autoScrolling: true,
                    fitToSection: true,
                    scrollBar: false,
                    css3: true,
                    anchors: ['intro', 'skills', 'projects', 'contact', 'footer'],
                    normalScrollElements: '.footer',
                }) as FullpageApi;
            } catch (error) {
                console.error('Failed to initialize fullpage.js:', error);
            }
        };

        void initializeFullpage();

        return () => {
            if (fullpageRef.current) {
                fullpageRef.current.destroy('all');
                fullpageRef.current = null;
            }
        };
    }, []);

    return (
        <div id="fullpage">
            <Intro />
            <About />
            <Projects />
            <Contact />

            <div className="section footer fp-auto-height bg-slate-950">
                <div className="flex flex-col items-center justify-center py-12 text-white px-8">
                    <p className="text-sm opacity-70 mb-2">© 2025 정진욱. All rights reserved.</p>
                    <p className="text-xs opacity-50">Built with Next.js and fullPage.js</p>
                </div>
            </div>
        </div>
    );
}