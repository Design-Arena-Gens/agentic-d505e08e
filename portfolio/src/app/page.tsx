"use client";

import { HeroScene } from "@/components/hero-scene";
import {
  collaborations,
  featureReels,
  heroStats,
  processChapters,
  techHighlights,
  testimonials,
} from "@/lib/data";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight, Play, Sparkle } from "lucide-react";

const editorialEase = [0.16, 1, 0.3, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: editorialEase },
  }),
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-[#EDEDED]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(0,209,255,0.16),_transparent_70%)] blur-2xl" />
        <div className="absolute right-[-10%] top-[45%] h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.12),_transparent_70%)] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-20 pt-12 sm:px-10 lg:pt-16">
        <motion.header
          className="flex items-center justify-between border-b border-white/10 pb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.58em] text-white/50">
              Video Editor · Visual Storyteller
            </p>
            <p className="mt-3 font-display text-2xl tracking-[0.2em] text-white">
              JESHUA DAVID
            </p>
          </div>
          <div className="hidden text-right md:block">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.5em] text-white/40">
              Based in Montreal
            </p>
            <p className="mt-3 text-xs text-white/50">
              Cutting narratives across film, fashion, and futures.
            </p>
          </div>
        </motion.header>

        <section className="relative grid flex-1 grid-cols-1 gap-12 py-14 lg:grid-cols-[1.05fr,0.95fr]">
          <motion.div
            className="flex flex-col justify-between gap-10"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <div>
              <motion.p
                className="font-mono text-xs uppercase tracking-[0.9em] text-[#00D1FF]/80"
                variants={fadeUp}
                custom={0}
              >
                Editorial Momentum
              </motion.p>
              <motion.h1
                className="mt-6 font-display text-4xl leading-tight tracking-[0.12em] text-white sm:text-5xl lg:text-6xl"
                variants={fadeUp}
                custom={1}
              >
                Cinematic narratives carved with architectural precision.
              </motion.h1>
              <motion.p
                className="mt-8 max-w-xl text-base leading-relaxed text-[#C7C7C7]"
                variants={fadeUp}
                custom={2}
              >
                I edit for emotional resonance—suspending time, bending rhythm,
                and threading 3D typography through frames so each cut feels
                inevitable. The result: editorial stories that glow with
                cinematic depth.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col gap-8 sm:flex-row sm:items-center"
              variants={fadeUp}
              custom={3}
            >
              <button className="group relative flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-3 font-mono text-xs uppercase tracking-[0.48em] text-white transition duration-300 hover:border-[#00D1FF]/70 hover:bg-[#00D1FF]/20">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-[#00D1FF]/10 transition group-hover:border-[#00D1FF]/60 group-hover:bg-[#00D1FF]/30">
                  <Play className="h-4 w-4 text-[#00D1FF]" />
                </span>
                Watch Showreel
              </button>
              <div className="grid grid-cols-3 gap-4">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/10 bg-black/60 p-4 text-center"
                  >
                    <p className="font-display text-2xl tracking-[0.08em] text-white">
                      {stat.value}
                    </p>
                    <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.4em] text-white/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <HeroScene />
          </motion.div>
        </section>

        <section className="relative mt-4 space-y-12 py-16">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-3xl tracking-[0.18em] text-white">
              FEATURE REELS
            </h2>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.48em] text-white/40">
              2023 — 2024
            </span>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {featureReels.map((reel, index) => (
              <motion.article
                key={reel.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                custom={index * 0.2}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-black to-black p-8 transition duration-500 hover:border-[#00D1FF]/50 hover:shadow-[0_0_120px_rgba(0,209,255,0.12)]"
              >
                <div>
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.48em] text-[#00D1FF]/70">
                    {reel.subtitle}
                  </p>
                  <h3 className="mt-5 font-display text-2xl tracking-[0.14em] text-white">
                    {reel.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#C7C7C7]">
                    {reel.description}
                  </p>
                </div>
                <div className="mt-6 space-y-4">
                  <ul className="flex flex-wrap gap-2">
                    {reel.disciplines.map((discipline) => (
                      <li
                        key={discipline}
                        className="rounded-full border border-white/10 px-4 py-1 text-[0.65rem] uppercase tracking-[0.4em] text-white/60"
                      >
                        {discipline}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.5em] text-white/40">
                      {reel.year}
                    </p>
                    <button className="inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.4em] text-[#00D1FF]/80 transition group-hover:text-[#00D1FF]">
                      View Narrative <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <span className="pointer-events-none absolute right-6 top-6 text-[#00D1FF]/20 transition group-hover:text-[#00D1FF]/40">
                  <Sparkle className="h-6 w-6" />
                </span>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="relative mt-10 grid gap-10 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#101010] via-[#0A0A0A] to-black p-10 lg:grid-cols-[0.9fr,1.1fr]">
          <div className="flex flex-col justify-between space-y-10">
            <div>
              <h2 className="font-display text-3xl tracking-[0.2em] text-white">
                PROCESS ARCHITECTURE
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#C7C7C7]">
                Each project moves through an editorial architecture that
                balances rhythm, typographic voice, and volumetric design. The
                framework is nimble—built for both fashion runways and deep
                documentary work.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {techHighlights.map((tool) => (
                <span
                  key={tool}
                  className="rounded-2xl border border-white/10 bg-black/50 px-5 py-3 text-center font-mono text-[0.6rem] uppercase tracking-[0.4em] text-white/50"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            {processChapters.map((chapter, index) => (
              <motion.div
                key={chapter.title}
                className="relative rounded-3xl border border-white/10 bg-black/40 p-6 transition hover:border-[#00D1FF]/60 hover:bg-[#0E1416]/70"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                variants={fadeUp}
                custom={index * 0.25}
              >
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.52em] text-[#00D1FF]/70">
                  Step {index + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl tracking-[0.14em] text-white">
                  {chapter.title}
                </h3>
                <p className="mt-3 text-sm text-[#C7C7C7]">
                  {chapter.description}
                </p>
                <p className="mt-4 text-xs text-[#828282]">
                  {chapter.deliverable}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="relative mt-16 grid gap-10 lg:grid-cols-[1.4fr,0.6fr]">
          <div className="space-y-6 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#151515] via-[#0C0C0C] to-black p-10">
            <h2 className="font-display text-3xl tracking-[0.22em] text-white">
              SELECTED COLLABORATIONS
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {collaborations.map((client) => (
                <motion.div
                  key={client}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-4"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="font-display text-lg tracking-[0.14em] text-white">
                    {client}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-white/30" />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-between gap-6 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#101010] via-[#080808] to-black p-10">
            <h2 className="font-display text-3xl tracking-[0.2em] text-white">
              VOICES
            </h2>
            <div className="space-y-6">
              {testimonials.map((testimonial) => (
                <motion.blockquote
                  key={testimonial.author}
                  className="rounded-2xl border border-white/10 bg-black/50 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="text-sm leading-relaxed text-[#C7C7C7]">
                    “{testimonial.quote}”
                  </p>
                  <footer className="mt-5">
                    <p className="font-display text-sm tracking-[0.16em] text-white">
                      {testimonial.author}
                    </p>
                    <p className="font-mono text-[0.6rem] uppercase tracking-[0.48em] text-white/40">
                      {testimonial.role}
                    </p>
                  </footer>
                </motion.blockquote>
              ))}
            </div>
          </div>
        </section>

        <motion.section
          className="relative mt-20 overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#101010] via-[#090909] to-black p-10 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,209,255,0.18),_transparent_70%)] blur-3xl" />
          <div className="relative space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.8em] text-[#00D1FF]/70">
              Let’s Cut Something Unforgettable
            </p>
            <h2 className="font-display text-4xl tracking-[0.2em] text-white">
              Ready for the next visual narrative?
            </h2>
            <p className="mx-auto max-w-xl text-sm text-[#C7C7C7]">
              Drop a line for collaborations, edit supervision, or sound-driven
              storytelling experiments. Jeshua responds within 24 hours with a
              tailored editorial plan.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                className="group inline-flex items-center gap-3 rounded-full border border-[#00D1FF]/40 bg-[#00D1FF]/10 px-8 py-3 font-mono text-xs uppercase tracking-[0.52em] text-[#00D1FF] transition hover:border-[#00D1FF]/80 hover:bg-[#00D1FF]/20"
                href="mailto:hello@jeshuadavid.studio"
              >
                hello@jeshuadavid.studio
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                className="inline-flex items-center gap-3 rounded-full border border-white/10 px-8 py-3 font-mono text-xs uppercase tracking-[0.52em] text-white/70 transition hover:border-white/40 hover:text-white"
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.section>

        <footer className="mt-16 border-t border-white/10 py-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Jeshua David. Editorial motion crafted
          with deliberate silence.
        </footer>
      </div>
    </main>
  );
}
