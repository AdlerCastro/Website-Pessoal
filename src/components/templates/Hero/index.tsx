import { sections } from "@/constants/sections"

//Styles
import './style.css'


const Hero = () => {

  return (
    <div id={sections.Hero} className="hero">
      <div className="bodyHero">
        <h1>Bem vindo</h1>
        <p>Apresentarei algumas informações sobre mim a respeito do lado profissional e pessoal <del>ou não</del></p>
      </div>
    </div>
  )
}

export default Hero