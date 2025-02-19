import { SECTIONS } from "@/enums/sections.enum"
import SlideProjects from "./components/SlideProjects"
import "./styles.css"

export default function Projects() {
  return (
    <div id={SECTIONS.Projects} className="bodyProjects">
      <h2>Projetos desenvolvidos</h2>
      <SlideProjects/>
    </div>
  )
}