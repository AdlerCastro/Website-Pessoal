import { SECTIONS } from "@/enums/sections.enum";
import Image from "next/image";
import Eu from "public/images/Eu.jpg";

export default function About() {
  return (
    <>
      <div
        id={SECTIONS.About}
        className="w-full flex flex-col items-center justify-center bg-about text-white py-10"
      >
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-4 m-2 p-8">
            <Image
              src={Eu}
              alt="Foto de Perfil"
              className="w-[250px] h-[250px] rounded-full transition-all duration-300 ease-in-out p-5 block lg:hidden self-center"
            />
            <h2 className="text-center sm:text-start text-2xl mb-2">
              Quem é Adler Castro?
            </h2>
            <div className="flex flex-row gap-4 lg:gap-8">
              <div className="flex flex-1 flex-col gap-4">
                <p className="text-start bg-default rounded-xl p-4 border border-solid border-paragraph max-w-paragraph hover:scale-105 transition-all duration-300">
                  Cursando Engenharia de Computação no Centro Universitário do
                  Estado do Pará, graduando do 4° semestre, com experiências em
                  desenvolvimento de software front-end.
                </p>

                <p className="text-start bg-default rounded-xl p-4 border border-solid border-paragraph max-w-paragraph hover:scale-105 transition-all duration-300">
                  Designado a Diretor de comunicações públicas do Centro
                  Acadêmico de Engenharia de Computação decorrente as
                  habilidades de oratória, comunicação, dedicação, e
                  experiências de trabalho em equipe relacionadas a gestão,
                  liderança e desempenho, observadas ao longo da carreira
                  universitária.
                </p>

                <p className="text-start bg-default rounded-xl p-4 border border-solid border-paragraph max-w-paragraph hover:scale-105 transition-all duration-300">
                  Conhecimento técnico e habilidades adquiridos em experiências
                  no Escritório de Engenharia do Cesupa, grupo de pesquisa no
                  qual habilidades profissionais na área de programação,
                  eletrônica e embarcados são desenvolvidas.
                </p>

                <p className="text-start bg-default rounded-xl p-4 border border-solid border-paragraph max-w-paragraph hover:scale-105 transition-all duration-300">
                  Além disso, sou membro do Gamelab, grupo universitário de
                  estudo e pesquisa que possibilita a prática e vivência de
                  técnicas de programação na área de Desenvolvimento de Jogos
                  Digitais e soluções gamificadas.
                </p>
              </div>
              <div className="hidden lg:block relative w-[350px] ml-5 group/profile p-5">
                <div className="w-[300px] h-[300px] group-hover/profile:w-[200px] group-hover/profile:h-[200px] rounded-full absolute inset-0 mx-auto mt-5 transition-all duration-500 ease-in-out hidden lg:block z-[2]">
                  <Image
                    src={Eu}
                    alt="Foto de Perfil"
                    className="w-full h-full rounded-full group-hover/profile:border group-hover/profile:border-solid group-hover/profile:border-paragraph"
                  />
                </div>
                <div className="w-full h-0 overflow-hidden bg-zinc-800 flex justify-center items-end absolute inset-0 group-hover/profile:h-full transition-all ease-in-out duration-300 rounded-lg">
                  <p>Funciona</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col p-7 m-2 gap-4">
            <h2 className="text-start mb-2 text-xl">Principais Competências</h2>
            <ul className="grid grid-cols-2 gap-4 text-center text-sm">
              <li className="border border-solid border-paragraph rounded-md p-2 hover:scale-105 max-w-listItems transition-all duration-300">
                Em processo de formação front-end e react/react native pela
                Udemy
              </li>
              <li className="border border-solid border-paragraph rounded-md p-2 hover:scale-105 max-w-listItems transition-all duration-300">
                Conhecimento aplicado de utilizando Microsoft 365: Excel, Word,
                PowerPoint
              </li>
              <li className="border border-solid border-paragraph rounded-md p-2 hover:scale-105 max-w-listItems transition-all duration-300">
                Conhecimento aplicado em modelagem 3D no SolidWorks
              </li>
              <li className="border border-solid border-paragraph rounded-md p-2 hover:scale-105 max-w-listItems transition-all duration-300">
                Conhecimento aplicado em eletrônica e sistemas embarcados
              </li>
              <li className="border border-solid border-paragraph rounded-md p-2 hover:scale-105 max-w-listItems transition-all duration-300">
                Em processo de formação em Node.js pela Udemy
              </li>
              <li className="border border-solid border-paragraph rounded-md p-2 hover:scale-105 max-w-listItems transition-all duration-300">
                Metodologia ágil &#40;Scrum, Kanban&#41;
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
