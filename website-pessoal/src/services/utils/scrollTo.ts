import { sections } from "@/constants/sections";

export const scrollTo = (id: keyof typeof sections) => {
    const element = document.getElementById(id)
    if (window && element) {
        window.scrollTo({
            top: element?.offsetTop,
            behavior: 'smooth',
        })
    }
}