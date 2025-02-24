import Hero from '@/components/templates/Hero';
import About from '@/components/templates/About';
import Projects from '@/components/templates/Projects';
import Technologies from '@/components/templates/Technologies';
import Contact from '@/components/templates/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </>
  );
}
