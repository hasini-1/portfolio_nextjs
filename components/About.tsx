export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-white/5 bg-slate-900/30 px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">

        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Introduction
          </p>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            About Me
          </h2>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-xl backdrop-blur sm:p-10">

          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            Hello! I'm Koppuravuri Venkata Naga Sri Hasini, a third-year B.Tech
            student specializing in Artificial Intelligence at Amrita Vishwa
            Vidyapeetham, with an expected graduation in 2028. I am passionate
            about designing intelligent systems, developing scalable software,
            and continuously exploring emerging technologies in AI and Machine
            Learning.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            I enjoy solving real-world problems through innovative solutions and
            strive to improve my technical skills by building practical projects
            and strengthening my understanding of software development
            principles. My career goal is to become an AI &amp; Machine Learning
            Engineer or a Software Development Engineer (SDE), where I can
            contribute to impactful products while continuously learning and
            growing as a developer.
          </p>

        </div>

      </div>
    </section>
  );
}