import { SECTIONS } from '@/enums/sections.enum';
import Image from 'next/image';

import Container from '@/components/atoms/container';
import { Typograph } from '@/components/atoms/typograph';
import { TECHNOLOGIES } from '@/constants/info/technologies';
import { cn } from '@/lib/utils';

export default function Technologies() {
  return (
    <div
      id={SECTIONS.Technologies}
      className='bg-technologies flex w-full items-center justify-center'
    >
      <Container>
        <Typograph.Title>Principais Tecnologias utilizadas</Typograph.Title>
        {TECHNOLOGIES.map((tech, index) => (
          <div
            key={index}
            className='flex flex-col items-center justify-center gap-4 md:flex-row'
          >
            <Image
              src={tech.image}
              alt={tech.title}
              width={200}
              height={200}
              className={cn(
                'h-24 w-24 flex-1 md:h-32 md:w-32',
                index % 2 === 0 && 'md:order-1',
              )}
            />
            <div className='flex flex-col justify-center'>
              <Typograph.Subtitle>{tech.title}</Typograph.Subtitle>
              <Typograph.Paragraph className='w-fit text-balance border-none bg-transparent'>
                {tech.description}
              </Typograph.Paragraph>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
}
