'use client';

import { PROJECTS } from '@/constants/info/projects';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import Image from 'next/image';
import { Typograph } from '../atoms/typograph';
import Autoplay from 'embla-carousel-autoplay';
import { useRef, useState } from 'react';
import { AnimatedElementsTypes, HandleObserver } from '@/utils/scrollAnims';
import { cn } from '@/lib/utils';

export default function CarouselProjects() {
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
    <Carousel
      orientation='horizontal'
      className='h-fit w-full'
      plugins={[Autoplay({ delay: 6000 })]}
    >
      <CarouselContent
        ref={(ref) => {
          animatedElementsRef.current[0] = ref;
        }}
        className={cn(
          'mb-20 flex w-full items-start transition-all duration-300 ease-in-out',
          isVisible[0]
            ? 'translate-y-0 opacity-100'
            : '-translate-y-10 opacity-0',
        )}
      >
        {PROJECTS.map((project, index) => (
          <CarouselItem
            key={index}
            className='flex w-full items-start justify-center'
          >
            <div className='flex max-h-[32rem] w-fit flex-col items-center justify-start gap-5 overflow-auto rounded-xl bg-zinc-800/60 px-8 py-10'>
              <div className='flex w-40 animate-bgImageProject items-center justify-center rounded-full bg-image-project bg-sizeHero p-[0.125rem] transition-all'>
                <Image
                  src={project.image}
                  alt={project.title}
                  className='h-full w-full rounded-full'
                />
              </div>
              <div>
                <Typograph.Subtitle className='text-center'>
                  {project.title}
                </Typograph.Subtitle>
                <Typograph.Paragraph className='border-none bg-transparent text-center'>
                  {project.subtitle}
                </Typograph.Paragraph>

                <div className='flex flex-col gap-3'>
                  {project.description.map((description, index) => (
                    <Typograph.Paragraph
                      key={index}
                      className='max-w-[30rem] border-none bg-transparent py-0 text-start'
                    >
                      {description}
                    </Typograph.Paragraph>
                  ))}
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='bg-white/60 text-black hover:bg-white/80 active:bg-white' />
      <CarouselNext className='bg-white/60 text-black hover:bg-white/80 active:bg-white' />
    </Carousel>
  );
}
