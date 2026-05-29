"use client";

import { motion } from "framer-motion";
import { Cpu, Layers3, Rocket, Boxes } from "lucide-react";

const principles = [
  {
    icon: Cpu,
    title: "Scalable Systems",
    description: "Building frontend architectures designed for long-term scalability and production growth.",
  },

  {
    icon: Layers3,
    title: "Reusable Architecture",
    description: "Creating modular component systems and maintainable frontend infrastructure.",
  },

  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Optimizing rendering, workflows, accessibility, and production delivery pipelines.",
  },

  {
    icon: Boxes,
    title: "Enterprise Mindset",
    description: "Engineering production-grade digital ecosystems for enterprise and government platforms.",
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#050816] px-6 py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,216,255,0.08),transparent_60%)]" />

      {/* Grid */}
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

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">Engineer Mindset</p>

          <h2 className="mx-auto max-w-5xl text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
            I focus on building scalable, maintainable, and production-grade systems with strong frontend architecture,
            performance optimization, and reusable design systems.
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-slate-400">
            My engineering approach combines scalable frontend systems, reusable architecture, enterprise workflows,
            accessibility, and production-grade user experiences.
          </p>
        </motion.div>

        {/* Principles */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <motion.div
                key={principle.title}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group relative overflow-hidden rounded-[32px] border border-cyan-400/10 bg-white/5 p-8 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/20"
              >
                {/* Glow */}
                <div className="absolute -right-7.5 -top-7.5 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

                {/* Icon */}
                <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-cyan-400">
                  <Icon className="h-8 w-8" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white">{principle.title}</h3>

                <p className="mt-5 leading-relaxed text-slate-400">{principle.description}</p>

                {/* Status */}
                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="mt-8 flex items-center gap-3 text-sm text-cyan-400"
                >
                  <div className="h-2 w-2 rounded-full bg-cyan-400" />

                  <span>Engineering Principle Active</span>
                </motion.div>

                {/* Border Overlay */}
                <div className="absolute inset-0 rounded-[32px] border border-white/5" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
