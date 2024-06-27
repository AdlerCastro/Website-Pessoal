import { IoMenuOutline } from "react-icons/io5";
// import { IoIosClose } from "react-icons/io";
import Image from "next/image";
import Eu from 'public/images/Eu.jpg'
import "./styles.css"
import ButtonNav from "./components/ButtonNav";
import "./scripts/script"

const Header = () => {
    
    return (
        <header className="Header">
            <nav className="Nav">
                <a><Image src={Eu} alt="Foto Adler Castro" id="image"/></a>
                <ButtonNav id="ButtonNav"><IoMenuOutline /></ButtonNav>
                <ul className="Nav-list">
                    <li><a href="https://google.com" target="_blank">Sobre</a></li>
                    <li><a href="https://google.com" target="_blank">Projetos</a></li>
                    <li><a href="https://google.com" target="_blank">Contatos</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header