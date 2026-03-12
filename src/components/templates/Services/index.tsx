'use client';

import Container from '@/components/atoms/container';
import { Typograph } from '@/components/atoms/typograph';
import ServiceCard from '@/components/molecules/serviceCard';
import { SERVICES } from '@/constants/info/services';
import { SECTIONS } from '@/enums/sections.enum';
import { cn } from '@/lib/utils';
import { AnimatedElementsTypes, HandleObserver } from '@/utils/scrollAnims';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { type CarouselApi } from '@/components/ui/carousel';

export default function Services() {
  const [isVisible, setIsVisible] = useState<boolean[]>(Array(2).fill(false));
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const animatedElementsRef = useRef<(AnimatedElementsTypes | null)[]>(
    Array(2).fill(null),
  );

  HandleObserver({
    setIsVisible,
    isVisible,
    animatedElementsRef,
  });

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  return (
    <div
      id={SECTIONS.Services}
      className='flex w-full justify-center bg-technologies'
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
              : 'translate-y-0 opacity-100 md:-translate-y-10 md:opacity-0',
          )}
        >
          <Typograph.Title>Serviços Freelancer</Typograph.Title>
          <p className='max-w-2xl text-gray-400'>
            Soluções digitais sob medida para impulsionar seu negócio. Do
            planejamento à entrega, com qualidade e agilidade.
          </p>
        </div>

        {/* Grid para telas lg+ (>=1024px) */}
        <div
          ref={(el) => {
            animatedElementsRef.current[1] = el;
          }}
          className={cn(
            'hidden gap-6 transition-all duration-300 ease-in-out lg:grid lg:grid-cols-4',
            isVisible[1]
              ? 'translate-y-0 opacity-100'
              : '-translate-y-10 opacity-0',
          )}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Carrossel para telas <1024px */}
        <div className='w-full lg:hidden'>
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
            className='w-full'
          >
            <CarouselContent className='-ml-2 pt-4 md:-ml-4'>
              {SERVICES.map((service, index) => (
                <CarouselItem
                  key={service.id}
                  className='pl-2 md:basis-1/2 md:pl-4'
                >
                  <ServiceCard service={service} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Dot buttons */}
          <div className='mt-6 flex justify-center gap-2'>
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-all duration-300',
                  current === index
                    ? 'w-6 bg-primary-500'
                    : 'bg-gray-500 hover:bg-gray-400',
                )}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
