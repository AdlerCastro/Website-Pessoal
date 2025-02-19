import type { Metadata } from 'next';
import './globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
});

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
    <html lang='pt-br' className={`${poppins.className} antialiased`}>
      <body className='bg-default text-white'>{children}</body>
    </html>
  );
}
