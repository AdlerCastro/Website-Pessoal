import { sections } from "@/constants/sections"
import Image from "next/image"
import Nuvens from 'public/images/Nuvens.jpg'
import { IoMenuOutline } from "react-icons/io5";

//Components
import ButtonNav from "./components/ButtonNav"

//Styles
import './style.css'

const Hero = () => {

  return (
    <section id={sections.hero} className="hero">
      <Image id="image" src={Nuvens} alt={"Imagem Hero"} />
      <div id="Menu">
        <header>
          <ButtonNav><IoMenuOutline /></ButtonNav>
        </header>
        <div className="LinksNav">
          <a id="links" href="https://google.com" target="_blank">Google</a>
          <a id="links" href="https://google.com" target="_blank">Google</a>
          <a id="links" href="https://google.com" target="_blank">Google</a>
          <a id="links" href="https://google.com" target="_blank">Google</a>
        </div>
      </div>
    </section>
  )
}

export default Hero