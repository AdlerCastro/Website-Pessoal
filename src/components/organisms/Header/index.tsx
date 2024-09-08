"use client";

import { IoMenuOutline } from "react-icons/io5";

// Imports;
import { scrollTo } from "@/services/utils/scrollTo";
import Link from "next/link";

// Components
import ButtonNav from "./components/ButtonNav";

// Styles
import "./styles.css";

export default function Header() {
  return (
    <header className="header">
      <span id="borderNav"></span>
      <nav className="navHeader">
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="label-menu">
          <IoMenuOutline />
        </label>
        <ul className="menu">
          <div className="menu-list">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <ButtonNav onClick={() => scrollTo("About")}>Sobre</ButtonNav>
            </li>
            <li>
              <ButtonNav onClick={() => scrollTo("Technologies")}>
                Tecnologias
              </ButtonNav>
            </li>
            <li>
              <ButtonNav onClick={() => scrollTo("Projects")}>
                Projetos
              </ButtonNav>
            </li>
            <li>
              <ButtonNav onClick={() => scrollTo("Contacts")}>
                Contatos
              </ButtonNav>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
