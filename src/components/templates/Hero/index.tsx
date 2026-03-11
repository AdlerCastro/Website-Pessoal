'use client';

import Link from '@/components/atoms/link';
import { SECTIONS } from '@/enums/sections.enum';
import { cn } from '@/lib/utils';
import { AnimatedElementsTypes, HandleObserver } from '@/utils/scrollAnims';
import { useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

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
      className='flex h-[100svh] w-full animate-bgHero flex-col items-center justify-center overflow-hidden bg-hero bg-sizeHero transition-all'
    >
      <div
        ref={(el) => {
          animatedElementsRef.current[0] = el;
        }}
        className={cn(
          'flex max-w-4xl flex-1 flex-col items-center justify-center gap-6 px-6 text-center transition-all duration-300 ease-in-out',
          isVisible[0]
            ? 'translate-y-0 opacity-100'
            : '-translate-y-10 opacity-0',
        )}
      >
        {/* Tag de disponibilidade */}
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className='border-primary-800 bg-primary-900/30 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium text-white'
        >
          <span className='h-2 w-2 animate-pulse rounded-full bg-green-400' />
          Disponível para projetos freelancer
        </motion.span>

        {/* Nome com fonte display */}
        <h1 className='font-display text-5xl font-bold text-white md:text-6xl lg:text-7xl xl:text-8xl'>
          Adler Castro
        </h1>

        {/* Título com efeito typewriter */}
        <TypeAnimation
          sequence={[
            'Full-Stack Developer',
            2000,
            'DevSecOps Engineer',
            2000,
            'Desenvolvedor Freelancer',
            2000,
          ]}
          wrapper='p'
          className='text-primary-800 text-xl font-medium md:text-2xl'
          repeat={Infinity}
        />

        {/* Stack resumida */}
        <p className='max-w-2xl text-lg text-white'>
          TypeScript · React · Next.js · Node.js · Cloud & DevOps
        </p>

        {/* CTAs */}
        <div className='flex flex-wrap justify-center gap-4'>
          <Link
            href={`#${SECTIONS.Projects}`}
            className='bg-primary-600 hover:bg-primary-700 rounded-lg px-6 py-3 font-medium text-white transition-colors'
          >
            Ver Projetos
          </Link>
          <a
            href='/cv-adler-castro.pdf'
            download
            className='hover:bg-primary-900/20 rounded-lg border border-white px-6 py-3 font-medium text-white transition-colors'
          >
            ↓ Baixar Currículo
          </a>
          <Link
            href={`#${SECTIONS.Contacts}`}
            className='rounded-lg px-6 py-3 font-medium text-white transition-colors hover:bg-white/10'
          >
            Contratar
          </Link>
        </div>
      </div>

      <span className='z-20 h-1 w-full animate-animationBorderNav bg-borderNav' />
    </div>
  );
}
