'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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
      return 'bg-yellow-500';
    default:
      return 'bg-gray-500';
  }
};

export default function CarouselProjects() {
  return (
    <Carousel
      orientation='horizontal'
      className='w-full'
      plugins={[Autoplay({ delay: 5000 })]}
    >
      <CarouselContent className={cn('mb-20 flex w-full items-start')}>
        {PROJECTS.map((project, index) => (
          <CarouselItem
            key={index}
            className='flex w-full items-start justify-center'
          >
            <div className='border-primary-500/20 flex max-h-[40rem] w-full max-w-2xl flex-col items-center justify-start gap-5 overflow-auto rounded-xl border bg-zinc-800/60 px-8 py-10'>
              {/* Header com badges */}
              <div className='flex w-full flex-wrap items-center justify-center gap-2'>
                <span className='bg-primary-500/20 text-primary-300 rounded-full px-3 py-1 text-xs font-medium'>
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

                {/* Highlights */}
                {project.highlights && (
                  <ul className='mt-4 space-y-2'>
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className='flex items-start gap-2 text-sm text-gray-300'
                      >
                        <span className='text-primary-400 mt-1'>✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Stack */}
                <div className='mt-6 flex flex-wrap justify-center gap-2'>
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className='bg-primary-500/20 text-primary-300 rounded-full px-3 py-1 text-xs font-medium'
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
                      className='border-primary-500 text-primary-400 hover:bg-primary-500/10 flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors'
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
                      className='bg-primary-600 hover:bg-primary-700 flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors'
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
      <CarouselPrevious className='bg-white/60 text-black hover:bg-white/80 active:bg-white' />
      <CarouselNext className='bg-white/60 text-black hover:bg-white/80 active:bg-white' />
    </Carousel>
  );
}
