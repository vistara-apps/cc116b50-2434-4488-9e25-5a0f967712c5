import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AgroChain Connect',
  description: 'Transparent pricing and direct markets for farmers, powered by Base.',
  keywords: ['agriculture', 'blockchain', 'farming', 'Base', 'pricing', 'supply chain'],
  authors: [{ name: 'AgroChain Connect' }],
  openGraph: {
    title: 'AgroChain Connect',
    description: 'Transparent pricing and direct markets for farmers, powered by Base.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgroChain Connect',
    description: 'Transparent pricing and direct markets for farmers, powered by Base.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
