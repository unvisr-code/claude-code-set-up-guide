import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pre-Academy 준비사항 가이드 | 경기 기후 바이브코딩 해커톤",
  description: "해커톤 참가 전 필요한 계정 생성과 Claude Code CLI 설치 방법을 안내합니다.",
  icons: {
    icon: "/gg-bi-logo.png",
    apple: "/gg-bi-logo.png",
  },
  openGraph: {
    title: "Pre-Academy 준비사항 가이드 | 경기 기후 바이브코딩 해커톤",
    description: "해커톤 참가 전 필요한 계정 생성과 Claude Code CLI 설치 방법을 안내합니다.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Claude Code 설치 가이드",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pre-Academy 준비사항 가이드 | 경기 기후 바이브코딩 해커톤",
    description: "해커톤 참가 전 필요한 계정 생성과 Claude Code CLI 설치 방법을 안내합니다.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
