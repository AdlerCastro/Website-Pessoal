import * as React from 'react';

import { cn } from '@/lib/utils';
import { Label } from '@radix-ui/react-label';

interface TextareaProps extends React.ComponentProps<'textarea'> {
  id: string;
  label: string;
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error = false, className, id, label, ...props }, ref) => {
    return (
      <div className='flex flex-col gap-2'>
        <Label
          htmlFor={id}
          className='font-Copperplate text-xs font-bold text-white'
        >
          {label}
        </Label>
        <textarea
          className={cn(
            'flex min-h-[80px] w-full rounded-3xl bg-white px-4 pb-20 pt-3 font-Roboto text-base font-light text-black outline-none ring-1 ring-transparent placeholder:text-xs placeholder:font-light placeholder:italic placeholder:text-black/60 focus-visible:ring-black disabled:cursor-not-allowed disabled:opacity-50',
            error && 'ring-[#FF0000]',
            className,
          )}
          id={id}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
