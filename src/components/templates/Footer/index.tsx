import Image from 'next/image';
import Link from '@/components/atoms/link';
import { SECTIONS } from '@/enums/sections.enum';
import Container from '@/components/atoms/container';
import { Typograph } from '@/components/atoms/typograph';
import { SOCIAL_MEDIA } from '@/constants/social-media.constant';
import GithubIcon from 'public/icons/GithubIcon.svg';

export default function Footer() {
  return (
    <footer className='relative flex w-full animate-bgHero items-center justify-center overflow-hidden bg-hero bg-sizeHero'>
      <span className='absolute top-0 z-20 h-1 w-full animate-animationBorderNav bg-borderNav' />
      <Container>
        <div className='flex w-full flex-col items-center justify-center gap-10 md:flex-row md:justify-between'>
          <div className='flex max-w-[30rem] flex-col items-center gap-10'>
            <Typograph.Subtitle className='text-balance'>
              Acompanhe-me no Github para conhecer mais projetos desenvolvidos
            </Typograph.Subtitle>
            <Link
              className='rounded-full p-2 transition-all duration-100 hover:scale-125 focus-visible:scale-125 focus-visible:outline focus-visible:outline-1 focus-visible:outline-white'
              href='https://github.com/AdlerCastro'
              target='_blank'
            >
              <Image className='h-10 w-10' src={GithubIcon} alt='Github' />
            </Link>
          </div>
          <div className='flex flex-col items-center justify-center gap-10'>
            <Typograph.Paragraph className='w-fit text-nowrap border-none bg-transparent'>
              Entre em contato por:
            </Typograph.Paragraph>
            <div className='flex items-center justify-center gap-4'>
              {SOCIAL_MEDIA.map((media, index) => (
                <Link
                  href={media.link}
                  key={index}
                  className='rounded-full p-2 transition-all duration-100 hover:scale-125 focus-visible:scale-125 focus-visible:outline focus-visible:outline-1 focus-visible:outline-white'
                >
                  <Image
                    src={media.image}
                    alt={media.alt}
                    className='h-7 w-7'
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Typograph.Paragraph className='w-fit text-balance border-none bg-transparent text-xs'>
          Desenvolvido por Adler Castro
        </Typograph.Paragraph>
      </Container>
    </footer>
  );
}
