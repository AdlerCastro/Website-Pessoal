import { AnchorHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: string | undefined;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, target, className, variant, ...props }, ref) => {
    return (
      <a
        ref={ref}
        target={target}
        className={cn(
          variant,
          'px-2 py-1 font-Copperplate text-sm font-normal text-white outline-none ring-0 transition-all duration-150 invalid:text-yellow_100/70 hover:text-yellow_100 focus-visible:text-yellow_100 active:text-yellow_300',
          className,
        )}
        {...props}
      >
        {children}
      </a>
    );
  },
);

Link.displayName = 'Link';

export default Link;
