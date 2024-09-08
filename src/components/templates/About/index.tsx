import { sections } from "@/constants/sections";
import Image from "next/image";
import Eu from "public/images/Eu.jpg";
import "./styles.css";

export default function About() {
  return (
    <>
      <div
        id={sections.About}
        className="w-full flex flex-col items-center justify-center bg-about text-white py-10"
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-4 m-2 p-8 bg-default rounded-xl">
            <h2 className="text-start text-2xl mb-2">Quem é Adler Castro?</h2>
            <div className="flex flex-col gap-4 justify-center flex-wrap">
              <p>
                Cursando Engenharia de Computação no Centro Universitário do
                Estado do Pará, graduando do 3° semestre, com experiências em
                desenvolvimento de software front-end. Designado a Diretor de
                comunicações públicas do Centro Acadêmico de Engenharia de
                Computação decorrente as habilidades de oratória, comunicação,
                dedicação, e experiências de trabalho em equipe relacionadas a
                gestão, liderança e desempenho, observadas ao longo da carreira
                universitária.
              </p>

              <p>
                Conhecimento técnico e habilidades adquiridos em experiências no
                Escritório de Engenharia do Cesupa, grupo de pesquisa no qual
                habilidades profissionais na área de programação, eletrônica e
                embarcados são desenvolvidas.
              </p>

              <p>
                Além disso, sou membro do Gamelab, grupo universitário de estudo
                e pesquisa que possibilita a prática e vivência de técnicas de
                programação na área de Desenvolvimento de Jogos Digitais e
                soluções gamificadas.
              </p>
            </div>
          </div>
          <div className="flex flex-col p-7 m-2 gap-4">
            <h2 className="text-start mb-2">Principais Competências</h2>
            <ul className="grid grid-cols-2 gap-4">
              <li>
                Em processo de formação front-end e react/react native pela
                Udemy
              </li>
              <li>
                Conhecimento aplicado de utilizando Microsoft 365: Excel, Word,
                PowerPoint
              </li>
              <li>Conhecimento aplicado em modelagem 3D no SolidWorks</li>
              <li>Conhecimento aplicado em eletrônica e sistemas embarcados</li>
              <li>Em processo de formação em Node.js pela Udemy</li>
              <li>Metodologia ágil &#40;Scrum, Kanban&#41;</li>
            </ul>
          </div>
        </div>
        <Image
          src={Eu}
          alt="Foto de Perfil"
          className="w-[300px] h-[300px] rounded-full transition-all duration-300 ease-in-out p-5 mr-5"
        />
      </div>
    </>
  );
}
