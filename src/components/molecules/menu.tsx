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
          className='absolute right-5 top-0'
        >
          <MenuIcon size={44} className='w-11' />
        </SheetTrigger>
        <SheetContent
          className='box-content rounded-s-2xl border-none bg-black px-[1.875rem] py-[3.125rem]'
          onOpenAutoFocus={(event) => event?.preventDefault()}
        >
          <DialogTitle className='hidden' />{' '}
          {/* Adicionado decorrente a um erro de acessibilidade disparado na página */}
          <div className='z-20 flex flex-col gap-[3.125rem] self-start'>
            <Link
              href={`#${SECTIONS.About}`}
              className='flex items-center justify-between text-lg font-bold text-white invalid:text-white/70 hover:text-white/40 focus-visible:text-white/40 active:text-white'
            >
              Sobre mim
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
              href={`#${SECTIONS.Projects}`}
              className='flex items-center justify-between text-lg font-bold text-white invalid:text-white/70 hover:text-white/40 focus-visible:text-white/40 active:text-white'
            >
              Projetos
              <ArrowRight size={27} className='w-7' />
            </Link>
            <Link
              href={`#${SECTIONS.Contacts}`}
              className='flex items-center justify-between text-lg font-bold text-white invalid:text-white/70 hover:text-white/40 focus-visible:text-white/40 active:text-white'
            >
              Contatos
              <ArrowRight size={27} className='w-7' />
            </Link>
          </div>
        </SheetContent>
      </div>
    </Sheet>
  );
}
