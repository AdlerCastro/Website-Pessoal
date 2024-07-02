import { sections } from "@/constants/sections"
import "./styles.css"

import SlideProjects from "./components/SlideProjects"


const Projects = () => {
  return (
    <section id={sections.Projects} className="bodyProjects">
      <h1>Projetos desenvolvidos</h1>
      <SlideProjects></SlideProjects>
    </section>
  )
}

export default Projects