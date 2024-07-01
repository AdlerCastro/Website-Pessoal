import { sections } from "@/constants/sections"
import "./styles.css"
import Image from "next/image"
import Tormenta from 'public/icons/TormentaIcon.jpeg'
import { IoCaretForwardCircle } from "react-icons/io5";

const Projects = () => {
  return (
    <section id={sections.Projects} className="bodyProjects">
      <h1>Projetos desenvolvidos</h1>
      <div className="card">
        <div className="ImagesDiv">
          <Image src={Tormenta} alt="Imagem do Projeto Tormenta" className="Image"/>
        </div>
        <div className="descriptionProject">
          <h3>Projeto Tormenta</h3>
          <p>NovaForce</p>
        </div>
      </div>
      <nav className="navProjects">
        <IoCaretForwardCircle id="Backward"/>
        <IoCaretForwardCircle id="Forward"/>
      </nav>
    </section>
  )
}

export default Projects