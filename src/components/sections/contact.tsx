import { Github, Linkedin, Mail, User } from "lucide-react";

export function Contact() {
  return (
    <section className=" flex-1 flex flex-col" id="contact">
      <div className="flex gap-3 text-xl">
        <User className="text-accent" />
        <span>contact<span className="text-accent">()</span></span>
      </div>

      <div className="flex flex-col gap-10 md:gap-0 md:flex-row xl:mx-30 my-20 justify-between">
        <div className="flex flex-col">
          <p className="text-gray-400 text-sm leading-relaxed">
            Building my path as a developer. <br /> Open to opportunities, collaborations, <br /> and knowledge exchange.
          </p>
        </div>

        <div className="space-y-3">
          <a
            className="flex gap-3 text-sm items-center text-gray-400 hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              const user = 'wagnrb0';
              const domain = 'gmail.com';
              window.location.href = `mailto:${user}@${domain}`;
            }}
            style={{ cursor: 'pointer' }}
          >
            <Mail size={18} />
            <span>
              wagnrb0{String.fromCharCode(64)}gmail.com
            </span>
          </a>
          <a className="flex gap-3 text-sm items-center text-gray-400 hover:text-white" href="https://github.com/wagnrrt" ><Github size={18} /> https://github.com/wagnrrt</a>
          <a className="flex gap-3 text-sm items-center text-gray-400 hover:text-white" href="https://linkedin.com/in/wagnrrt"><Linkedin size={18} /> https://linkedin.com/in/wagnrrt</a>
        </div>
      </div>
    </section>
  )
}
