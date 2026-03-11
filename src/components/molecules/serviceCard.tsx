'use client';

import { motion } from 'framer-motion';
import Link from '@/components/atoms/link';
import { SECTIONS } from '@/enums/sections.enum';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    icon: string;
    description: string;
    deliverables: string[];
    price: string;
    highlight: boolean;
  };
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`relative flex flex-col rounded-xl border p-6 transition-all duration-300 hover:scale-105 ${
        service.highlight
          ? 'border-primary-500 bg-primary-500/10'
          : 'border-primary-500/20 bg-white/5'
      }`}
    >
      {/* Badge de destaque */}
      {service.highlight && (
        <span className='bg-primary-500 absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-medium text-white'>
          Mais popular
        </span>
      )}

      {/* Ícone */}
      <span className='mb-4 text-4xl'>{service.icon}</span>

      {/* Título */}
      <h3 className='mb-2 text-xl font-semibold text-white'>{service.title}</h3>

      {/* Descrição */}
      <p className='mb-4 text-sm text-gray-400'>{service.description}</p>

      {/* Entregas */}
      <ul className='mb-6 flex-1 space-y-2'>
        {service.deliverables.map((item, idx) => (
          <li
            key={idx}
            className='flex items-start gap-2 text-sm text-gray-300'
          >
            <span className='text-primary-400 mt-1'>✓</span>
            {item}
          </li>
        ))}
      </ul>

      {/* Preço */}
      <p className='text-primary-400 mb-4 text-lg font-semibold'>
        {service.price}
      </p>

      {/* CTA */}
      <Link
        href={`#${SECTIONS.Contacts}`}
        className='bg-primary-600 hover:bg-primary-700 w-full rounded-lg py-3 text-center font-medium text-white transition-colors'
      >
        Solicitar orçamento
      </Link>
    </motion.div>
  );
}
