export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Selected Work
          </p>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Featured Projects
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            Here are some of the projects I have worked on, showcasing my skills
            in AI, Machine Learning, Web Development, and Software Engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {/* RiLearn */}
          <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-7 transition hover:-translate-y-1 hover:border-cyan-400/40">

            <div className="mb-5 inline-flex w-fit rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
              AI + Education
            </div>

            <h3 className="text-2xl font-bold text-white">
              RiLearn
            </h3>

            <p className="mt-4 flex-1 leading-7 text-slate-400">
              An AI-powered interactive reading and learning platform designed
              to improve students&apos; reading and comprehension skills.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://github.com/aditya-an1l/RILearn"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                GitHub Repo
              </a>

              <a
                href="https://rilearn.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                View Live
              </a>
            </div>
          </article>

          {/* TravelMate */}
          <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-7 transition hover:-translate-y-1 hover:border-cyan-400/40">

            <div className="mb-5 inline-flex w-fit rounded-full bg-violet-400/10 px-3 py-1 text-xs font-bold text-violet-300">
              AI + Travel
            </div>

            <h3 className="text-2xl font-bold text-white">
              TravelMate
            </h3>

            <p className="mt-4 flex-1 leading-7 text-slate-400">
              A smart travel planner that recommends destinations, hotels, and
              itineraries using AI-based suggestions.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://github.com/Saisneha9/TravelMate"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                GitHub Repo
              </a>

              <a
                href="https://your-live-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                View Live
              </a>
            </div>
          </article>

          {/* Satellite Mission Planning */}
          <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-7 transition hover:-translate-y-1 hover:border-cyan-400/40">

            <div className="mb-5 inline-flex w-fit rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
              AI + Space
            </div>

            <h3 className="text-2xl font-bold text-white">
              Satellite Mission Planning
            </h3>

            <p className="mt-4 flex-1 leading-7 text-slate-400">
              An AI-driven system for autonomous satellite task scheduling,
              telemetry analysis, and mission optimization.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://github.com/asritha-chikkala/Autonomus_satellite_constellations"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                GitHub Repo
              </a>

              <a
                href="https://your-live-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                View Live
              </a>
            </div>
          </article>

          {/* Trafik-4X */}
          <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-7 transition hover:-translate-y-1 hover:border-cyan-400/40">

            <div className="mb-5 inline-flex w-fit rounded-full bg-violet-400/10 px-3 py-1 text-xs font-bold text-violet-300">
              AI Project
            </div>

            <h3 className="text-2xl font-bold text-white">
              Trafik-4X
            </h3>

            <p className="mt-4 flex-1 leading-7 text-slate-400">
              An AI-driven project demonstrating practical problem solving,
              intelligent automation, and modern application development.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://github.com/hasini-1/TRAFIK-4X"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                GitHub Repo
              </a>

              <a
                href="https://trafik-4-x.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                View Live
              </a>
            </div>
          </article>

          {/* Phishing Detection */}
          <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-7 transition hover:-translate-y-1 hover:border-cyan-400/40">

            <div className="mb-5 inline-flex w-fit rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
              ML + Cybersecurity
            </div>

            <h3 className="text-2xl font-bold text-white">
              Phishing Detection
            </h3>

            <p className="mt-4 flex-1 leading-7 text-slate-400">
              A machine-learning focused project for detecting phishing
              activity and identifying potentially malicious content.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://github.com/asritha-chikkala/phishing"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                GitHub Repo
              </a>

              <a
                href="https://your-live-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                View Live
              </a>
            </div>
          </article>

          {/* Code Echo */}
          <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02] p-7 transition hover:-translate-y-1 hover:border-cyan-400/40">

            <div className="mb-5 inline-flex w-fit rounded-full bg-violet-400/10 px-3 py-1 text-xs font-bold text-violet-300">
              Software Project
            </div>

            <h3 className="text-2xl font-bold text-white">
              Code Echo
            </h3>

            <p className="mt-4 flex-1 leading-7 text-slate-400">
              A software project focused on practical development, structured
              problem solving, and building useful application features.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://github.com/asritha-chikkala/Code-Echo"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                GitHub Repo
              </a>

              <a
                href="https://your-live-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                View Live
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}