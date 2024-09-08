import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/templates/Footer";
import  { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Forum: Adler Castro",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
