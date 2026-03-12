'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '../ui/carousel';
import { Typograph } from '../atoms/typograph';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';
import { PROJECTS } from '@/constants/info/projects';
import { ExternalLink, Github, Lock } from 'lucide-react';

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Live':
      return 'bg-green-500';
    case 'Em produção':
      return 'bg-blue-500';
    case 'Em desenvolvimento':
      return 'bg-amber-500/80 border border-amber-500/30';
    default:
      return 'bg-gray-500';
  }
};

export default function CarouselProjects() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

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
    <Carousel
      setApi={setApi}
      orientation='horizontal'
      className='w-full'
      plugins={[Autoplay({ delay: 5000 })]}
    >
      <CarouselContent className={cn('mb-8 flex w-full items-start')}>
        {PROJECTS.map((project, index) => (
          <CarouselItem
            key={index}
            className='flex w-full items-start justify-center'
          >
            <div className='flex max-h-[40rem] w-full max-w-2xl flex-col items-center justify-start gap-5 overflow-auto rounded-xl border border-primary-500/20 bg-zinc-800/60 px-8 py-10'>
              {/* Header com badges */}
              <div className='flex w-full flex-wrap items-center justify-center gap-2'>
                <span className='rounded-full bg-primary-500/20 px-3 py-1 text-xs font-medium text-primary-300'>
                  {project.category}
                </span>
                <span
                  className={cn(
                    'flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium text-white',
                    getStatusColor(project.status),
                  )}
                >
                  <span className='h-1.5 w-1.5 rounded-full bg-white' />
                  {project.status}
                </span>
                {!project.github && (
                  <span className='flex items-center gap-1 rounded-full bg-gray-600 px-3 py-1 text-xs font-medium text-gray-200'>
                    <Lock size={12} />
                    Repositório Privado
                  </span>
                )}
              </div>

              <div className='text-center'>
                <Typograph.Subtitle className='text-center'>
                  {project.title}
                </Typograph.Subtitle>

                {/* Role badge */}
                {'role' in project && project.role && (
                  <span className='mt-2 inline-block text-xs font-medium text-gray-400'>
                    {project.role}
                  </span>
                )}

                <div className='mt-4 flex flex-col gap-3'>
                  {project.description.map((description, idx) => (
                    <Typograph.Paragraph
                      key={idx}
                      className='max-w-[30rem] border-none bg-transparent py-0 text-start'
                    >
                      {description}
                    </Typograph.Paragraph>
                  ))}
                </div>

                {/* Award - Elogio Oficial */}
                {'award' in project && project.award && (
                  <div className='mt-4 rounded-lg border border-amber-500/30 bg-amber-500/5 p-3'>
                    <div className='mb-2 flex items-center gap-2'>
                      <span className='text-base text-amber-400'>🏅</span>
                      <span className='text-xs font-semibold uppercase tracking-wide text-amber-400'>
                        {project.award.type}
                      </span>
                    </div>
                    <p className='mb-1 text-xs leading-relaxed text-gray-400'>
                      <span className='font-medium text-gray-300'>
                        {project.award.issuer}
                      </span>{' '}
                      · {project.award.document}
                    </p>
                    <p className='text-xs italic leading-relaxed text-gray-500'>
                      &quot;{project.award.citation}&quot;
                    </p>
                  </div>
                )}

                {/* Highlights */}
                {project.highlights && (
                  <ul className='mt-4 space-y-2'>
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className='flex items-start gap-2 text-sm text-gray-300'
                      >
                        <span className='mt-1 text-primary-400'>✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Domains - Grid 2x2 */}
                {'domains' in project && project.domains && (
                  <div className='mt-6 grid grid-cols-2 gap-3'>
                    {project.domains.map((domain) => (
                      <div
                        key={domain.title}
                        className='rounded-lg border border-white/10 bg-white/5 p-3'
                      >
                        <p className='mb-1 text-sm font-medium text-white'>
                          {domain.icon} {domain.title}
                        </p>
                        <ul className='space-y-0.5 text-xs text-gray-400'>
                          {domain.items.map((item) => (
                            <li key={item}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Metrics */}
                {'metrics' in project && project.metrics && (
                  <div className='mt-6 flex flex-wrap justify-center gap-2'>
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className='rounded-lg border border-primary-500/20 bg-primary-500/10 px-3 py-1.5 text-center'
                      >
                        <p className='text-sm font-bold text-primary-400'>
                          {metric.value}
                        </p>
                        <p className='text-xs text-gray-500'>{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Stack */}
                <div className='mt-6 flex flex-wrap justify-center gap-2'>
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className='rounded-full bg-primary-500/20 px-3 py-1 text-xs font-medium text-primary-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className='mt-6 flex justify-center gap-4'>
                  {project.github && (
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 rounded-lg border border-primary-500 px-4 py-2 text-sm font-medium text-primary-400 transition-colors hover:bg-primary-500/10'
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-700'
                    >
                      <ExternalLink size={16} />
                      Ver ao vivo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Dot Navigation */}
      <div className='flex items-center justify-center gap-2'>
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={cn(
              'h-2.5 w-2.5 rounded-full transition-all duration-300',
              current === index
                ? 'w-8 bg-primary-500'
                : 'bg-gray-500 hover:bg-gray-400',
            )}
            aria-label={`Ir para projeto ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
}
