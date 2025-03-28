'use client';

import Container from '@/components/atoms/container';
import { Typograph } from '@/components/atoms/typograph';
import CardParallax from '@/components/molecules/cardParallax';
import { ABOUT } from '@/constants/info/about';
import { SECTIONS } from '@/enums/sections.enum';
import { useDivideArray } from '@/hooks/use-divide-array.hook';
import { cn } from '@/lib/utils';
import { AnimatedElementsTypes, HandleObserver } from '@/utils/scrollAnims';
import Eu from 'public/images/Eu.jpg';
import { useRef, useState } from 'react';

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

  const { firstHalf, secondHalf } = useDivideArray({
    array: ABOUT.competences,
  });

  return (
    <div
      id={SECTIONS.About}
      className='flex w-full items-center justify-center bg-about'
    >
      <Container>
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
          {/* <Image
            src={Eu}
            alt='Foto de Perfil'
            className='block h-[250px] w-[250px] self-center rounded-full p-5 transition-all duration-300 ease-in-out lg:hidden'
          /> */}
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
              {/* <div className='absolute inset-0 z-[2] mx-auto mt-5 hidden h-[300px] w-[300px] rounded-full transition-all duration-500 ease-in-out group-hover/profile:h-[200px] group-hover/profile:w-[200px] lg:block'>
                <Image
                  src={Eu}
                  alt='Foto de Perfil'
                  className='h-full w-full rounded-full group-hover/profile:border group-hover/profile:border-solid group-hover/profile:border-paragraph'
                />
              </div> */}
              {/* <div className='absolute inset-0 flex h-0 w-full items-end justify-center overflow-hidden rounded-lg bg-zinc-800 transition-all duration-300 ease-in-out group-hover/profile:h-full'>
                <p>Funciona</p>
              </div> */}
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
          <h2 className='mb-2 text-start text-xl'>Principais Competências</h2>
          <div className='grid grid-cols-2 gap-4 text-center text-sm'>
            <div className='flex flex-col items-center gap-4'>
              {firstHalf.map((competence, index) => (
                <Typograph.Paragraph
                  asChild
                  key={index}
                  className='max-w-[30rem] rounded-md border border-solid border-paragraph p-2 transition-all duration-300 hover:scale-105'
                >
                  <p>{competence}</p>
                </Typograph.Paragraph>
              ))}
            </div>
            <div className='flex flex-col items-center gap-4'>
              {secondHalf.map((competence, index) => (
                <Typograph.Paragraph
                  asChild
                  key={index}
                  className='max-w-[30rem] rounded-md border border-solid border-paragraph p-2 transition-all duration-300 hover:scale-105'
                >
                  <p>{competence}</p>
                </Typograph.Paragraph>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
