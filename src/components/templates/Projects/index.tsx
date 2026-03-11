'use client';

import { SECTIONS } from '@/enums/sections.enum';
import Container from '@/components/atoms/container';
import { Typograph } from '@/components/atoms/typograph';
import CarouselProjects from '@/components/organisms/carousel-projects';
import { cn } from '@/lib/utils';
import { AnimatedElementsTypes, HandleObserver } from '@/utils/scrollAnims';
import { useState, useRef } from 'react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState<boolean[]>(Array(0).fill(false));

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
      id={SECTIONS.Projects}
      className='flex w-full justify-center bg-projects'
    >
      <Container>
        <div
          className={cn(
            'flex w-full flex-col items-center justify-center gap-6 transition-all duration-300 ease-in-out',
            isVisible[0]
              ? 'translate-y-0 opacity-100'
              : '-translate-y-10 opacity-0',
          )}
          ref={(el) => {
            animatedElementsRef.current[0] = el;
          }}
        >
          <Typograph.Title className='text-center'>
            Projetos desenvolvidos
          </Typograph.Title>

          <CarouselProjects />
        </div>
      </Container>
    </div>
  );
}
