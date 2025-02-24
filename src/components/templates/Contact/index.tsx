import Container from '@/components/atoms/container';
import FormContact from '@/components/organisms/form-contact';
import { SECTIONS } from '@/enums/sections.enum';

export default function Contact() {
  return (
    <div
      id={SECTIONS.Contacts}
      className='flex w-full items-center justify-center bg-contact'
    >
      <Container>
        <FormContact />
      </Container>
    </div>
  );
}
