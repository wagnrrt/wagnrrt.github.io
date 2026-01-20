import { Code2 } from "lucide-react"
import { ProjectsPreviewCard } from "../common/projectsCard"

export default function Projects() {

  return (
    <section className="my-20 flex-1 flex flex-col" id="projects">
      <div className="flex gap-3 text-xl">
        <Code2 className="text-accent" />
        <span>projects<span className="text-accent">/</span></span>
      </div>

      <ProjectsPreviewCard />
    </section>
  )
}
