"use client";

import React from "react";

export default function TestPage() {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#f5f6fa",
                fontFamily: "sans-serif",
            }}
        >
            {/* 중앙 콘텐츠 영역 */}
            <div
                style={{
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                }}
            >
                <h1 style={{ fontSize: "2rem", color: "#273c75" }}>🚀 테스트 페이지</h1>
                <p style={{ marginTop: "1rem", fontSize: "1.1rem", color: "#353b48" }}>
                    이 페이지는 next.js 빌드 후 배포 테스팅용 페이지 입니다.
                </p>
            </div>

            {/* 하단 푸터 */}
            <footer
                style={{
                    width: "100%",
                    textAlign: "center",
                    borderTop: "1px solid #dcdde1",
                    padding: "1rem 0",
                    color: "#718093",
                    fontSize: "0.9rem",
                }}
            >
                © {new Date().getFullYear()} JeenukChung. All rights reserved.
            </footer>
        </div>
    );
}
