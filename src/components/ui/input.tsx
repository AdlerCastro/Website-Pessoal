import * as React from 'react';

import { cn } from '@/lib/utils';
import { Label } from './label';

interface InputProps extends React.ComponentProps<'input'> {
  id: string;
  label: string;
  hasError?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, hasError, id, label, ...props }, ref) => {
    return (
      <div className='flex w-fit flex-col gap-2'>
        <Label
          htmlFor={id}
          className='font-Poppins text-xs font-bold text-white'
        >
          {label}
        </Label>
        <input
          id={id}
          type={type}
          className={cn(
            'w-[278px] rounded-[1.25rem] bg-white px-4 py-[0.875rem] font-Poppins text-base font-light text-black outline-none ring-1 ring-transparent placeholder:text-xs placeholder:font-light placeholder:italic placeholder:text-black/60 focus:ring-black disabled:cursor-not-allowed disabled:opacity-50',
            hasError && 'ring-[#FF0000]',
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
