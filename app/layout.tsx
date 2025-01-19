import { Outfit, Inter } from 'next/font/google';
import { MenuOverlay } from '@/components/ui/menu-overlay';
import Link from 'next/link';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Portfolio',
  description: 'My professional portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white font-inter">
        <Link 
          href="/" 
          className="fixed top-8 left-8 z-50 mix-blend-difference"
        >
          <span className="font-outfit text-lg tracking-wider text-white">
            PORTFOLIO
          </span>
        </Link>
        <MenuOverlay />
        {children}
      </body>
    </html>
  );
}
