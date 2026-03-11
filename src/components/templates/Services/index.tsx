'use client';

import Container from '@/components/atoms/container';
import { Typograph } from '@/components/atoms/typograph';
import ServiceCard from '@/components/molecules/serviceCard';
import { SERVICES } from '@/constants/info/services';
import { SECTIONS } from '@/enums/sections.enum';
import { cn } from '@/lib/utils';
import { AnimatedElementsTypes, HandleObserver } from '@/utils/scrollAnims';
import { useRef, useState } from 'react';

export default function Services() {
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
      id={SECTIONS.Services}
      className='flex w-full items-center justify-center bg-technologies py-20'
    >
      <Container className='lg:mt-10'>
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
          <Typograph.Title>Serviços Freelancer</Typograph.Title>
          <p className='max-w-2xl text-gray-400'>
            Soluções digitais sob medida para impulsionar seu negócio. Do
            planejamento à entrega, com qualidade e agilidade.
          </p>
        </div>

        <div
          ref={(el) => {
            animatedElementsRef.current[1] = el;
          }}
          className={cn(
            'grid gap-6 transition-all duration-300 ease-in-out sm:grid-cols-2 lg:grid-cols-4',
            isVisible[1]
              ? 'translate-y-0 opacity-100'
              : '-translate-y-10 opacity-0',
          )}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className='mt-12 text-center'>
          <a
            href='https://wa.me/5591989604352?text=Olá Adler, vim pelo seu portfólio e gostaria de conversar sobre um projeto.'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700'
          >
            💬 Chamar no WhatsApp
          </a>
        </div>
      </Container>
    </div>
  );
}
