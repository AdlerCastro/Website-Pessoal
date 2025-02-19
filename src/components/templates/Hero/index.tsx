import Link from '@/components/atoms/link';
import { SECTIONS } from '@/enums/sections.enum';
import { BsArrowDown } from 'react-icons/bs';

export default function Hero() {
  return (
    <div
      id={SECTIONS.Home}
      className='flex h-screen w-full animate-bgHero flex-col items-center justify-center overflow-hidden bg-hero bg-sizeHero transition-all'
    >
      <div className='flex flex-1 flex-col items-center justify-center gap-4'>
        <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
          Bem vindo
        </h1>
        <p className='px-4 text-center text-base md:px-8'>
          Apresentarei algumas informações sobre mim a respeito do lado
          profissional e pessoal <del>ou não</del>
        </p>
      </div>
      <Link href={`#${SECTIONS.About}`} className='p-2'>
        <BsArrowDown size={20} className='mb-1 animate-bounce' />
      </Link>
      <span className='z-20 h-1 w-full animate-animationBorderNav bg-borderNav' />
    </div>
  );
}
