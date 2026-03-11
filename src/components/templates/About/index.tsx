'use client';

import Container from '@/components/atoms/container';
import { Typograph } from '@/components/atoms/typograph';
import CardParallax from '@/components/molecules/cardParallax';
import { ABOUT } from '@/constants/info/about';
import { SECTIONS } from '@/enums/sections.enum';
import { cn } from '@/lib/utils';
import { AnimatedElementsTypes, HandleObserver } from '@/utils/scrollAnims';
import Eu from 'public/images/Eu.jpg';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const [isVisible, setIsVisible] = useState<boolean[]>(Array(5).fill(false));

  const animatedElementsRef = useRef<(AnimatedElementsTypes | null)[]>(
    Array(5).fill(null),
  );

  HandleObserver({
    setIsVisible,
    isVisible,
    animatedElementsRef,
  });

  return (
    <div id={SECTIONS.About} className='flex w-full justify-center bg-about'>
      <Container>
        {/* Stats Section */}
        <div
          ref={(el) => {
            animatedElementsRef.current[4] = el;
          }}
          className={cn(
            'mb-12 grid grid-cols-2 gap-4 transition-all duration-300 ease-in-out md:grid-cols-4',
            isVisible[4]
              ? 'translate-y-0 opacity-100'
              : '-translate-y-10 opacity-0',
          )}
        >
          {ABOUT.stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className='flex flex-col items-center rounded-lg bg-white/5 p-4 text-center backdrop-blur-sm'
            >
              <span className='text-3xl font-bold text-primary-400 md:text-4xl'>
                {stat.value}
              </span>
              <span className='text-balance text-sm text-gray-400'>
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        <div
          ref={(el) => {
            animatedElementsRef.current[0] = el;
          }}
          className={cn(
            'flex w-full flex-col gap-4 transition-all duration-300 ease-in-out',
            isVisible[0]
              ? 'translate-y-0 opacity-100'
              : '-translate-y-10 opacity-0',
          )}
        >
          <CardParallax
            image={Eu}
            alt='Foto de Perfil'
            className='size-[250px] self-center lg:hidden'
          />
          <Typograph.Title className='text-center sm:text-start'>
            Quem é Adler Castro?
          </Typograph.Title>
          <div className='flex flex-row gap-4 lg:gap-8'>
            <div
              ref={(el) => {
                animatedElementsRef.current[1] = el;
              }}
              className={cn(
                'flex flex-1 flex-col gap-4 transition-all duration-300 ease-in-out',
                isVisible[1]
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-10 opacity-0',
              )}
            >
              {ABOUT.content.map((about, index) => (
                <Typograph.Paragraph key={index} className='hover:scale-105'>
                  {about}
                </Typograph.Paragraph>
              ))}
            </div>
            <div
              ref={(el) => {
                animatedElementsRef.current[2] = el;
              }}
              className={cn(
                'group/profile relative ml-5 hidden w-[350px] p-5 transition-all duration-300 ease-in-out lg:block',
                isVisible[2]
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-10 opacity-0',
              )}
            >
              <CardParallax
                image={Eu}
                alt='Foto de Perfil'
                className='hidden h-[300px] w-[300px] lg:flex'
              />
            </div>
          </div>
        </div>
        <div
          ref={(el) => {
            animatedElementsRef.current[3] = el;
          }}
          className={cn(
            'flex flex-col gap-4 transition-all duration-300 ease-in-out',
            isVisible[3]
              ? 'translate-y-0 opacity-100'
              : '-translate-y-10 opacity-0',
          )}
        >
          <h2 className='mb-2 text-start text-xl'>Soft Skills</h2>
          <div className='flex flex-wrap gap-3'>
            {ABOUT.competences.map((competence, index) => (
              <span
                key={index}
                className='rounded-lg border border-primary-500/30 bg-primary-500/10 px-4 py-2 text-sm text-white transition-all duration-300 hover:scale-105 hover:border-primary-500'
              >
                {competence}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
