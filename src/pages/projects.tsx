import { Code2 } from "lucide-react"
import { ProjectsCard } from "../components/common/projectsCard"

export default function Projects() {

  return (
    <div className="min-h-screen flex flex-col 2xl:px-60 xl:px-30 px-8 ">
      <main className="flex-1 flex flex-col min-h-screen py-10 md:py-30">
        <div className="flex gap-3 text-xl">
          <Code2 className="text-accent" />
          <span>projects<span className="text-accent">/</span></span>
        </div>

        <ProjectsCard />
      </main>
    </div>
  )
}
