import { Terminal } from "lucide-react"

function About() {

  const skillsCard = [
    {
      title: "LINGUAGES",
      items: ["TypeScript", "JavaScript", "C#"]
    },
    {
      title: "FRAMEWORKS",
      items: ["Fastify", "React", "Next.js"]
    },
    {
      title: "DATABASES",
      items: ["Redis", "MongoDB"]
    }
  ]

  return (
    <div className="min-h-screen flex flex-col 2xl:px-60 xl:px-30 px-8 ">
      <main className="flex-1 flex flex-col justify-between min-h-screen py-10 md:py-30">
        <div className="flex gap-3 text-xl">
          <Terminal className="text-accent" />
          <span>about_me<span className="text-accent">.json</span></span>
        </div>

        <div className="grid grid-cols-4 m-20 gap-10">
          <div className="bg-neutral-800/30 flex flex-col p-4 border border-white/10 gap-8 col-span-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>

            <div className="px-6 leading-relaxed font-mono">
              <h1 className="text-accent">
                wagnrrt/ ~ &gt; <span className="text-gray-300"> cat dev_profile.txt</span>
              </h1>
              <div className="my-6 text-gray-300 space-y-6">
                <p>
                  I’m currently studying back-end development, focusing on Node.js, JavaScript,
                  and TypeScript. My main interest is understanding how applications work behind
                  the scenes — from data handling to the logic that connects everything.
                </p>
                <p>

                  Programming is something I genuinely enjoy. I like exploring how systems are
                  structured, understanding why certain decisions are made, and paying attention
                  to the details that influence how software behaves.
                </p>
                <p>
                  At this stage, my focus is on building strong fundamentals. I’m improving my
                  coding skills, deepening my understanding of back-end concepts, and learning
                  through consistent practice and study.
                </p>
                <p>
                  My goal is steady technical growth, developing a solid mindset for building
                  reliable systems and writing better code over time.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {skillsCard.map((data, index) =>
              <div key={index} className="border border-white/10 hover:border-accent/40 p-4 space-y-3 group duration-300 w-full">
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

        </div>
      </main>
    </div>
  )
}
export default About
