import { sections } from '@/constants/sections';
import Image from 'next/image';
import SocialMediaButton from '@/components/atoms/SocialMediaButton';
import NextLink from 'next/link';

import EmailIcon from 'public/icons/EmailIcon.svg'
import InstagramIcon from 'public/icons/InstagramIcon.svg'
import LinkedInIcon from 'public/icons/LinkedInIcon.svg'
import GithubIcon from 'public/icons/GithubIcon.svg'

import './style.css';

const Footer = () => {
  const style = {
    fontSize: "medium",
  }

  return (
    <section id={sections.Contacts} className='footer'>
      <div className='Contatos'>
        <div className='Subscribe'>
          <h1>Acompanhe-me no Github para conhecer mais projetos desenvolvidos</h1>
          <NextLink className='GithubButton' href='https://github.com/AdlerCastro' target='_blank'><Image className='iconGithub' src={GithubIcon} alt='Github' /></NextLink>
        </div>
        <h1>Entre em contato por:</h1>
        <div className='SocialMedia'>
          <SocialMediaButton className='SocialMediaButtons' href='https://www.instagram.com/adler_castro/' target='_blank'><Image className='icons' src={InstagramIcon} alt='Instagram' /></SocialMediaButton>

          <SocialMediaButton className='SocialMediaButtons' href='https://www.linkedin.com/in/adler-augustus-de-castro-mota/' target='_blank'><Image className='icons' src={LinkedInIcon} alt='LinkedIn' /></SocialMediaButton>

          <NextLink href='/Forms' className='SocialMediaButtons'><Image className='icons' src={EmailIcon} alt='Email' /></NextLink>

        </div>
      </div>
      <p style={style}>Desenvolvido por Adler Castro</p>
    </section>
  )
}

export default Footer