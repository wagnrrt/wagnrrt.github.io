import { TerminalIcon } from "lucide-react"
import { SkillsCard } from "../components/common/skillsCard"
import { Terminal } from "../components/common/terminal"

function About() {

  return (
    <div className="min-h-screen flex flex-col 2xl:px-60 xl:px-30 px-8 ">
      <main className="flex-1 flex flex-col justify-between min-h-screen py-10 md:py-30">
        <div className="flex gap-3 text-xl">
          <TerminalIcon className="text-accent" />
          <span>about_me<span className="text-accent">.json</span></span>
        </div>

        <div className="flex flex-col xl:grid xl:grid-cols-4 xl:m-20 my-20 gap-10">


          <Terminal />
          <SkillsCard />
        </div>
      </main>
    </div>
  )
}
export default About
