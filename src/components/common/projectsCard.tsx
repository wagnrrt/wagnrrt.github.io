import { Github } from "lucide-react";
import { projectsCard } from "../../data/projects";
import { useTranslation } from 'react-i18next';

function ProjectsPreviewCard() {
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-2 xl:mx-30 my-20 gap-10">
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
              {t(data.desc)}
            </p>
          </div>

          <div className="flex gap-2 flex-wrap">
            {data.tags.map((item, itemIndex) =>
              <div key={itemIndex} className="bg-white/5 text-gray-500 text-xs px-2 py-1">
                {item}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function ProjectsCard() {
  const { t } = useTranslation();
  return (
    <div className="grid sm:grid-cols-2 xl:mx-30 my-20 gap-10">
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
              {t(data.desc)}
            </p>
          </div>

          <div className="flex gap-2 flex-wrap">
            {data.tags.map((item, itemIndex) =>
              <div key={itemIndex} className="bg-white/5 text-gray-500 text-xs px-2 py-1">
                {item}
              </div>
            )}
          </div>
        </div>
      )}
    </div>

  )
}

export {
  ProjectsPreviewCard,
  ProjectsCard
}
