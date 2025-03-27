'use client';

import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import Tilt from 'react-parallax-tilt';

export interface CardParallaxProps {
  image: string | StaticImageData;
  alt: string;
  className?: string;
}

export default function CardParallax({
  image,
  alt,
  className,
}: CardParallaxProps) {
  return (
    <Tilt
      perspective={1000}
      tiltMaxAngleX={20}
      tiltMaxAngleY={20}
      glareEnable={true}
      glareMaxOpacity={0.5}
      glareColor='#ffffff'
      glarePosition='all'
      glareReverse={true}
      glareBorderRadius='100%'
      className={cn(
        'rounded-full shadow-lg shadow-black/30 transition-all',
        className,
      )}
    >
      <Image
        src={image}
        alt={alt}
        quality={100}
        loading='eager'
        className='h-full w-full rounded-full object-cover'
      />
    </Tilt>
  );
}
