import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import fonts from '@/lib/fonts';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-adler.vercel.app'),
  title: 'Adler Castro — Full-Stack Developer & DevSecOps',
  description:
    'Full-Stack Developer especializado em TypeScript, React, Next.js e Node.js. 2 anos de experiência em sistemas críticos. Disponível para projetos freelancer em Belém, PA.',
  keywords: [
    'desenvolvedor full-stack',
    'freelancer desenvolvedor',
    'React developer',
    'Next.js developer',
    'TypeScript',
    'Node.js',
    'Belém Pará',
    'DevSecOps',
  ],
  authors: [{ name: 'Adler Castro' }],
  openGraph: {
    title: 'Adler Castro — Full-Stack Developer',
    description:
      'Desenvolvedor Full-Stack com 2 anos de experiência. React · Next.js · Node.js · TypeScript.',
    url: 'https://portfolio-adler.vercel.app',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Adler Castro — Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adler Castro — Full-Stack Developer',
    description: 'React · Next.js · Node.js · TypeScript · DevSecOps',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='pt-BR'
      className={`${fonts.inter.variable} ${fonts.montserrat.variable} antialiased`}
    >
      <body className='bg-default font-sans text-white'>
        {children}
        <Toaster />
        <SpeedInsights />
      </body>
    </html>
  );
}
