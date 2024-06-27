'use client'

import { IoMenuOutline } from "react-icons/io5";
// import { IoIosClose } from "react-icons/io";
import Eu from 'public/images/Eu.jpg'

// Imports
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Components
import ButtonNav from "./components/ButtonNav";
// Styles
import "./styles.css"

const Header = () => {

    const[active, setActive] = useState(false);

    const toggleActive = () => {
        return(
            setActive(!active)
        )
    };

    return (
        <header className="Header">
            <nav className="Nav">
                <a className="LinkImage"><Image src={Eu} alt="Foto Adler Castro" id="image" /></a>
                <ButtonNav onClick={toggleActive} id="ButtonNav"><IoMenuOutline /></ButtonNav>
                <ul className="Nav-list">
                    <li><Link href="https://google.com" target="_blank">Sobre</Link></li>
                    <li><Link href="https://google.com" target="_blank">Projetos</Link></li>
                    <li><Link href="https://google.com" target="_blank">Contatos</Link></li>
                </ul>
            </nav>
            {active && (
                <ul className="Nav-Mobile">
                    <li><Link href="https://google.com" target="_blank">Sobre</Link></li>
                    <li><Link href="https://google.com" target="_blank">Projetos</Link></li>
                    <li><Link href="https://google.com" target="_blank">Contatos</Link></li>
                </ul>
            )}
        </header>
    )
}

export default Header