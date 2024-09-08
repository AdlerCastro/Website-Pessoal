import { sections } from "@/constants/sections";
import { BsArrowDown } from "react-icons/bs";

export default function Hero() {
  return (
    <div
      id={sections.Hero}
      className="w-full h-screen flex flex-col items-center justify-center bg-hero bg-sizeHero animate-bgHero transition-all duration-100"
    >
      <div className="flex-1 flex flex-col gap-4 items-center justify-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          Bem vindo
        </h1>
        <p className="px-4 md:px-8 text-center text-base ">
          Apresentarei algumas informações sobre mim a respeito do lado
          profissional e pessoal <del>ou não</del>
        </p>
      </div>

      <BsArrowDown size={20} className="animate-bounce mb-1" />
    </div>
  );
}
