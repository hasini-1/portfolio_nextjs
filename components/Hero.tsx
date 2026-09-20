import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-12"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

        <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"></div>
      </div> 

      {/* Main Content */}
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">

        {/* Profile Image */}
        <div className="mx-auto lg:mx-0">
          <div className="relative">

            <div className="absolute inset-0 scale-105 rounded-[2.5rem] bg-gradient-to-br from-cyan-400/30 to-violet-500/20 blur-2xl"></div>

            <Image
              src="/assests/images/hasini.jpg"
              alt="Koppuravuri Venkata Naga Sri Hasini"
              width={320}
              height={320}
              priority
              className="relative h-72 w-72 rounded-[2.5rem] border border-white/10 object-cover shadow-2xl shadow-cyan-950/40 sm:h-80 sm:w-80"
            />

          </div>
        </div>

        {/* Hero Text */}
        <div className="text-center lg:text-left">

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.35em] text-cyan-400">
            Hi, I'm
          </p>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Koppuravuri Venkata Naga Sri{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Hasini
            </span>
          </h1>

          <h2 className="mt-5 text-xl font-semibold text-slate-300 sm:text-2xl">
            AI &amp; ML Engineer
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 lg:mx-0 sm:text-lg">
            I build AI-powered applications, Machine Learning models, and
            modern web applications that solve real-world problems.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">

            {/* Resume */}
            <a
              href="/assests/images/resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              Download Resume
            </a>

            {/* Contact */}
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              Contact Me
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}