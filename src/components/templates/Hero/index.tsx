'use client';

import Link from '@/components/atoms/link';
import { Typograph } from '@/components/atoms/typograph';
import { SECTIONS } from '@/enums/sections.enum';
import { cn } from '@/lib/utils';
import { AnimatedElementsTypes, HandleObserver } from '@/utils/scrollAnims';
import { useRef, useState } from 'react';
import { BsArrowDown } from 'react-icons/bs';

export default function Hero() {
  const [isVisible, setIsVisible] = useState<boolean[]>(Array(2).fill(false));

  const animatedElementsRef = useRef<(AnimatedElementsTypes | null)[]>(
    Array(2).fill(null),
  );

  HandleObserver({
    setIsVisible,
    isVisible,
    animatedElementsRef,
  });

  return (
    <div
      id={SECTIONS.Home}
      className='flex h-screen w-full animate-bgHero flex-col items-center justify-center overflow-hidden bg-hero bg-sizeHero transition-all'
    >
      <div
        ref={(el) => {
          animatedElementsRef.current[0] = el;
        }}
        className={cn(
          'flex flex-1 flex-col items-center justify-center gap-4 transition-all duration-300 ease-in-out',
          isVisible[0]
            ? 'translate-y-0 opacity-100'
            : '-translate-y-10 opacity-0',
        )}
      >
        <Typograph.TitleHero className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
          Bem vindo
        </Typograph.TitleHero>
        <Typograph.Paragraph className='text-balance border-none bg-transparent p-0 text-center'>
          Apresentarei algumas informações sobre mim a respeito do lado
          profissional e pessoal <del>ou não</del>
        </Typograph.Paragraph>
      </div>
      <Link
        aria-label='Botão para descer a página'
        href={`#${SECTIONS.About}`}
        className='p-2'
      >
        <BsArrowDown size={20} className='mb-1 animate-bounce' />
      </Link>
      <span className='z-20 h-1 w-full animate-animationBorderNav bg-borderNav' />
    </div>
  );
}
