import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claude Code 설치 가이드 | 경기 기후 바이브코딩 해커톤",
  description: "Windows와 macOS에서 Claude Code CLI를 설치하는 방법을 안내합니다.",
  icons: {
    icon: "/gg-bi-logo.png",
    apple: "/gg-bi-logo.png",
  },
  openGraph: {
    title: "Claude Code 설치 가이드 | 경기 기후 바이브코딩 해커톤",
    description: "Windows와 macOS에서 Claude Code CLI를 설치하는 방법을 안내합니다.",
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
    title: "Claude Code 설치 가이드 | 경기 기후 바이브코딩 해커톤",
    description: "Windows와 macOS에서 Claude Code CLI를 설치하는 방법을 안내합니다.",
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
