import { skillsCard } from "../../data/skills"

function SkillsPreviewCard() {

  return (
    <div className="grid md:grid-cols-3 xl:mx-30 gap-10">
      {skillsCard.map((data, index) =>
        <div key={index} className="border border-white/10 hover:border-accent/40 p-4 space-y-3 group duration-300">
          <h1 className="text-accent font-semibold">
            {data.title}
          </h1>
          <div className="h-px bg-white/5 shrink-0"></div>

          <div className="flex flex-col gap-4 text-sm">
            {data.items.map((item, itemIndex) =>
              <p key={itemIndex} className="text-gray-400 group-hover:text-white duration-300">
                <span className="text-accent/40">&gt;</span> {item}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function SkillsCard() {
  return (
    <div className="xl:flex xl:flex-col grid md:grid-cols-3 gap-8 bg">
      {skillsCard.map((data, index) =>
        <div key={index} className="border border-white/10 hover:border-accent/40 p-4 space-y-3 group duration-300 w-full h-full">
          <h1 className="text-accent font-semibold">
            {data.title}
          </h1>
          <div className="h-px bg-white/5 shrink-0"></div>

          <div className="flex flex-col gap-4 text-sm">
            {data.items.map((item, itemIndex) =>
              <p key={itemIndex} className="text-gray-400 group-hover:text-white duration-300">
                <span className="text-accent/40">&gt;</span> {item}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export {
  SkillsPreviewCard,
  SkillsCard
}
