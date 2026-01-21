import { ChevronDown } from "lucide-react"
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
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
                {t('hero.greeting')}
              </h1>
              <h2 className="md:text-lg">
                {t('hero.role')}
                <span className="text-accent"> Backend developer<span className="animate-pulse">_</span></span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base whitespace-pre-line">
                {t('hero.desc')}
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
  )
}
