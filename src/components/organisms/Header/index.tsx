"use client";

// Imports;
import { scrollTo } from "@/services/utils/scrollTo";

import { sections } from "@/constants/sections";

// Components
import ButtonNav from "./components/ButtonNav";

// Styles

import { useState } from "react";

export default function Header() {
  const [checked, setChecked] = useState(false);

  return (
    <header className="sticky lg:-mt-1 bg-[#0c0c0c] w-full overflow-hidden z-20">
      <span className="absolute z-20 w-full h-1 bg-borderNav animate-animationBorderNav" />
      <nav className="flex justify-center items-center">
        <ButtonNav
          className="lg:hidden right-1 top-2 z-20 text-center p-4 gap-1 items-center flex flex-col fixed"
          onClick={() => setChecked(!checked)}
        >
          <span
            className={`w-6 h-1 bg-white transition-all duration-100 ${checked ? "rotate-45 -mb-1" : "rotate-0"}`}
          />
          <span
            className={`w-6 h-1 bg-white transition-all duration-100 ease-in-out ${checked ? "hidden" : "block"}`}
          />
          <span
            className={`w-6 h-1 bg-white transition-all duration-100 ${checked ? "-rotate-45 -mt-1" : "rotate-0"}`}
          />
        </ButtonNav>
        <ul
          className={`transition-all duration-300 flex flex-col fixed top-0 right-0 justify-around px-5 bg-[#0c0c0c] rounded-s-lg text-center overflow-hidden h-full max-w-[210px] lg:max-w-full lg:w-full lg:mr-0 lg:rounded-none lg:sticky ${checked ? "w-full mr-0" : "-mr-10 w-0"}`}
        >
          <div className="w-full h-full flex flex-col justify-items-center list-none lg:flex-row justify-around">
            <li className="text-lg">
              <ButtonNav onClick={() => scrollTo(sections.Hero)}>
                Home
              </ButtonNav>
            </li>
            <li className="text-lg">
              <ButtonNav onClick={() => scrollTo(sections.About)}>
                Sobre
              </ButtonNav>
            </li>
            <li className="text-lg">
              <ButtonNav onClick={() => scrollTo(sections.Technologies)}>
                Tecnologias
              </ButtonNav>
            </li>
            <li className="text-lg">
              <ButtonNav onClick={() => scrollTo(sections.Projects)}>
                Projetos
              </ButtonNav>
            </li>
            <li className="text-lg">
              <ButtonNav onClick={() => scrollTo(sections.Contacts)}>
                Contatos
              </ButtonNav>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
