import { useTranslation } from 'react-i18next';

function Terminal() {
  const { t } = useTranslation();

  return (
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
            {t('about.terminal.p1')}
          </p>
          <p>
            {t('about.terminal.p2')}
          </p>
          <p>
            {t('about.terminal.p3')}
          </p>
          <p>
            {t('about.terminal.p4')}
          </p>
        </div>
      </div>
    </div>
  )
}

function TerminalPreview() {
  const { t } = useTranslation();

  return (
    <div className="bg-neutral-800/30 flex flex-col xl:m-20 my-20 p-4 border border-white/10 gap-8">
      <div className="flex gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
      </div>

      <div className="md:px-6 px-3 leading-relaxed font-mono">
        <h1 className="text-accent">
          wagnrrt/ ~ &gt; <span className="text-gray-300"> cat dev_profile.txt</span>
        </h1>
        <div className="my-6 text-gray-300 space-y-6">
          <p>
            {t('about.terminalPreview.p1')}
          </p>
          <p>
            {t('about.terminalPreview.p2')}
          </p>
          <p>
            {t('about.terminalPreview.p3')}
          </p>
        </div>
      </div>
    </div>
  )
}

export {
  Terminal,
  TerminalPreview
}
