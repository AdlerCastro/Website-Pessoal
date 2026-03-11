import Hero from '@/components/templates/Hero';
import About from '@/components/templates/About';
import Experience from '@/components/templates/Experience';
import Projects from '@/components/templates/Projects';
import Services from '@/components/templates/Services';
import Technologies from '@/components/templates/Technologies';
import Contact from '@/components/templates/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Technologies />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}
