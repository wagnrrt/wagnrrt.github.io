import { Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import i18n from "../../i18n";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-black/10 border-white/10 backdrop-blur-sm' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="md:text-xl font-bold tracking-tighter hover:text-accent transition-colors">
          <span className="text-accent">&lt;</span>wagner<span className="text-accent">/&gt;</span>
        </Link>
        <ul className="flex md:gap-8 gap-4">
          <li className="group relative">
            <Link to="/" className="text-sm text-gray-400 group-hover:text-accent transition-colors">_home</Link>
            <span className="absolute bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full"></span>
          </li>
          <li className="group relative">
            <Link to="/about" className="text-sm text-gray-400 group-hover:text-accent transition-colors relative group">_about</Link>
            <span className="absolute bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full"></span>
          </li>
          <li className="group relative">
            <Link to="/projects" className="text-sm text-gray-400 group-hover:text-accent transition-colors relative group">_projects</Link>
            <span className="absolute bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full"></span>
          </li>
          <li
            className="group relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button
              className="text-sm text-gray-400 hover:text-accent transition-colors cursor-pointer pb-2"
            >
              <span>{i18n.language.toUpperCase()}</span>
            </button>
            {isOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 border border-white/60 z-50 bg-neutral-900">
                {i18n.language !== 'pt' && (
                  <button
                    onClick={() => handleLanguageChange('pt')}
                    className="w-full px-2 py-2 text-sm text-left text-gray-300 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <span>PT</span>
                  </button>
                )}
                {i18n.language !== 'en' && (
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className="w-full px-2 py-2 text-sm text-left text-gray-300 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <span>EN</span>
                  </button>
                )}
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav >
  );
}
