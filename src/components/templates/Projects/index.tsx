import { SECTIONS } from '@/enums/sections.enum';
import Container from '@/components/atoms/container';
import { Typograph } from '@/components/atoms/typograph';
import CarouselProjects from '@/components/organisms/carousel-projects';

export default function Projects() {
  return (
    <div
      id={SECTIONS.Projects}
      className='flex w-full items-center justify-center bg-projects'
    >
      <Container>
        <Typograph.Title>Projetos desenvolvidos</Typograph.Title>
        <CarouselProjects />
      </Container>
    </div>
  );
}
