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
          'font-Copperplate invalid:text-primary-700/70 px-2 py-1 text-base font-normal text-white outline-none ring-0 transition-all duration-150 focus-visible:underline',
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
