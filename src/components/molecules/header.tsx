'use client';

import { SECTIONS } from '@/enums/sections.enum';
import Link from '../atoms/link';
import Menu from './menu';
import { cn } from '@/lib/utils';
import useScroll from '@/hooks/useScroll.hook';
import { useRef, useState } from 'react';
import { AnimatedElementsTypes, HandleObserver } from '@/utils/scrollAnims';

export default function Header() {
  const { triggered } = useScroll({ trigger: 200 });

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
    <header
      className={cn(
        'sticky top-10 z-50 flex w-full items-start justify-center transition-all duration-300 ease-in-out',
        triggered ? 'shadow-header' : 'bg-transparent',
      )}
    >
      <div
        ref={(el) => {
          animatedElementsRef.current[0] = el;
        }}
        className={cn(
          'flex w-full items-center justify-between transition-all duration-300 ease-in-out lg:hidden',
          isVisible[0]
            ? 'translate-y-0 opacity-100'
            : '-translate-y-10 opacity-0',
        )}
      >
        <Menu />
      </div>

      <nav
        ref={(el) => {
          animatedElementsRef.current[1] = el;
        }}
        className={cn(
          'absolute hidden w-fit items-center justify-center gap-12 rounded-full bg-black/90 px-9 py-5 transition-all duration-500 ease-in-out lg:flex',
          triggered ? 'shadow-header' : 'bg-transparent',
          isVisible[1]
            ? 'shadow-header translate-y-0 opacity-100 lg:flex'
            : '-translate-y-10 opacity-0',
        )}
      >
        <Link href={`#${SECTIONS.Home}`} className='text-white'>
          Início
        </Link>
        <Link href={`#${SECTIONS.About}`} className='text-white'>
          Sobre
        </Link>
        <Link href={`#${SECTIONS.Technologies}`} className='text-white'>
          Tecnologias
        </Link>
        <Link href={`#${SECTIONS.Projects}`} className='text-white'>
          Projetos
        </Link>
        <Link href={`#${SECTIONS.Contacts}`} className='text-white'>
          Contatos
        </Link>
      </nav>
    </header>
  );
}
