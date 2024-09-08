'use client'

import Image from "next/image"
import Tormenta from 'public/icons/TormentaIcon.jpeg'
import Porake from 'public/images/Poraké.jpg'
import { IoCaretForwardCircle } from "react-icons/io5";

import './styles.css'
import { useState } from "react";
// import './script'

const SlideProjects = () => {



  return (
    <div className="bodySlide">

      <div className="slider">

        <div className="slides">

          <input type="radio" name="radio-button" id="radio1" />
          <input type="radio" name="radio-button" id="radio2" />

          <div className="slide first">
            <div className="card">
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
          </div>

          <div className="slide">
            <div className="card">
              <div className="ImagesDiv">
                <Image src={Porake} alt="Imagem do Projeto Tormenta" className="Image" />
              </div>
              <div className="descriptionProject">
                <h3>Projeto Poraké</h3>
                <p>Poraké</p>
              </div>
              <div className="aboutProject">
                <p>O projeto Poraké surgiu como uma alternativa de lidar com as problemáticas de frequentes quedas de energia em regiões de baixa infraestrutura. A problemática que mais nos chamou atenção durante a imersão a Ilha do Combú, realizada pelo CESUPA, foram as frequentes quedas de energia elétrica na região. Tal problemática ocorre devido ao próprio ambiente apresentar fatores que afetam a fiação como, as quedas de árvores, chuvas fortes e até mesmo o terreno.</p>
                <p>Além disso, a carência de manutenção devido a dificuldade de acesso e demora para iniciar o reparo afeta os moradores em conservar adequadamente os alimentos, interromper o processo educacional das crianças nas escolas devido o calor intenso.</p>
                <p>Diante disso, o produto desenvolvido é um gerador de energia elétrica baseado na queima do caroço de açaí.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="nav-manual">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
      </div>
    </div>
  )
}

export default SlideProjects