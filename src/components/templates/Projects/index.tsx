import { sections } from "@/constants/sections"
import "./styles.css"

import SlideProjects from "./components/SlideProjects"


const Projects = () => {
  return (
    <div id={sections.Projects} className="bodyProjects">
      <h2>Projetos desenvolvidos</h2>
      <SlideProjects></SlideProjects>
    </div>
  )
}

export default Projects