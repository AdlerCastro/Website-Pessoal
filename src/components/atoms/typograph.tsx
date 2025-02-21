import { forwardRef, HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

const typographVariants = cva('text-white', {
  variants: {
    variant: {
      titleHero:
        'font-Poppins text-[2.125rem]/normal font-bold tracking-wider sm:max-w-[38.75rem] sm:text-[2.625rem]/normal lg:max-w-[57.5rem] lg:text-[3.25rem]/normal',
      title:
        'font-Poppins text-[1.75rem]/8 font-bold tracking-wider md:text-[2rem]/[120%] lg:text-[2.625rem]/[120%]',
      subtitle:
        'font-Poppins text-xl/8 font-bold tracking-wider md:text-xl/[120%] lg:text-xl/[120%]',
      paragraph:
        'max-w-paragraph rounded-xl border border-solid border-paragraph bg-default p-4 text-start transition-all duration-300 font-Poppins text-sm/[150%] h-fit',
    },
  },
});

type TypographVariant = 'titleHero' | 'title' | 'subtitle' | 'paragraph';

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographVariants> {
  asChild?: boolean;
  variant?: TypographVariant;
}

export interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof typographVariants> {
  asChild?: boolean;
  variant?: TypographVariant;
}

const Typograph = {
  TitleHero: forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ variant = 'titleHero', className, asChild, ...props }, ref) => {
      const Comp = asChild ? Slot : 'h1';

      return (
        <Comp
          className={cn(typographVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
      );
    },
  ),
  Title: forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ variant = 'title', className, asChild, ...props }, ref) => {
      const Comp = asChild ? Slot : 'h2';

      return (
        <Comp
          className={cn(typographVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
      );
    },
  ),
  Subtitle: forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ variant = 'subtitle', className, asChild, ...props }, ref) => {
      const Comp = asChild ? Slot : 'h3';

      return (
        <Comp
          className={cn(typographVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
      );
    },
  ),
  Paragraph: forwardRef<HTMLParagraphElement, ParagraphProps>(
    ({ variant = 'paragraph', className, asChild, ...props }, ref) => {
      const Comp = asChild ? Slot : 'p';

      return (
        <Comp
          className={cn(typographVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
      );
    },
  ),
};

Typograph.TitleHero.displayName = 'Typograph.TitleHero';
Typograph.Title.displayName = 'Typograph.Title';
Typograph.Subtitle.displayName = 'Typograph.Subtitle';
Typograph.Paragraph.displayName = 'Typograph.Paragraph';

export { Typograph, typographVariants };
