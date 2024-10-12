import "./globals.css";

import { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
  title: "영화 위키",

  description: "정보 조회",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="">
        <nav className="w-[500px] mx-auto">
          <Link href="/">홈</Link>
          <Link href="/sign-in">로그인</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
