import { sections } from "@/constants/sections";
import Image from "next/image";
import Eu from "public/images/Eu.jpg"
import "./styles.css";

const About = () => {
  return (
    <>
      <div id={sections.About} className="bodyAbout">
        <div className="about">
          <div className="description">
            <h2>Quem é Adler Castro?</h2>
            <p>Cursando Engenharia de Computação no Centro Universitário do Estado do Pará, graduando do 3° semestre, com experiências em desenvolvimento de software front-end. Designado a Diretor de comunicações públicas do Centro Acadêmico de Engenharia de Computação decorrente as habilidades de oratória, comunicação, dedicação, e experiências de trabalho em equipe relacionadas a gestão, liderança e desempenho, observadas ao longo da carreira universitária.</p>

            <p>Conhecimento técnico e habilidades adquiridos em experiências no Escritório de Engenharia do Cesupa, grupo de pesquisa no qual habilidades profissionais na área de programação, eletrônica e embarcados são desenvolvidas.</p>

            <p>Além disso, sou membro do Gamelab, grupo universitário de estudo e pesquisa que possibilita a prática e vivência de técnicas de programação na área de Desenvolvimento de Jogos Digitais e soluções gamificadas.</p>
          </div>
          <div className="Skills">
            <h2>Principais Competências</h2>
            <ul className="listSkills">
              <li>Em processo de formação front-end e react/react native pela Udemy</li>
              <li>Conhecimento aplicado de utilizando Microsoft 365: Excel, Word, PowerPoint</li>
              <li>Conhecimento aplicado em modelagem 3D no SolidWorks</li>
              <li>Conhecimento aplicado em eletrônica e sistemas embarcados</li>
              <li>Em processo de formação em Node.js pela Udemy</li>
              <li>Metodologia ágil &#40;Scrum, Kanban&#41;</li>
            </ul>
          </div>
        </div>
        <Image src={Eu} alt="Foto de Perfil" className="image" />
      </div>
    </>
  )
}

export default About