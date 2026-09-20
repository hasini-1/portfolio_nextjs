import Image from "next/image";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-y border-white/5 bg-slate-900/30 px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            My Professional Journey
          </p>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Experience
          </h2>
        </div>

        {/* Experience Card */}
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:grid-cols-2">

          {/* Internship Certificate */}
          <div className="min-h-72 bg-slate-900">
            <Image
              src="/assests/images/internship.png"
              alt="ShadowFox Internship Certificate"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Experience Details */}
          <div className="p-7 sm:p-10">

            <span className="inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold text-cyan-300">
              June 1, 2026 – June 30, 2026
            </span>

            <h3 className="mt-5 text-2xl font-black text-white">
              Machine Learning Intern
            </h3>

            <h4 className="mt-2 text-lg font-semibold text-cyan-300">
              ShadowFox
            </h4>

            <p className="mt-5 leading-7 text-slate-400">
              Successfully completed a one-month internship at{" "}
              <strong className="text-slate-200">
                ShadowFox
              </strong>{" "}
              as a{" "}
              <strong className="text-slate-200">
                Machine Learning Intern
              </strong>
              . During the internship, I worked on real-world machine learning
              projects, performed data preprocessing, trained predictive models,
              and gained practical experience in AI and software development.
            </p>

            {/* Responsibilities */}
            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">

              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"></span>
                Worked on Machine Learning projects.
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"></span>
                Performed data preprocessing and model training.
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"></span>
                Applied Python and ML libraries for problem-solving.
              </li>

              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"></span>
                Strengthened analytical and software development skills.
              </li>

            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}