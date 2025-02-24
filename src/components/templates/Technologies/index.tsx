'use client';

import { SECTIONS } from '@/enums/sections.enum';
import Image from 'next/image';
import Container from '@/components/atoms/container';
import { Typograph } from '@/components/atoms/typograph';
import { TECHNOLOGIES } from '@/constants/info/technologies';
import { cn } from '@/lib/utils';
import { useRef, useState } from 'react';
import { AnimatedElementsTypes, HandleObserver } from '@/utils/scrollAnims';

export default function Technologies() {
  const [isVisible, setIsVisible] = useState<boolean[]>(Array(8).fill(false));

  const animatedElementsRef = useRef<(AnimatedElementsTypes | null)[]>(
    Array(8).fill(null),
  );

  HandleObserver({
    setIsVisible,
    isVisible,
    animatedElementsRef,
  });

  return (
    <div
      id={SECTIONS.Technologies}
      className='flex w-full items-center justify-center bg-technologies'
    >
      <Container>
        <Typograph.Title>Principais Tecnologias utilizadas</Typograph.Title>
        {TECHNOLOGIES.map((tech, index) => (
          <div
            key={index}
            ref={(el) => {
              animatedElementsRef.current[index] = el;
            }}
            className={cn(
              'flex flex-col items-center justify-center gap-4 transition-all duration-300 ease-in-out md:flex-row',
              isVisible[index]
                ? 'translate-y-0 opacity-100'
                : '-translate-y-10 opacity-0',
            )}
          >
            <Image
              src={tech.image}
              alt={tech.title}
              width={200}
              height={200}
              className={cn(
                'h-24 w-24 flex-1 md:h-32 md:w-32',
                index % 2 === 0 && 'md:order-1',
              )}
            />
            <div className='flex flex-col justify-center'>
              <Typograph.Subtitle>{tech.title}</Typograph.Subtitle>
              <Typograph.Paragraph className='w-fit text-balance border-none bg-transparent'>
                {tech.description}
              </Typograph.Paragraph>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}
