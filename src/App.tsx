import { ChevronDown, Code2, Github, Linkedin, Mail, Terminal, User } from "lucide-react"

function App() {

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

  const projectsCard = [
    {
      title: "Lumina Weather",
      desc: `Modern weather app with React + TypeScript frontend and Fastify API backend.
            Includes 15-day forecasts, hourly details, interactive charts, and Redis caching.`,
      tags: ["typeScript", "react", "fastify", "tailwindcss", "redis"],
      github: "https://github.com/wagnrrt/lumina-app.git",
      live: "https://lumina-weather.vercel.app"
    },
    {
      title: "taks-tracker-cli",
      desc: `CLI task manager built with TypeScript.
            Add, update, delete and track tasks with status management, all stored in JSON format.`,
      tags: ["typeScript", "json", "cli"],
      github: "https://github.com/wagnrrt/taks-tracker-cli.git"
    },
  ]


  return (
    <div className="min-h-screen flex flex-col 2xl:px-60 xl:px-30 px-8 ">
      <main className="flex-1 flex flex-col justify-between min-h-screen py-10 md:py-30">
        <div>
          <div className="mb-6 flex items-baseline text-9xl">
            <div className="flex overflow-hidden h-28">
              <div className="relative w-[1ch]">
                <span className="absolute top-0">4</span>
              </div>
              <div className="relative">
                <span className="opacity-0">0</span>
                <span className="absolute top-0 left-0 -translate-y-16">0</span>
                <span className="absolute top-0 left-0 translate-y-12">0</span>
              </div>
              <span>4</span>
            </div>
            <span className="text-2xl">Error</span>
          </div>

          <div className="flex flex-col gap-6">

            <div className="flex gap-6">
              <div className="w-0.5 bg-accent shrink-0"></div>

              <div className="flex flex-col gap-3">
                <h1 className="text-2xl md:text-5xl">
                  Hi, my name is Wagner
                </h1>
                <h2 className="md:text-lg">
                  and I'm a <span className="text-accent">Backend developer<span className="animate-pulse">_</span></span>
                </h2>
                <p className="text-gray-400 text-sm md:text-base">
                  Passionate about programming and always<br /> eager to explore new technologies and <br /> expand my skills.
                </p>
              </div>
            </div>

            <a
              href="#projects"
              className="group inline-flex h-10 items-center justify-center border border-white px-8 font-medium duration-300 hover:bg-white hover:text-black max-w-60">
              <span>./view_projects.sh</span>
            </a>
          </div>
        </div>

        <div className="justify-center flex animate-bounce text-gray-500 pb-10">
          <ChevronDown />
        </div>
      </main>

      <section className="my-20 flex-1 flex flex-col" id="about">
        <div className="flex gap-3 text-xl">
          <Terminal className="text-accent" />
          <span>about_me<span className="text-accent">.json</span></span>
        </div>

        <div className="bg-neutral-800/30 flex flex-col m-20 p-4 border border-white/10 gap-8">
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
                Back-end developer focused on Node.js, JavaScript, and TypeScript.
                I build the logic and architecture that powers applications,
                ensuring everything runs solidly.
              </p>
              <p>
                I'm genuinely passionate about programming. I enjoy understanding
                how systems work under the hood — the data flow, the structure,
                the details that make a difference. The more I learn, the more I want to explore.
              </p>
              <p>
                Always looking to evolve technically and apply what I learn to
                projects that truly matter.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 mx-30 space-x-8">
          {skillsCard.map((data) =>
            <div className="border border-white/10 hover:border-accent/40 p-4 space-y-3 group duration-300">
              <h1 className="text-accent font-semibold">
                {data.title}
              </h1>
              <div className="h-px bg-white/5 shrink-0"></div>

              <div className="flex flex-col gap-4 text-sm">
                {data.items.map((item) =>
                  <p className="text-gray-400 group-hover:text-white duration-300">
                    <span className="text-accent/40">&gt;</span> {item}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="my-20 flex-1 flex flex-col" id="projects">
        <div className="flex gap-3 text-xl">
          <Code2 className="text-accent" />
          <span>projects<span className="text-accent">/</span></span>
        </div>

        <div className="grid grid-cols-2 mx-30 my-20 space-x-8">
          {projectsCard.map((data) =>
            <div className="border border-white/10 hover:border-white/15 p-6 space-y-5 duration-300 group">
              <div className="flex justify-between">
                <h1 className="group-hover:text-accent duration-300 font-semibold text-xl">
                  {data.title}
                </h1>
                <div className="flex gap-6 items-center">
                  <a href={data.github} className="text-gray-400 hover:text-white opacity-0 group-hover:opacity-100 duration-300">
                    <Github />
                  </a>
                  {data.live ? (
                    <a href={data.live} className="bg-white/5 border border-white/10 hover:text-accent hover:border-white/20 duration-300  text-xs px-2 py-1">
                      LIVE
                    </a>
                  ) : ""}

                </div>
              </div>

              <div className="flex flex-col gap-4 text-sm">
                <p className="text-gray-400">
                  {data.desc}
                </p>
              </div>

              <div className="flex gap-2">
                {data.tags.map((item) =>
                  <div className="bg-white/5 text-gray-500 text-xs px-2 py-1">
                    {item}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      <footer className="my-20 flex-1 flex flex-col" id="contact">
        <div className="flex gap-3 text-xl">
          <User className="text-accent" />
          <span>contact<span className="text-accent">()</span></span>
        </div>

        <div className="flex mx-30 my-20 justify-between">
          <div className="flex flex-col">
            <p className="text-gray-400 text-sm leading-relaxed">
              Building my path as a developer. <br /> Open to opportunities, collaborations, <br /> and knowledge exchange.
            </p>
          </div>

          <div className="space-y-3">
            <a
              className="flex gap-3 text-sm items-center"
              onClick={(e) => {
                e.preventDefault();
                const user = 'wagnrb0';
                const domain = 'gmail.com';
                window.location.href = `mailto:${user}@${domain}`;
              }}
              style={{ cursor: 'pointer' }}
            >
              <Mail size={18} />
              <span>
                wagnrb0{String.fromCharCode(64)}gmail.com
              </span>
            </a>
            <a className="flex gap-3 text-sm items-center" href="https://github.com/wagnrrt" ><Github size={18} /> https://github.com/wagnrrt</a>
            <a className="flex gap-3 text-sm items-center" href="https://linkedin.com/in/wagnrrt"><Linkedin size={18} /> https://linkedin.com/in/wagnrrt</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default App
