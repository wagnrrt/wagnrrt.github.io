import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="md:mx-20 mx-10 mb-10 flex-1 flex flex-col" id="contact">

      <div className="h-px bg-accent/10 shrink-0 mb-10"></div>

      <span className="flex justify-center text-sm text-gray-300">{t('footer')}</span>
    </footer>
  )
}
