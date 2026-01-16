import { ChevronDown, Terminal } from "lucide-react"

function App() {
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
              <hr className="w-0.5 bg-accent shrink-0 border" />

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
              className="group inline-flex h-10 items-center justify-center border border-white px-8 font-medium transition-all duration-300 hover:bg-white hover:text-black max-w-60">
              <span>./view_projects.sh</span>
            </a>
          </div>
        </div>

        <div className="justify-center flex animate-bounce text-gray-500 pb-10">
          <ChevronDown />
        </div>
      </main>

      <section className="mt-20 flex-1 flex flex-col" id="about">
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

        <div className="grid grid-cols-4 m-20 space-x-8">
          <div className="border border-white/10 p-4">
            <h1 className="text-accent font-semibold">
              LANGUAGES
            </h1>
          </div>
        </div>
      </section>

      <footer className="w-full px-10 py-6">
      </footer>
    </div>
  )
}
export default App
