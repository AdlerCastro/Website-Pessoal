import { forwardRef, Ref } from "react";
import { ButtonProps } from "./type";
import { Slot } from "@radix-ui/react-slot";

const ButtonNav = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const { children, asChild, ...rest } = props;
    const Component = asChild ? Slot : "button";

    return (
      <Component ref={ref} {...rest}>
        {children}
      </Component>
    );
  }
);

ButtonNav.displayName = "ButtonNav";

export default ButtonNav;
