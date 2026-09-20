"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">

        {/* Logo */}
        <Link
          href="#home"
          aria-label="Go to home"
          className="text-xl font-black tracking-tight text-white"
          onClick={closeMenu}
        >
          HASINI<span className="text-cyan-400">.</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-2xl text-white transition hover:border-cyan-400/50 hover:bg-cyan-400/10 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute left-0 right-0 top-full flex-col gap-2 border-b border-white/10 bg-slate-950 px-5 py-5 shadow-2xl md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <Link
            href="#home"
            onClick={closeMenu}
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-400 md:px-0 md:hover:bg-transparent"
          >
            Home
          </Link>

          <Link
            href="#about"
            onClick={closeMenu}
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-400 md:px-0 md:hover:bg-transparent"
          >
            About
          </Link>

          <Link
            href="#education"
            onClick={closeMenu}
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-400 md:px-0 md:hover:bg-transparent"
          >
            Education
          </Link>

          <Link
            href="#skills"
            onClick={closeMenu}
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-400 md:px-0 md:hover:bg-transparent"
          >
            Skills
          </Link>

          <Link
            href="#projects"
            onClick={closeMenu}
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-400 md:px-0 md:hover:bg-transparent"
          >
            Projects
          </Link>

          <Link
            href="#experience"
            onClick={closeMenu}
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-400 md:px-0 md:hover:bg-transparent"
          >
            Experience
          </Link>

          <Link
            href="#achievements"
            onClick={closeMenu}
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-400 md:px-0 md:hover:bg-transparent"
          >
            Achievements
          </Link>

          <Link
            href="#contact"
            onClick={closeMenu}
            className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-400 md:px-0 md:hover:bg-transparent"
          >
            Contact
          </Link>
        </div>

      </nav>
    </header>
  );
}