"use client";

import Script from "next/script";
import { useState } from "react";

declare global {
  interface Window {
    emailjs: {
      init: (options: { publicKey: string }) => void;
      sendForm: (
        serviceID: string,
        templateID: string,
        form: HTMLFormElement
      ) => Promise<unknown>;
    };
  }
}

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleEmailJSLoad = () => {
    if (typeof window !== "undefined" && window.emailjs) {
      window.emailjs.init({
        publicKey: "4qUAFsV3NwAaNaGmi",
      });
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setStatus("Sending...");

    const form = event.currentTarget;

    try {
      /*
       * Replace these two values with the values
       * from your EmailJS dashboard.
       */
      const serviceID = "service_9jo2rhn";
      const templateID = "template_vtr0554";

      if (!window.emailjs) {
        setStatus("Email service is not loaded. Please try again.");
        return;
      }

      await window.emailjs.sendForm(
        serviceID,
        templateID,
        form
      );

      setStatus("Message sent successfully!");

      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <>
      {/* EmailJS */}
      <Script
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
        strategy="afterInteractive"
        onLoad={handleEmailJSLoad}
      />

      {/* Contact Section */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-white/5 bg-slate-900/30 px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">

          {/* Contact Information */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Let&apos;s Connect
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-400">
              I&apos;m always excited to discuss new opportunities, collaborate
              on innovative projects, or simply connect with fellow developers.
              Feel free to reach out!
            </p>

            <div className="mt-8 space-y-5">

              {/* Email */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Email
                </p>

                <a
                  href="mailto:balasrihasinikoppuruvuri@gmail.com"
                  className="mt-2 block break-all text-slate-200 transition hover:text-cyan-300"
                >
                  balasrihasinikoppuruvuri@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Phone
                </p>

                <a
                  href="tel:+918309839144"
                  className="mt-2 block text-slate-200 transition hover:text-cyan-300"
                >
                  +91 8309839144
                </a>
              </div>

              {/* Location */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                  Location
                </p>

                <p className="mt-2 text-slate-200">
                  India
                </p>
              </div>

            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap gap-3">

              {/* GitHub */}
              <a
                href="https://github.com/hasini-1"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/bala-sri-hasini-koppuravuri-483327338/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                LinkedIn
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/Hasini_Kopp07"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                Twitter
              </a>

            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-2xl sm:p-9">

            <h2 className="text-2xl font-black text-white">
              Contact Me
            </h2>

            <p className="mt-2 text-slate-400">
              Have a project or opportunity? Send me a message.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-7 space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-400/10"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-400/10"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter a subject"
                  required
                  className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-400/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-4 focus:ring-cyan-400/10"
                />
              </div>

              {/* Send Button */}
              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-400 px-6 py-3.5 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Send Message
              </button>

              {/* Status */}
              {status && (
                <p className="text-center text-sm text-cyan-300">
                  {status}
                </p>
              )}

            </form>
          </div>
        </div>
      </section>
    </>
  );
}