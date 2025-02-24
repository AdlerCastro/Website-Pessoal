import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';

const buttonVariants = cva('inline-flex items-center justify-center', {
  variants: {
    variant: {
      default:
        'px-10 py-4 rounded-3xl bg-yellow_100 font-Copperplate text-sm font-bold transition-colors hover:bg-yellow_200 active:bg-yellow_300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black disabled:opacity-60 disabled:pointer-events-none text-black',
      loading:
        'gap-10 rounded-3xl text-white bg-red_wf px-10 py-4 font-Copperplate text-sm font-bold transition-colors min-h-2 min-w-[12.375rem] disabled:opacity-60 disabled:pointer-events-none',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {variant === 'loading' ? (
          <LoaderCircle className='animate-spin' />
        ) : (
          props.children
        )}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
