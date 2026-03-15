import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/next';
import fonts from '@/lib/fonts';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';
import ContactButton from '@/components/atoms/contact-button';
import { env } from '@/config/env.config';

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
        <ContactButton
          variant='icon'
          size='icon'
          href='https://wa.me/5591989604352?text=Olá Adler, vim pelo seu portfólio e gostaria de conversar sobre um projeto.'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Chamar no WhatsApp'
          className='fixed bottom-8 right-6 z-50 size-16 lg:right-8'
        />
        <Toaster />
        <SpeedInsights />
        <GoogleAnalytics gaId={env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        <Analytics />
      </body>
    </html>
  );
}
