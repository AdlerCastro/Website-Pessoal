import { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";

import { SocialMediaButtonProps } from "./type";
import SocialMediaButton from ".";

import GithubIcon from 'public/icons/GithubIcon.svg'
import EmailIcon from 'public/icons/EmailIcon.svg'
import InstagramIcon from 'public/icons/InstagramIcon.svg'
import LinkedInIcon from 'public/icons/LinkedInIcon.svg'

export default{
    title: "Components/Atoms/ButtonSocialMedia",
    component: SocialMediaButton,
    args: {
        target: "_blank",
        href: "https://github.com/AdlerCastro/Website-Pessoal"
    },

}as Meta<SocialMediaButtonProps>

type Story = StoryObj<SocialMediaButtonProps>

export const Whatsapp:Story ={
    args: {
        children: "Whatsapp"
    }
}

export const Github:Story ={
    args: {
        children: <Image src={GithubIcon} alt="Github"/>
    }
}

export const Instagram:Story ={
    args: {
        children: <Image src={InstagramIcon} alt="Instagram"/>
    }
}

export const Email:Story ={
    args: {
        children: <Image src={EmailIcon} alt="Email"/>
    }
}

export const LinkedIn:Story ={
    args: {
        children: <Image src={LinkedInIcon} alt="Email"/>
    }
}