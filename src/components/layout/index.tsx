import { Link } from "@tanstack/react-router";
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
          <Link to="/" className="md:text-xl font-bold tracking-tighter hover:text-accent transition-colors">
            <span className="text-accent">&lt;</span>wagner<span className="text-accent">/&gt;</span>
          </Link>
          <ul className="flex md:gap-8 gap-4">
            <li className="group relative">
              <Link to="/" className="text-sm text-gray-400 group-hover:text-accent transition-colors">_home</Link>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full"></span>
            </li>
            <li className="group relative">
              <Link to="/about" className="text-sm text-gray-400 group-hover:text-accent transition-colors relative group">_about</Link>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full"></span>
            </li>
            <li className="group relative">
              <Link to="/projects" className="text-sm text-gray-400 group-hover:text-accent transition-colors relative group">_projects</Link>
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all group-hover:w-full"></span>
            </li>

          </ul>
        </div>
      </nav>

      <main className="pt-20">
        {children}
      </main>

      <footer className="md:mx-20 mx-10 mb-10 flex-1 flex flex-col" id="contact">


        <div className="h-px bg-accent/10 shrink-0 mb-10"></div>

        <span className="flex justify-center text-sm text-gray-300">Made by wagnrrt © Copyright 2026.</span>
      </footer>
    </div>
  );
}

