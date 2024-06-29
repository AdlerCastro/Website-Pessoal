import { Meta,StoryObj } from "@storybook/react"
import NoticeWhatsapp from "."

export default{
    title: "Components/Organisms/NoticeWhatsapp",
    component: NoticeWhatsapp,
    decorators:[
        (Story) => (<div style={{width: '100vw', height: '100vh'}}>
            <Story/>
        </div>),
    ],
}as Meta<StoryObj>;

type Story = StoryObj

export const Default:Story = {}