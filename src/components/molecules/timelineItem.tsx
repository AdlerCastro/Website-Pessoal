'use client';

import { motion } from 'framer-motion';

interface TimelineItemProps {
  experience: {
    id: number;
    role: string;
    company: string;
    location: string;
    period: string;
    type: string;
    description: string;
    highlights: string[];
    stack: string[];
  };
  index: number;
}

export default function TimelineItem({ experience, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
      className='relative pl-8 md:pl-16'
    >
      {/* Dot na timeline */}
      <div className='border-primary-500 absolute left-0 top-2 hidden h-4 w-4 rounded-full border-4 bg-gray-900 md:left-6 md:block' />

      {/* Card */}
      <div className='border-primary-500/20 hover:border-primary-500/50 rounded-xl border bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/10'>
        {/* Header */}
        <div className='mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between'>
          <div>
            <h3 className='text-xl font-semibold text-white'>
              {experience.role}
            </h3>
            <p className='text-primary-400'>{experience.company}</p>
          </div>
          <div className='text-right'>
            <p className='text-sm text-gray-400'>{experience.period}</p>
            <p className='text-xs text-gray-500'>{experience.location}</p>
          </div>
        </div>

        {/* Description */}
        <p className='mb-4 text-gray-400'>{experience.description}</p>

        {/* Highlights */}
        <ul className='mb-4 space-y-2'>
          {experience.highlights.map((highlight, idx) => (
            <li
              key={idx}
              className='flex items-start gap-2 text-sm text-gray-300'
            >
              <span className='bg-primary-500 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full' />
              {highlight}
            </li>
          ))}
        </ul>

        {/* Stack badges */}
        <div className='flex flex-wrap gap-2'>
          {experience.stack.map((tech, idx) => (
            <span
              key={idx}
              className='bg-primary-500/20 text-primary-300 rounded-full px-3 py-1 text-xs font-medium'
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
