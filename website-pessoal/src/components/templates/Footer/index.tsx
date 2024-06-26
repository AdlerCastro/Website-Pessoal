import { sections } from '@/constants/sections';
import './style.css';

const Footer = () => {
    const style = {
        fontSize: "small",
    }

  return (
    <section id={sections.footer} className='footer'>
        <p>Teste</p>
        <p style={style}>Desenvolvido por Adler Castro</p>
    </section>
  )
}

export default Footer