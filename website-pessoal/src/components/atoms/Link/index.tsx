'use client'

import { forwardRef, Ref } from "react"
import LinkProps from "./type"

const Link = forwardRef(({children, target, ...props}:LinkProps, ref:Ref<HTMLAnchorElement>) => {

    return(
        <a ref={ref} target={target} {...props}>
            <span>
                {children}
            </span>
        </a>
    )
})

Link.displayName = "Link"

export default Link