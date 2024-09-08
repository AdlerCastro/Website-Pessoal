import Hero from "@/components/templates/Hero";
import About from "@/components/templates/About";
import Projects from "@/components/templates/Projects";
import Technologies from "@/components/templates/Technologies";
import Header from "@/components/organisms/Header"

export default function Home() {
  return (
    <>
      <Hero/>
      <Header/>
      <About/>
      <Technologies />
      <Projects/>
    </>
  );
}
