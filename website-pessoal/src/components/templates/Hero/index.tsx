import { sections } from "@/constants/sections"

//Styles
import './style.css'


const Hero = () => {

  return (
    <section id={sections.Hero} className="hero">
      <main className="bodyHero">
        <h1>Bem vindo ao meu Website</h1>
        <p>Apresentarei algumas informações sobre mim a respeito do lado profissional e pessoal <del>ou não</del></p>
      </main>
    </section>
  )
}

export default Hero