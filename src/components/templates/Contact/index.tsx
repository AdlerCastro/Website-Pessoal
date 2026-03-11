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
            'flex flex-col items-center justify-center gap-6 transition-all duration-300 ease-in-out',
            isVisible[0]
              ? 'translate-y-0 opacity-100'
              : '-translate-y-10 opacity-0',
          )}
          ref={(el) => {
            animatedElementsRef.current[0] = el;
          }}
        >
          {/* Badge de disponibilidade */}
          <div className='flex items-center gap-2 text-sm text-green-400'>
            <span className='h-2 w-2 animate-pulse rounded-full bg-green-400' />
            Disponível para novos projetos
          </div>

          <Typograph.Title>Entre em Contato</Typograph.Title>
          <Typograph.Paragraph>
            Pronto para trocar ideias ou iniciar um projeto? Fique à vontade
            para entrar em contato!
          </Typograph.Paragraph>

          {/* Link direto para WhatsApp */}
          <a
            href='https://wa.me/5591989604352?text=Olá Adler, vim pelo seu portfólio e gostaria de conversar sobre um projeto.'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700'
          >
            💬 Chamar no WhatsApp
          </a>
        </div>
        <FormContact />
      </Container>
    </div>
  );
}
