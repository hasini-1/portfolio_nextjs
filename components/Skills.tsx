import Image from "next/image";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 border-y border-white/5 bg-slate-900/30 px-5 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            What I Work With
          </p>

          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            My Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">

          {/* Python */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]">
            <Image
              src="/assests/images/python.png"
              alt="Python"
              width={56}
              height={56}
              className="mx-auto h-14 w-14 object-contain transition group-hover:scale-110"
            />

            <h3 className="mt-4 font-semibold text-white">
              Python
            </h3>
          </div>

          {/* Java */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]">
            <Image
              src="/assests/images/java.png"
              alt="Java"
              width={56}
              height={56}
              className="mx-auto h-14 w-14 object-contain transition group-hover:scale-110"
            />

            <h3 className="mt-4 font-semibold text-white">
              Java
            </h3>
          </div>

          {/* Git & GitHub */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]">
            <Image
              src="/assests/images/git.png"
              alt="Git and GitHub"
              width={56}
              height={56}
              className="mx-auto h-14 w-14 object-contain transition group-hover:scale-110"
            />

            <h3 className="mt-4 font-semibold text-white">
              Git &amp; GitHub
            </h3>
          </div>

          {/* C */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]">
            <Image
              src="/assests/images/c.png"
              alt="C"
              width={56}
              height={56}
              className="mx-auto h-14 w-14 object-contain transition group-hover:scale-110"
            />

            <h3 className="mt-4 font-semibold text-white">
              C
            </h3>
          </div>

          {/* OOPS */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]">
            <Image
              src="/images/oops.png"
              alt="OOPS"
              width={56}
              height={56}
              className="mx-auto h-14 w-14 object-contain transition group-hover:scale-110"
            />

            <h3 className="mt-4 font-semibold text-white">
              OOPS
            </h3>
          </div>

          {/* DSA */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]">
            <Image
              src="/assests/images/dsa.png"
              alt="Data Structures and Algorithms"
              width={56}
              height={56}
              className="mx-auto h-14 w-14 object-contain transition group-hover:scale-110"
            />

            <h3 className="mt-4 text-sm font-semibold text-white">
              Data Structures &amp; Algorithms
            </h3>
          </div>

          {/* Operating Systems */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]">
            <Image
              src="/assests/images/os.png"
              alt="Operating Systems"
              width={56}
              height={56}
              className="mx-auto h-14 w-14 object-contain transition group-hover:scale-110"
            />

            <h3 className="mt-4 text-sm font-semibold text-white">
              Operating Systems
            </h3>
          </div>

          {/* Computer Networks */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]">
            <Image
              src="/assests/images/network.png"
              alt="Computer Networks"
              width={56}
              height={56}
              className="mx-auto h-14 w-14 object-contain transition group-hover:scale-110"
            />

            <h3 className="mt-4 text-sm font-semibold text-white">
              Computer Networks
            </h3>
          </div>

          {/* DBMS */}
          <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.05]">
            <Image
              src="/assests/images/dbms.png"
              alt="DBMS"
              width={56}
              height={56}
              className="mx-auto h-14 w-14 object-contain transition group-hover:scale-110"
            />

            <h3 className="mt-4 font-semibold text-white">
              DBMS
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}