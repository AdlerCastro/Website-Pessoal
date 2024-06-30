import { forwardRef, Ref } from "react";
import { SocialMediaButtonProps } from "./type";

const SocialMediaButton = forwardRef(({ children, ...props }: SocialMediaButtonProps, ref: Ref<HTMLAnchorElement>) => {
    return (
        <a ref={ref} {...props} target="_blank" >
            {children}
        </a>
    )
})

SocialMediaButton.displayName = "SocialMediaButton"

export default SocialMediaButton