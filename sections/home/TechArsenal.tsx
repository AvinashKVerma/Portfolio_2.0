"use client";

import { motion } from "framer-motion";

const stackGroups = [
  {
    title: "FRONTEND SYSTEMS",

    color: {
      border: "border-cyan-400/20",
      glow: "shadow-cyan-500/20",
      text: "text-cyan-400",
      gradient: "from-cyan-500/20 to-blue-500/5",
      progress: "from-cyan-400 to-blue-500",
    },

    technologies: [
      {
        name: "React.js",
        level: "95%",
      },

      {
        name: "Next.js SSR/SSG",
        level: "92%",
      },

      {
        name: "DIGIT Micro Frontends",
        level: "88%",
      },

      {
        name: "Reusable Component Systems",
        level: "94%",
      },
    ],
  },

  {
    title: "BACKEND & APIs",

    color: {
      border: "border-violet-400/20",
      glow: "shadow-violet-500/20",
      text: "text-violet-400",
      gradient: "from-violet-500/20 to-indigo-500/5",
      progress: "from-violet-400 to-indigo-500",
    },

    technologies: [
      {
        name: "REST API Integration",
        level: "90%",
      },

      {
        name: "JWT Authentication",
        level: "88%",
      },

      {
        name: "RBAC Architecture",
        level: "86%",
      },

      {
        name: "Enterprise Workflows",
        level: "91%",
      },
    ],
  },

  {
    title: "DATABASE & CLOUD",

    color: {
      border: "border-emerald-400/20",
      glow: "shadow-emerald-500/20",
      text: "text-emerald-400",
      gradient: "from-emerald-500/20 to-teal-500/5",
      progress: "from-emerald-400 to-teal-500",
    },

    technologies: [
      {
        name: "MongoDB",
        level: "82%",
      },

      {
        name: "AWS EC2 / Amplify",
        level: "78%",
      },

      {
        name: "CI/CD Pipelines",
        level: "80%",
      },

      {
        name: "Production Deployments",
        level: "90%",
      },
    ],
  },
];

export default function TechArsenal() {
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
          className="mb-24 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">Production Technology Stack</p>

          <h2 className="text-4xl font-black text-white md:text-6xl">TECHNOLOGY ARSENAL</h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Production technologies powering scalable digital ecosystems and enterprise architectures.
          </p>
        </motion.div>

        {/* Stack Grid */}
        <div className="grid gap-10 lg:grid-cols-3">
          {stackGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: groupIndex * 0.2,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className={`group relative overflow-hidden rounded-[32px] border bg-linear-to-br ${group.color.gradient} ${group.color.border} ${group.color.glow} p-8 backdrop-blur-2xl transition-all duration-500`}
            >
              {/* Glow */}
              <div className="absolute -right-12.5 -top-12.5 h-48 w-48 rounded-full bg-white/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

              {/* Header */}
              <div className="relative z-10">
                <p className={`text-sm uppercase tracking-[0.35em] ${group.color.text}`}>{group.title}</p>

                <div className="mt-6 h-px w-full bg-white/10" />
              </div>

              {/* Technologies */}
              <div className="mt-10 space-y-8">
                {group.technologies.map((technology, techIndex) => (
                  <div key={technology.name}>
                    {/* Top */}
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-medium text-white">{technology.name}</span>

                      <span className={`text-sm ${group.color.text}`}>{technology.level}</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-3 overflow-hidden rounded-full bg-black/30">
                      <motion.div
                        initial={{
                          width: 0,
                        }}
                        whileInView={{
                          width: technology.level,
                        }}
                        transition={{
                          duration: 1,
                          delay: groupIndex * 0.2 + techIndex * 0.1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        className={`h-full rounded-full bg-linear-to-r ${group.color.progress}`}
                      />

                      {/* Pulse */}
                      <motion.div
                        animate={{
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="absolute inset-0 bg-white/10"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <motion.div
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className={`mt-12 flex items-center gap-3 text-sm ${group.color.text}`}
              >
                <div className={`h-2 w-2 rounded-full ${group.color.text.replace("text", "bg")}`} />

                <span>Systems Operational</span>
              </motion.div>

              {/* Border Overlay */}
              <div className="absolute inset-0 rounded-[32px] border border-white/5" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
