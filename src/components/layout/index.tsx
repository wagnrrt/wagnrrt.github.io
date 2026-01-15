import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:text-black selection:bg-accent">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-black/10 border-white/10 backdrop-blur-sm' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl">
            <a href="#" className="text-xl font-bold tracking-tighter hover:text-accent transition-colors">
              <span className="text-accent">&lt;</span>wagner<span className="text-accent">/&gt;</span>
            </a>
          </div>
          <ul className="flex gap-8 font-mono">
            <li className="group relative">
              <a href="#" className="text-sm text-gray-400 group-hover:text-accent transition-colors">_home</a>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full"></span>
            </li>
            <li className="group relative">
              <a href="#about" className="text-sm text-gray-400 group-hover:text-accent transition-colors relative group">_about</a>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full"></span>
            </li>
            <li className="group relative">
              <a href="#_skills" className="text-sm text-gray-400 group-hover:text-accent transition-colors relative group">_skills</a>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full"></span>
            </li>
            <li className="group relative">
              <a href="#projects" className="text-sm text-gray-400 group-hover:text-accent transition-colors relative group">_projects</a>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full"></span>
            </li>
            <li className="group relative">
              <a href="#contact" className="text-sm text-gray-400 group-hover:text-accent transition-colors relative group">_contact</a>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full"></span>
            </li>
          </ul>
        </div>
      </nav>

      <main className="pt-20">
        {children}
      </main>
    </div>
  );
}

