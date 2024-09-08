import { sections } from '@/constants/sections'
import './styles.css'
import Image from 'next/image';
import NextIcon from 'public/icons/NextjsIcon.svg'
import ReactIcon from 'public/icons/ReactIcon.svg'

const Technologies = () => {
  return (
    <div id={sections.Technologies} className='bodyTechnologies'>
        <h2>Tecnologias utilizadas</h2>
        <div className='technologies'>
          <div className='descriptionTech'>
            <div className='text'>
              <h3>Next.js</h3>
              <p>Next.js é um framework baseado em React que adiciona funcionalidades avançadas, como renderização do lado do servidor &#40;SSR&#41; e geração de sites estáticos &#40;SSG&#41;, proporcionando uma melhor performance e SEO aprimorado para as aplicações.</p>
            </div>
            <Image src={NextIcon} alt='Ícone Next.js' className='Icons'/>
          </div>
          <div className='descriptionTech'>
            <div className='text'>
              <h3>React</h3>
              <p>Para o frontend, uso principalmente o framework e React.js. O React.js é uma biblioteca JavaScript popular para construir interfaces de usuário, permitindo a criação de componentes reutilizáveis e a construção de interfaces de forma declarativa.</p>
            </div>
            <Image src={ReactIcon} alt='Ícone Next.js' className='Icons reverse'/>
          </div>
        </div>
    </div>
  )
}

export default Technologies