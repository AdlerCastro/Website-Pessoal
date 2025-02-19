import Header from '@/components/molecules/header';
import Footer from '@/components/templates/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className='font-Poppins relative min-h-screen w-full'>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
