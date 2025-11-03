// src/components/sections/About.tsx
import React from 'react';
import { Code } from 'lucide-react';

export default function About() {
    return (
        <div className="section bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-400">
            <div className="flex flex-col items-center justify-center h-screen text-white px-8">
                <div className="mb-8">
                    <Code size={64} strokeWidth={1.5} />
                </div>
                <h2 className="text-5xl font-bold mb-12 text-center">기술 스택</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-110">
                        <h3 className="text-2xl font-bold mb-2">Frontend</h3>
                        <p className="text-sm opacity-90">React, Next.js</p>
                        <p className="text-sm opacity-90">TypeScript</p>
                        <p className="text-sm opacity-90">HTML, EC6</p>
                        <p className="text-sm opacity-90">Tailwind CSS</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-110">
                        <h3 className="text-2xl font-bold mb-2">Backend</h3>
                        <p className="text-sm opacity-90">Spring Boot</p>
                        <p className="text-sm opacity-90">Node.js</p>
                        <p className="text-sm opacity-90">Python</p>
                        <p className="text-sm opacity-90">Java</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-110">
                        <h3 className="text-2xl font-bold mb-2">Database</h3>
                        <p className="text-sm opacity-90">MongoDB</p>
                        <p className="text-sm opacity-90">PostgreSQL</p>
                        <p className="text-sm opacity-90">Kafka</p>
                        <p className="text-sm opacity-90">Redis</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all hover:scale-110">
                        <h3 className="text-2xl font-bold mb-2">DevOps</h3>
                        <p className="text-sm opacity-90">K8S</p>
                        <p className="text-sm opacity-90">Docker</p>
                        <p className="text-sm opacity-90">Jenkins</p>
                        <p className="text-sm opacity-90">ArgoCD</p>
                    </div>
                </div>
            </div>
        </div>
    );
}