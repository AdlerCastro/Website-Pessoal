import { Meta, StoryObj } from "@storybook/react"
//Component
import ButtonNav from "."
import { ButtonProps } from "./type"
//React Icons
import { IoMenuOutline } from "react-icons/io5";

export default {
    title: "Components/Organisms/Header/Components/ButtonNav",
    component: ButtonNav,
}as Meta<ButtonProps>

type Story = StoryObj<ButtonProps>

export const Default:Story = {
    args: {
        children: <IoMenuOutline />
    }
}