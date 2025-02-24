import Header from '@/components/molecules/header';
import Footer from '@/components/templates/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='relative min-h-screen w-full font-Poppins'>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
