export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-5 py-8 text-center text-sm text-slate-500">
      <p>
        © 2026 Koppuravuri Venkata Naga Sri Hasini. All Rights Reserved.
      </p>

      <div className="mt-3 flex justify-center gap-5">
        <a
          href="https://github.com/hasini-1"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-cyan-300"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/bala-sri-hasini-koppuravuri-483327338/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-cyan-300"
        >
          LinkedIn
        </a>

        <a
          href="mailto:balasrihasinikoppuravuri@gmail.com"
          className="transition hover:text-cyan-300"
        >
          Email
        </a>
      </div>
    </footer>
  );
}