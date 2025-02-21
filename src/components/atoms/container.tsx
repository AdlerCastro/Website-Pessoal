import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

type ContainerProps = HTMLAttributes<HTMLDivElement>;

export default function Container({
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'flex w-full max-w-[1125px] flex-col items-center justify-center gap-10 px-[30px] py-10 text-white md:gap-10 lg:px-16 lg:py-14',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
