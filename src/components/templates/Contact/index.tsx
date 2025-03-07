'use client';

import Container from '@/components/atoms/container';
import { Typograph } from '@/components/atoms/typograph';
import FormContact from '@/components/organisms/form-contact';
import { SECTIONS } from '@/enums/sections.enum';
import { cn } from '@/lib/utils';
import { AnimatedElementsTypes, HandleObserver } from '@/utils/scrollAnims';
import { useRef, useState } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState<boolean[]>(Array(1).fill(false));

  const animatedElementsRef = useRef<(AnimatedElementsTypes | null)[]>(
    Array(1).fill(null),
  );

  HandleObserver({
    setIsVisible,
    isVisible,
    animatedElementsRef,
  });
  return (
    <div
      id={SECTIONS.Contacts}
      className='flex w-full items-center justify-center bg-contact transition-all duration-300 ease-in-out'
    >
      <Container className='mb-20'>
        <div
          className={cn(
            'flex flex-col items-center justify-center gap-10 transition-all duration-300 ease-in-out',
            isVisible[0]
              ? 'translate-y-0 opacity-100'
              : '-translate-y-10 opacity-0',
          )}
          ref={(el) => {
            animatedElementsRef.current[0] = el;
          }}
        >
          <Typograph.Title>Entre em Contato</Typograph.Title>
          <Typograph.Paragraph>
            Pronto para trocar ideias ou iniciar um projeto? Fique à vontade
            para entrar em contato!
          </Typograph.Paragraph>
        </div>
        <FormContact />
      </Container>
    </div>
  );
}
