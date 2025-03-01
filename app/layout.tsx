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
  title: 'France Annobil | Portfolio',
  description: 'Professional portfolio showcasing my journey, skills, and expertise in web development and technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable} scroll-smooth`}>
      <body className="min-h-screen font-sans antialiased bg-white">
        <Link 
          href="/" 
          className="fixed top-8 left-8 z-50 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white/20 transition-all"
        >
          <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">
            FRANCE<span className="text-blue-600">.</span>
          </span>
        </Link>
        <MenuOverlay />
        {children}
      </body>
    </html>
  );
}
