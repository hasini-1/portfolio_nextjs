export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            My Academic Journey
          </p>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Education
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="relative ml-3 border-l border-cyan-400/30 pl-8 sm:ml-6 sm:pl-10">

          {/* B.Tech */}
          <div className="relative pb-12">

            <span className="absolute -left-[2.55rem] top-2 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 ring-4 ring-cyan-400/15 sm:-left-[2.75rem]"></span>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30">

              <span className="inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
                2024 - 2028
              </span>

              <h3 className="mt-4 text-xl font-bold text-white">
                Bachelor of Technology (B.Tech)
              </h3>

              <h4 className="mt-2 font-medium text-slate-300">
                Computer Science Engineering (Artificial Intelligence)
              </h4>

              <p className="mt-3 text-slate-400">
                Amrita Vishwa Vidyapeetham
              </p>

              <p className="mt-2 text-sm text-slate-400">
                CGPA:{" "}
                <strong className="text-cyan-300">
                  9.43 / 10
                </strong>
              </p>

            </div>
          </div>

          {/* Intermediate */}
          <div className="relative pb-12">

            <span className="absolute -left-[2.55rem] top-2 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 ring-4 ring-cyan-400/15 sm:-left-[2.75rem]"></span>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30">

              <span className="inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
                2022 - 2024
              </span>

              <h3 className="mt-4 text-xl font-bold text-white">
                Intermediate / Higher Secondary Education
              </h3>

              <p className="mt-3 text-slate-400">
                SR Junior College
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Percentage:{" "}
                <strong className="text-cyan-300">
                  97.3%
                </strong>
              </p>

            </div>
          </div>

          {/* SSC */}
          <div className="relative">

            <span className="absolute -left-[2.55rem] top-2 h-4 w-4 rounded-full border-4 border-slate-950 bg-cyan-400 ring-4 ring-cyan-400/15 sm:-left-[2.75rem]"></span>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-400/30">

              <span className="inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
                2022
              </span>

              <h3 className="mt-4 text-xl font-bold text-white">
                Secondary School Education (SSC)
              </h3>

              <p className="mt-3 text-slate-400">
                Oxford Public School
              </p>

              <p className="mt-2 text-sm text-slate-400">
                Percentage:{" "}
                <strong className="text-cyan-300">
                  96.6%
                </strong>
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}