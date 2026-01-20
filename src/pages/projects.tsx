import { Code2, Github, } from "lucide-react"

export default function Projects() {

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
      <main className="flex-1 flex flex-col min-h-screen py-10 md:py-30">
        <div className="flex gap-3 text-xl">
          <Code2 className="text-accent" />
          <span>projects<span className="text-accent">/</span></span>
        </div>

        <div className="grid grid-cols-2 mx-30 my-20 gap-10">
          {projectsCard.map((data, index) =>
            <div key={index} className="border border-white/10 hover:border-white/15 p-6 space-y-5 duration-300 group">
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
                {data.tags.map((item, itemIndex) =>
                  <div key={itemIndex} className="bg-white/5 text-gray-500 text-xs px-2 py-1">
                    {item}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
