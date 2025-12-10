import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "준비사항 가이드 | 경기 기후 바이브코딩 해커톤",
  description: "GitHub, Vercel 가입부터 Claude Code CLI 설치까지 해커톤 참가에 필요한 준비사항을 단계별로 안내합니다.",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "준비사항 가이드",
    description: "GitHub, Vercel 가입부터 Claude Code CLI 설치까지 해커톤 참가에 필요한 준비사항을 단계별로 안내합니다.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "경기 기후 바이브코딩 해커톤 준비사항 가이드",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "준비사항 가이드",
    description: "GitHub, Vercel 가입부터 Claude Code CLI 설치까지 해커톤 참가에 필요한 준비사항을 단계별로 안내합니다.",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S0HQEB8LKD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S0HQEB8LKD');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
