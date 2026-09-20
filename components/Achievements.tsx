import Image from "next/image";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Recognition
          </p>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Achievements &amp; Certifications
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Recognitions, Certifications, and Research Contributions
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {/* NPTEL */}
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <div className="aspect-[16/10] overflow-hidden bg-slate-900">
              <Image
                src="/assests/images/Nptel certificate.jpg"
                alt="NPTEL DSA Using Java Certificate"
                width={1280}
                height={800}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="p-7">
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                NPTEL Certification
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Data Structures and Algorithms using Java
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Successfully completed the{" "}
                <strong className="text-slate-200">
                  NPTEL Data Structures and Algorithms using Java
                </strong>{" "}
                course with a strong understanding of data structures, algorithm
                design, problem-solving techniques, and Java programming
                concepts.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li>• Strengthened problem-solving skills.</li>
                <li>• Learned efficient algorithm design techniques.</li>
                <li>• Improved Java programming proficiency.</li>
                <li>• Built a strong foundation in Data Structures.</li>
              </ul>
            </div>
          </article>

          {/* Research */}
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
            <div className="aspect-[16/10] overflow-hidden bg-slate-900">
              <Image
                src="/assests/images/paper.jpeg"
                alt="Research Publication Certificate"
                width={1280}
                height={800}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            <div className="p-7">
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                Research Publication
              </p>

              <h3 className="mt-3 text-2xl font-bold text-white">
                Research Paper Publication
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Successfully published a research paper in the field of{" "}
                <strong className="text-slate-200">
                  Artificial Intelligence and Machine Learning
                </strong>
                , demonstrating research skills, innovation, and technical
                expertise in solving real-world problems.
              </p>

              <ul className="mt-5 space-y-2 text-sm text-slate-300">
                <li>• Conducted research in Artificial Intelligence.</li>
                <li>• Collaborated on technical paper writing.</li>
                <li>• Presented innovative AI-based solutions.</li>
                <li>• Received publication recognition.</li>
              </ul>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}