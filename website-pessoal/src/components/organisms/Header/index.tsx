'use client'

import { IoMenuOutline } from "react-icons/io5";
// import { IoIosClose } from "react-icons/io";
import Eu from 'public/images/Eu.jpg'

// Imports;
import Image from "next/image";
import { scrollTo } from "@/services/utils/scrollTo";
// import { useState } from "react";

// Components
import Link from "@/components/atoms/Link"
// import ButtonNav from "./components/ButtonNav";

// Styles
import "./styles.css"

const Header = () => {

    // const [active, setActive] = useState(false);

    // const toggleActive = () => {
    //     return (
    //         setActive(!active)
    //     )
    // };

    return (
        <header className="header">
            <nav className="nav">
                <a className="LinkImage"><Image src={Eu} alt="Foto Adler Castro" id="image"/></a>
                <input type="checkbox" className='checkbox' id='checkbox' />
                <label htmlFor="checkbox" className='label-menu'>
                    <IoMenuOutline />
                </label>
                {/* <ButtonNav onClick={toggleActive} id="ButtonNav"><IoMenuOutline /></ButtonNav> */}
                <ul className="menu">
                    <div className="menu-list">
                        <li><Link onClick={() => scrollTo("About")}>Sobre</Link></li>
                        <li><Link onClick={() => scrollTo("Projects")}>Projetos</Link></li>
                        <li><Link onClick={() => scrollTo("Contacts")}>Contatos</Link></li>
                        <li><Link onClick={() => scrollTo("footer")}>Footer</Link></li>
                    </div>
                </ul>
            </nav>
            {/* {active && (
                <ul className="Nav-Mobile">
                    <li><Link href="https://google.com" target="_blank">Sobre</Link></li>
                    <li><Link href="https://google.com" target="_blank">Projetos</Link></li>
                    <li><Link href="https://google.com" target="_blank">Contatos</Link></li>
                </ul>
            )} */}
        </header>
    )
}

export default Header