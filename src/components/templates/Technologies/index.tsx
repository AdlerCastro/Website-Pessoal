'use client';

import { SECTIONS } from '@/enums/sections.enum';
import Container from '@/components/atoms/container';
import { Typograph } from '@/components/atoms/typograph';
import { TECH_CATEGORIES } from '@/constants/info/technologies';
import { cn } from '@/lib/utils';
import { useRef, useState } from 'react';
import { AnimatedElementsTypes, HandleObserver } from '@/utils/scrollAnims';
import { motion } from 'framer-motion';

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Avançado':
      return 'bg-green-500';
    case 'Intermediário':
      return 'bg-yellow-500';
    case 'Básico':
      return 'bg-gray-500';
    default:
      return 'bg-gray-500';
  }
};

export default function Technologies() {
  const [isVisible, setIsVisible] = useState<boolean[]>(
    Array(TECH_CATEGORIES.length + 1).fill(false),
  );

  const animatedElementsRef = useRef<(AnimatedElementsTypes | null)[]>(
    Array(TECH_CATEGORIES.length + 1).fill(null),
  );

  HandleObserver({
    setIsVisible,
    isVisible,
    animatedElementsRef,
  });

  return (
    <div
      id={SECTIONS.Technologies}
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
          <Typograph.Title>Stack Tecnológica</Typograph.Title>
          <p className='max-w-2xl text-gray-400'>
            Tecnologias que domino e utilizo para entregar soluções de alta
            qualidade
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {TECH_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className='border-primary-500/20 rounded-xl border bg-white/5 p-6 backdrop-blur-sm'
            >
              {/* Header da categoria */}
              <div className='mb-4 flex items-center gap-3'>
                <span className='text-2xl'>{category.icon}</span>
                <h3 className='text-lg font-semibold text-white'>
                  {category.category}
                </h3>
              </div>

              {/* Tecnologias */}
              <div className='flex flex-wrap gap-2'>
                {category.techs.map((tech, idx) => (
                  <span
                    key={idx}
                    className='bg-primary-500/10 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm text-gray-300'
                  >
                    <span
                      className={cn(
                        'h-2 w-2 rounded-full',
                        getLevelColor(tech.level),
                      )}
                    />
                    {tech.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legenda de níveis */}
        <div className='mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400'>
          <div className='flex items-center gap-2'>
            <span className='h-3 w-3 rounded-full bg-green-500' />
            Avançado
          </div>
          <div className='flex items-center gap-2'>
            <span className='h-3 w-3 rounded-full bg-yellow-500' />
            Intermediário
          </div>
          <div className='flex items-center gap-2'>
            <span className='h-3 w-3 rounded-full bg-gray-500' />
            Básico
          </div>
        </div>
      </Container>
    </div>
  );
}
