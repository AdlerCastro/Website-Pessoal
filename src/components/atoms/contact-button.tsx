import { AnchorHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { FaWhatsapp } from 'react-icons/fa6';

const linkVariants = cva('inline-flex items-center justify-center', {
  variants: {
    variant: {
      default:
        'hover:text-brown100 active:text-brown300 rounded-lg p-3 outline-0 hover:transition-all hover:duration-150 hover:ease-in-out focus-visible:outline focus-visible:outline-black rounded-[10px]',
      icon: 'rounded-full text-white bg-[#00DA5F] hover:bg-[#009742] active:bg-[#025828] shadow-black/30 drop-shadow-lg outline-0 transition-all duration-150 ease-in-out focus-visible:outline-1 focus-visible:outline-black',
    },
    size: {
      default: 'p-3',
      icon: 'p-3 w-15 h-15',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type LinkVariants = 'default' | 'icon';

export interface LinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean;
  variant?: LinkVariants;
  size?: LinkVariants;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, target, variant, size, asChild, children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'a';

    return (
      <Comp
        ref={ref}
        className={cn(linkVariants({ variant, size, className }))}
        target={target}
        {...props}
      >
        {variant === 'icon' ? (
          <FaWhatsapp className='h-full w-full' />
        ) : (
          children
        )}
      </Comp>
    );
  },
);

Link.displayName = 'Link';

export default Link;
