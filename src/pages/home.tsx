import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Projects from "../components/sections/projects";
import { Contact } from "../components/sections/contact";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col 2xl:px-60 xl:px-30 px-8 ">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}
