function Terminal() {
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
            I’m currently studying back-end development, focusing on Node.js, JavaScript,
            and TypeScript. My main interest is understanding how applications work behind
            the scenes — from data handling to the logic that connects everything.
          </p>
          <p>

            Programming is something I genuinely enjoy. I like exploring how systems are
            structured, understanding why certain decisions are made, and paying attention
            to the details that influence how software behaves.
          </p>
          <p>
            At this stage, my focus is on building strong fundamentals. I’m improving my
            coding skills, deepening my understanding of back-end concepts, and learning
            through consistent practice and study.
          </p>
          <p>
            My goal is steady technical growth, developing a solid mindset for building
            reliable systems and writing better code over time.
          </p>
        </div>
      </div>
    </div>
  )
}

function TerminalPreview() {
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
            Back-end developer focused on Node.js, JavaScript, and TypeScript.
            I build the logic and architecture that powers applications,
            ensuring everything runs solidly.
          </p>
          <p>
            I'm genuinely passionate about programming. I enjoy understanding
            how systems work under the hood — the data flow, the structure,
            the details that make a difference. The more I learn, the more I want to explore.
          </p>
          <p>
            Always looking to evolve technically and apply what I learn to
            projects that truly matter.
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
