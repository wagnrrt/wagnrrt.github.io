import { ChevronDown } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 2xl:px-60 xl:px-30 px-8 py-10 md:py-30 flex flex-col justify-between">

        <div>
          <div className="mb-6 flex items-baseline font-mono text-9xl">
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
                <h1 className="font-mono text-2xl md:text-5xl">
                  Hi, my name is Wagner
                </h1>
                <h2 className="font-mono md:text-lg">
                  and I'm a <span className="text-accent">Backend developer<span className="animate-pulse">_</span></span>
                </h2>
                <p className="text-gray-400 text-sm md:text-base">
                  Passionate about programming and always<br /> eager to explore new technologies and <br /> expand my skills.
                </p>
              </div>
            </div>

            <a
              href="#projects"
              className="group font-mono inline-flex h-10 items-center justify-center border border-white px-8 font-medium transition-all duration-300 hover:bg-white hover:text-black max-w-60">
              <span>./view_projects.sh</span>
            </a>
          </div>
        </div>

        <div className="justify-center flex animate-bounce text-gray-500">
          <ChevronDown />
        </div>

      </main>

      <footer className="w-full px-10 py-6">
      </footer>
    </div>
  )
}
export default App
