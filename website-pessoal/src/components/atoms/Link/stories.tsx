import { Meta, StoryObj } from "@storybook/react"
import Link from "."
import LinkProps from "./type"

export default{
    title: "Components/Atoms/Link",
    component: Link
}as Meta<LinkProps>

type Story = StoryObj<LinkProps>

export const Default:Story = {
    args:{
        href: "https://github.com/AdlerCastro/Website-Pessoal",
        children: "Adler Castro"
    }
}