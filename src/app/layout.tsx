/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from 'next';
import './globals.css';
import { Space_Grotesk  } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Birainy - Xidmətlərimiz',
  description: 'Müasir proqram təminatı, veb saytlar, oyunlar və data analitikası xidmətləri.',
};


const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  style: ['normal'],
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
});



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />

        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>

        </head>
      <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}