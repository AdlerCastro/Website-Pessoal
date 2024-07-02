import Image from "next/image"
import Tormenta from 'public/icons/TormentaIcon.jpeg'
import { IoCaretForwardCircle } from "react-icons/io5";

import './styles.css'

const SlideProjects = () => {
  return (
    <div className="bodySlide">

      <div className="slider">

        <div className="slides">

          <input type="radio" name="radio-button" id="radio1" />
          <input type="radio" name="radio-button" id="radio2" />
          <input type="radio" name="radio-button" id="radio3" />

          <div className="card first">
            <div className="ImagesDiv">
              <Image src={Tormenta} alt="Imagem do Projeto Tormenta" className="Image" />
            </div>
            <div className="descriptionProject">
              <h3>Projeto Tormenta</h3>
              <p>NovaForce</p>
            </div>
            <div className="aboutProject">
              <p>O projeto em questão refere-se a competição de robôs sumô liderado pelo Escritório de Engenharia. A competição consistia em 3 grupos que tinham como objetivo a construção de um robô autônomo que iria enfrentar os outros grupos, empurrando-os para a fora da arena, a fim de vencer a competição que tinha como recompensa a possibilidade de participar de uma competição externa.
              </p>
              <p>O grupo NovaForce, o qual era integrante, desenvolveu a Tormenta que apresentava uma estrutura circular e conquistou o coração da competição com o carisma de sua equipe e o carinho dos mentores.</p>
            </div>
          </div>

          <div className="card">
            <div className="ImagesDiv">
              <Image src={Tormenta} alt="Imagem do Projeto Tormenta" className="Image" />
            </div>
            <div className="descriptionProject">
              <h3>Projeto X</h3>
              <p>NovaForce</p>
            </div>
            <div className="aboutProject">
              <p>O projeto em questão refere-se a competição de robôs sumô liderado pelo Escritório de Engenharia. A competição consistia em 3 grupos que tinham como objetivo a construção de um robô autônomo que iria enfrentar os outros grupos, empurrando-os para a fora da arena, a fim de vencer a competição que tinha como recompensa a possibilidade de participar de uma competição externa.
              </p>
              <p>O grupo NovaForce, o qual era integrante, desenvolveu a Tormenta que apresentava uma estrutura circular e conquistou o coração da competição com o carisma de sua equipe e o carinho dos mentores.</p>
            </div>
          </div>

          <div className="card">
            <div className="ImagesDiv">
              <Image src={Tormenta} alt="Imagem do Projeto Tormenta" className="Image" />
            </div>
            <div className="descriptionProject">
              <h3>Projeto Y</h3>
              <p>NovaForce</p>
            </div>
            <div className="aboutProject">
              <p>O projeto em questão refere-se a competição de robôs sumô liderado pelo Escritório de Engenharia. A competição consistia em 3 grupos que tinham como objetivo a construção de um robô autônomo que iria enfrentar os outros grupos, empurrando-os para a fora da arena, a fim de vencer a competição que tinha como recompensa a possibilidade de participar de uma competição externa.
              </p>
              <p>O grupo NovaForce, o qual era integrante, desenvolveu a Tormenta que apresentava uma estrutura circular e conquistou o coração da competição com o carisma de sua equipe e o carinho dos mentores.</p>
            </div>
          </div>

          {/* <nav className="navProjects">
            <IoCaretForwardCircle id="Backward" />
            <IoCaretForwardCircle id="Forward" />
          </nav> */}
          <div className="nav-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
          </div>
        </div>
      </div>

      <div className="nav-manual">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
        <label htmlFor="radio3" className="manual-btn"></label>
      </div>
    </div>
  )
}

export default SlideProjects