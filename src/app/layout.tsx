import type { Metadata } from 'next';
import fonts from '@/lib/fonts';
import './globals.css';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
  title: 'Adler Castro',
  description:
    'Portfólio pessoal de Adler Castro, apresentando projetos e habilidades.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='pt-br'
      className={`${fonts.poppins.variable} ${fonts.roboto.variable} antialiased`}
    >
      <body className='bg-default text-white'>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
