import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'mandu — sooin kim',
  description: '글과 그림, 사진과 영상으로 사람과 공간, 일과 삶을 기록하는 mandu의 포트폴리오.',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ko"><body>{children}</body></html>; }
