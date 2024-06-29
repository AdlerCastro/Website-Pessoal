import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/templates/Footer";

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
    <html lang="en">
      <body>{children}</body>
      <Footer/>
    </html>
  );
}
