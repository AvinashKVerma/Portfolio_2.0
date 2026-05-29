"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 py-36">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,216,255,0.12),transparent_60%)]" />

      {/* Animated Grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Floating Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Main Content */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          viewport={{
            once: true,
          }}
          className="text-center"
        >
          {/* Label */}
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-cyan-400">Initialize Collaboration</p>

          {/* Heading */}
          <h2 className="mx-auto max-w-5xl text-5xl font-black leading-tight text-white md:text-7xl">
            Ready to build scalable digital products?
          </h2>

          {/* Subheading */}
          <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-slate-400 md:text-xl">
            Let’s collaborate on enterprise systems, scalable frontend architecture, and production-grade digital
            experiences.
          </p>

          {/* CTA Buttons */}
          <div className="mt-16 flex flex-col items-center justify-center gap-5 sm:flex-row">
            {/* Schedule Discussion */}
            <motion.a
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="mailto:your-email@example.com"
              className="group flex items-center gap-3 rounded-2xl bg-cyan-400 px-8 py-5 font-semibold text-black transition-all duration-300 hover:bg-cyan-300"
            >
              <Mail className="h-5 w-5" />

              <span>Schedule Discussion</span>

              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </motion.a>

            {/* Resume */}
            <motion.a
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="/resume.pdf"
              target="_blank"
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10"
            >
              <span>View Resume</span>

              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: 0.98,
              }}
              href="https://linkedin.com"
              target="_blank"
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-5 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10"
            >
              <FaLinkedin className="h-5 w-5" />

              <span>Connect on LinkedIn</span>

              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="mt-20 flex items-center justify-center gap-6">
            {/* GitHub */}
            <motion.a
              whileHover={{
                y: -6,
                scale: 1.08,
              }}
              href="https://github.com"
              target="_blank"
              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <FaGithub className="h-7 w-7" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{
                y: -6,
                scale: 1.08,
              }}
              href="https://linkedin.com"
              target="_blank"
              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <FaLinkedin className="h-7 w-7" />
            </motion.a>

            {/* Email */}
            <motion.a
              whileHover={{
                y: -6,
                scale: 1.08,
              }}
              href="mailto:your-email@example.com"
              className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-300 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
            >
              <Mail className="h-7 w-7" />
            </motion.a>
          </div>

          {/* Bottom Status */}
          <motion.div
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="mt-16 flex items-center justify-center gap-3 text-sm text-cyan-400"
          >
            <div className="h-2 w-2 rounded-full bg-cyan-400" />

            <span>Collaboration Systems Active</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
