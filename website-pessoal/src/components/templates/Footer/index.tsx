import { sections } from '@/constants/sections';
import Image from 'next/image';
import SocialMediaButton from '@/components/atoms/SocialMediaButton';
import NextLink from 'next/link';

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
          <SocialMediaButton className='SocialMediaButtons' href='https://www.instagram.com/adler_castro/' target='_blank'><Image className='icons' src={InstagramIcon} alt='Instagram' /></SocialMediaButton>

          <SocialMediaButton className='SocialMediaButtons' href='https://www.linkedin.com/in/adler-augustus-de-castro-mota/' target='_blank'><Image className='icons' src={LinkedInIcon} alt='LinkedIn' /></SocialMediaButton>

          <SocialMediaButton id='whatsapp' target='_blank'><MdWhatsapp /></SocialMediaButton>
          
          <NextLink href='/Forms' className='SocialMediaButtons'><Image className='icons' src={EmailIcon} alt='Email' /></NextLink>
        </div>
      </div>
      <p style={style}>Desenvolvido por Adler Castro</p>
    </section>
  )
}

export default Footer