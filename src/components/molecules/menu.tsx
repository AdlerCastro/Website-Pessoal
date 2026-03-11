import { SECTIONS } from '@/enums/sections.enum';
import Link from '../atoms/link';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { ArrowRight, MenuIcon } from 'lucide-react';
import { DialogTitle } from '@radix-ui/react-dialog';

export default function Menu() {
  return (
    <Sheet>
      <div className='relative w-full'>
        <SheetTrigger
          aria-label='Botão de menu'
          className='absolute right-5 top-0 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white'
        >
          <MenuIcon size={44} className='w-11' />
        </SheetTrigger>
        <SheetContent
          className='box-content h-full gap-20 rounded-s-2xl border-none bg-black px-[1.875rem] py-[3.125rem]'
          onOpenAutoFocus={(event) => event?.preventDefault()}
        >
          <DialogTitle className='hidden' />
          <div className='z-20 flex h-full flex-col gap-[2.5rem] self-start overflow-y-auto'>
            <Link
              href={`#${SECTIONS.About}`}
              className='flex items-center justify-between text-lg font-bold text-white invalid:text-white/70 hover:text-white/40 focus-visible:text-white/40 active:text-white'
            >
              Sobre mim
              <ArrowRight size={27} className='w-7' />
            </Link>
            <Link
              href={`#${SECTIONS.Experience}`}
              className='flex items-center justify-between text-lg font-bold text-white invalid:text-white/70 hover:text-white/40 focus-visible:text-white/40 active:text-white'
            >
              Experiência
              <ArrowRight size={27} className='w-7' />
            </Link>
            <Link
              href={`#${SECTIONS.Projects}`}
              className='flex items-center justify-between text-lg font-bold text-white invalid:text-white/70 hover:text-white/40 focus-visible:text-white/40 active:text-white'
            >
              Projetos
              <ArrowRight size={27} className='w-7' />
            </Link>
            <Link
              href={`#${SECTIONS.Services}`}
              className='flex items-center justify-between text-lg font-bold text-white invalid:text-white/70 hover:text-white/40 focus-visible:text-white/40 active:text-white'
            >
              Serviços
              <ArrowRight size={27} className='w-7' />
            </Link>
            <Link
              href={`#${SECTIONS.Technologies}`}
              className='flex items-center justify-between text-lg font-bold text-white invalid:text-white/70 hover:text-white/40 focus-visible:text-white/40 active:text-white'
            >
              Tecnologias
              <ArrowRight size={27} className='w-7' />
            </Link>
            <Link
              href={`#${SECTIONS.Contacts}`}
              className='flex items-center justify-between text-lg font-bold text-white invalid:text-white/70 hover:text-white/40 focus-visible:text-white/40 active:text-white'
            >
              Contato
              <ArrowRight size={27} className='w-7' />
            </Link>
            <a
              href='/cv-adler-castro.pdf'
              download
              className='flex items-center justify-between rounded-lg border border-primary-500 px-4 py-3 text-lg font-bold text-primary-400 transition-colors hover:bg-primary-500/10'
            >
              ↓ Currículo
              <ArrowRight size={27} className='w-7' />
            </a>
          </div>
        </SheetContent>
      </div>
    </Sheet>
  );
}
