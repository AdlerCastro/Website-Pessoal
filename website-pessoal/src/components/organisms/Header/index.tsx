'use client'

import { IoMenuOutline } from "react-icons/io5";

// Imports;
import { scrollTo } from "@/services/utils/scrollTo";
import NextLink from "next/link";

// Components
import Link from "@/components/atoms/Link"

// Styles
import "./styles.css"

const Header = () => {

    return (
        <header className="header">
            <span id="borderNav"></span>
            <nav className="navHeader">
                <input type="checkbox" className='checkbox' id='checkbox' />
                <label htmlFor="checkbox" className='label-menu'>
                    <IoMenuOutline />
                </label>
                <ul className="menu">
                    <div className="menu-list">
                        <li><NextLink href="/">Home</NextLink></li>
                        <li><Link onClick={() => scrollTo("About")}>Sobre</Link></li>
                        <li><Link onClick={()=> scrollTo("Technologies")}>Tecnologias</Link></li>
                        <li><Link onClick={() => scrollTo("Projects")}>Projetos</Link></li>
                        <li><Link onClick={() => scrollTo("Contacts")}>Contatos</Link></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Header