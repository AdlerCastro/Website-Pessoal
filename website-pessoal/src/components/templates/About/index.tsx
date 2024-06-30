import { sections } from "@/constants/sections";
import Image from "next/image";
import Eu from "public/images/Eu.jpg"
import "./styles.css";

const About = () => {
  return (
    <>
      <section id={sections.About} className="about">
        <div className="description">
          <h1>Quem é Adler Castro?</h1>
          <p>Cursando Engenharia de Computação no Centro Universitário do Estado do Pará, graduando do 3° semestre, com experiências em desenvolvimento de software front-end. Designado a Diretor de comunicações públicas do Centro Acadêmico de Engenharia de Computação decorrente as habilidades de oratória, comunicação, dedicação, e experiências de trabalho em equipe relacionadas a gestão, liderança e desempenho, observadas ao longo da carreira universitária.</p>

          <p>Conhecimento técnico e habilidades adquiridos em experiências no Escritório de Engenharia do Cesupa, grupo de pesquisa no qual habilidades profissionais na área de programação, eletrônica e embarcados são desenvolvidas.</p>
          <p>Além disso, sou membro do Gamelab, grupo universitário de estudo e pesquisa que possibilita a prática e vivência de técnicas de programação na área de Desenvolvimento de Jogos Digitais e soluções gamificadas.</p>
        </div>
        <Image src={Eu} alt="Foto de Perfil" className="image" />
      </section>
    </>
  )
}

export default About