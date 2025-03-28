'use client';

import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className='toaster group'
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-black group-[.toaster]:text-white group-[.toaster]:border-zinc-200 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-zinc-950 dark:group-[.toaster]:text-zinc-50 dark:group-[.toaster]:border-zinc-800',
          description:
            'group-[.toast]:text-white dark:group-[.toast]:text-zinc-400',
          actionButton:
            'group-[.toast]:bg-white group-[.toast]:text-zinc-50 dark:group-[.toast]:bg-zinc-50 dark:group-[.toast]:text-white',
          cancelButton:
            'group-[.toast]:bg-zinc-100 group-[.toast]:text-white dark:group-[.toast]:bg-zinc-800 dark:group-[.toast]:text-zinc-400',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
