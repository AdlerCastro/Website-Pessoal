import { sections } from "@/constants/sections"
import './style.css'

const Hero = () => {
    const style = {
        fontSize: 'small',
    };

  return (
    <section id={sections.hero} className="footer">
        <p>Teste</p>
        <p style={style}>Desenvolvido por Adler Castro</p>
    </section>
  )
}

export default Hero