import { sections } from '@/constants/sections';
import Image from 'next/image';
import Link from '@/components/atoms/Link';

import GithubIcon from 'public/icons/GithubIcon.svg'
import EmailIcon from 'public/icons/EmailIcon.svg'
import InstagramIcon from 'public/icons/InstagramIcon.svg'
import LinkedInIcon from 'public/icons/LinkedInIcon.svg'
import { MdWhatsapp } from "react-icons/md";

import './style.css';

const Footer = () => {
  const style = {
    fontSize: "medium",
  }

  return (
    <section id={sections.Footer} className='footer'>
      <div className='Contatos'>
        <h1>Contacts</h1>
        <div className='SocialMedia'>
          <Link href='https://www.instagram.com/adler_castro/' target='_blank'><Image src={InstagramIcon} alt='Instagram' /></Link>
          <Link href='https://www.linkedin.com/in/adler-augustus-de-castro-mota/' target='_blank'><Image src={LinkedInIcon} alt='LinkedIn' /></Link>
          <Link id='whatsapp' target='_blank'><MdWhatsapp /></Link>
          <Link target='_blank'><Image src={EmailIcon} alt='Email' /></Link>
        </div>
      </div>
      <p style={style}>Desenvolvido por Adler Castro</p>
    </section>
  )
}

export default Footer