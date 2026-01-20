import { Terminal } from "lucide-react"
import { TerminalPreview } from "../common/terminal"
import { SkillsPreviewCard } from "../common/skillsCard"

export default function About() {

  return (
    <section className="my-20 flex-1 flex flex-col" id="about">
      <div className="flex gap-3 text-xl">
        <Terminal className="text-accent" />
        <span>about_me<span className="text-accent">.json</span></span>
      </div>

      <TerminalPreview />
      <SkillsPreviewCard />
    </section>
  )
}
