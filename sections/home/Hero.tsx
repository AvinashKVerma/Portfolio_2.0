"use client";

import { motion } from "framer-motion";
import GridBackground from "@/components/3d/GridBackground";
import FloatingParticles from "@/components/3d/FloatingParticles";
import NetworkLines from "@/components/3d/NetworkLines";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816] px-6">
      {/* Background Layers */}
      <GridBackground />
      <FloatingParticles />
      <NetworkLines />

      {/* Glow Effects */}
      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute right-0 top-0 h-75 w-75 rounded-full bg-violet-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
          }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm tracking-[0.25em] text-cyan-300 uppercase backdrop-blur-xl"
        >
          Digital Systems Architect
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="text-5xl font-black leading-tight tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          I BUILD
          <span className="block bg-linear-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
            SCALABLE DIGITAL
          </span>
          ECOSYSTEMS
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-slate-300 md:text-xl"
        >
          Full Stack Developer specializing in React.js, Next.js, Node.js, scalable frontend architecture, and
          enterprise systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button className="rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-300">
            Explore Systems
          </button>

          <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/40 hover:bg-cyan-400/10">
            View Architecture
          </button>
        </motion.div>

        {/* Bottom Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 1,
          }}
          className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {["Government Systems", "Enterprise HRMS", "SSR/SSG Platforms", "Scalable UI Architecture"].map(
            (item, index) => (
              <div key={index} className="rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur-xl">
                <div className="text-sm text-slate-300">{item}</div>
              </div>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
