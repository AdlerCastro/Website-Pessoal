'use client';

import Container from '@/components/atoms/container';
import { Typograph } from '@/components/atoms/typograph';
import TimelineItem from '@/components/molecules/timelineItem';
import { EXPERIENCES } from '@/constants/info/experience';
import { SECTIONS } from '@/enums/sections.enum';
import { cn } from '@/lib/utils';
import { AnimatedElementsTypes, HandleObserver } from '@/utils/scrollAnims';
import { useRef, useState } from 'react';

export default function Experience() {
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
      id={SECTIONS.Experience}
      className='bg-experience flex w-full justify-center'
    >
      <Container>
        <div
          ref={(el) => {
            animatedElementsRef.current[0] = el;
          }}
          className={cn(
            'mb-12 flex flex-col items-center gap-4 text-center transition-all duration-300 ease-in-out',
            isVisible[0]
              ? 'translate-y-0 opacity-100'
              : '-translate-y-10 opacity-0',
          )}
        >
          <Typograph.Title>Experiência Profissional</Typograph.Title>
          <p className='text-gray-400'>
            2 anos desenvolvendo sistemas reais em produção
          </p>
        </div>

        <div
          ref={(el) => {
            animatedElementsRef.current[1] = el;
          }}
          className={cn(
            'relative transition-all duration-300 ease-in-out',
            isVisible[1]
              ? 'translate-y-0 opacity-100'
              : '-translate-y-10 opacity-0',
          )}
        >
          {/* Linha vertical da timeline */}
          <div className='bg-primary-500/30 absolute bottom-0 left-8 top-0 hidden w-px md:block' />

          <div className='space-y-8'>
            {EXPERIENCES.map((exp, index) => (
              <TimelineItem key={exp.id} experience={exp} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
