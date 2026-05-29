"use client";

import { motion } from "framer-motion";
import { Building2, Database, Boxes, Workflow, ShieldCheck, Layers3, Cpu, ArrowRight, Cloud } from "lucide-react";

const experiences = [
  {
    company: "Sparrow Softech Pvt. Ltd",
    role: "Programmer",
    duration: "Feb 2026 — Present",

    theme: {
      glow: "shadow-violet-500/20",
      border: "border-violet-400/20",
      text: "text-violet-400",
      gradient: "from-violet-500/20 to-cyan-500/5",
    },

    description:
      "Contributing to a large-scale government citizen service platform using DIGIT (UPYOG) micro-frontend architecture, scalable React.js systems, and reusable component libraries.",

    highlights: [
      "DIGIT (UPYOG) Micro Frontends",
      "20+ Shared Components",
      "Government Citizen Platform",
      "WCAG Accessibility",
      "Large Dataset Optimization",
      "Client-side Caching",
    ],

    modules: [
      {
        icon: Layers3,
        title: "DIGIT MFE",
        description: "Modular micro-frontend architecture for scalable government systems.",
      },

      {
        icon: Boxes,
        title: "Shared Components",
        description: "Reusable forms, workflow widgets, and data systems.",
      },

      {
        icon: ShieldCheck,
        title: "Accessibility",
        description: "WCAG-compliant citizen-facing interfaces.",
      },

      {
        icon: Cpu,
        title: "Performance",
        description: "Client-side caching and rendering optimization.",
      },
    ],

    logs: [
      "[SYSTEM] Initializing citizen infrastructure...",
      "[API] Connecting government workflows...",
      "[SUCCESS] DIGIT modules deployed successfully.",
    ],
  },

  {
    company: "Uinfo Technology Pvt. Ltd",
    role: "Software Engineer",
    duration: "Oct 2022 — Sep 2025",

    theme: {
      glow: "shadow-cyan-500/20",
      border: "border-cyan-400/20",
      text: "text-cyan-400",
      gradient: "from-cyan-500/20 to-emerald-500/5",
    },

    description:
      "Built enterprise-grade HRMS systems with RBAC security, Redis optimization, CI/CD automation, and scalable workflow-driven architecture.",

    highlights: [
      "HRMS Architecture",
      "Bilingual News Platform",
      "SSR / SSG",
      "RBAC Security",
      "AWS CI/CD",
      "Reusable Components",
    ],

    modules: [
      {
        icon: Workflow,
        title: "HRMS Systems",
        description: "Payroll, attendance, leave management, and employee workflows.",
      },

      {
        icon: Database,
        title: "REST APIs",
        description: "Production-grade API integration and scalable frontend workflows.",
      },

      {
        icon: Cloud,
        title: "AWS CI/CD",
        description: "Automated deployment pipelines using EC2 and Amplify.",
      },

      {
        icon: Cpu,
        title: "News Platform",
        description: "SSR/SSG-powered bilingual media platform with dynamic content delivery.",
      },
    ],

    logs: [
      "[SYSTEM] Initializing enterprise workflows...",
      "[DEPLOY] AWS pipelines activated...",
      "[SUCCESS] HRMS systems deployed successfully.",
    ],
  },
];

export default function ExperienceTimeline() {
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
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">Deployment Journey</p>

          <h2 className="text-4xl font-black text-white md:text-6xl">EXPERIENCE TIMELINE</h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Building scalable systems across enterprise, government, and production-grade platforms.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Infrastructure Line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-linear-to-b from-cyan-400 via-violet-500 to-transparent lg:block" />

          <div className="space-y-32">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.company}
                initial={{
                  opacity: 0,
                  y: 80,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                viewport={{
                  once: true,
                }}
                className={`relative grid items-center gap-14 lg:grid-cols-2 ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 top-16 hidden h-8 w-8 -translate-x-1/2 rounded-full border border-white/20 bg-[#050816] lg:block">
                  <motion.div
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className={`absolute inset-0 rounded-full bg-linear-to-r ${experience.theme.gradient}`}
                  />
                </div>

                {/* Left Content */}
                <div
                  className={`rounded-[32px] border bg-linear-to-br ${experience.theme.gradient} ${experience.theme.border} ${experience.theme.glow} p-8 backdrop-blur-2xl`}
                >
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className={`text-sm uppercase tracking-[0.35em] ${experience.theme.text}`}>
                        {experience.duration}
                      </p>

                      <h3 className="mt-4 text-4xl font-black text-white">{experience.company}</h3>

                      <p className="mt-3 text-lg text-slate-400">{experience.role}</p>
                    </div>

                    <div className={`rounded-2xl border border-white/10 bg-black/20 p-4 ${experience.theme.text}`}>
                      <Building2 className="h-8 w-8" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-8 leading-relaxed text-slate-400">{experience.description}</p>

                  {/* Highlights */}
                  <div className="mt-10 flex flex-wrap gap-3">
                    {experience.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-xl"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>

                  {/* Deployment Logs */}
                  <div className="mt-10 rounded-3xl border border-white/5 bg-black/30 p-6 font-mono text-sm backdrop-blur-xl">
                    <div className="space-y-3">
                      {experience.logs.map((log, logIndex) => (
                        <motion.div
                          key={log}
                          animate={{
                            opacity: [0.4, 1, 0.4],
                          }}
                          transition={{
                            duration: 2,
                            delay: logIndex * 0.5,
                            repeat: Infinity,
                          }}
                          className={
                            logIndex === 0 ? "text-cyan-400" : logIndex === 1 ? "text-violet-400" : "text-emerald-400"
                          }
                        >
                          {log}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Modules */}
                <div className="grid gap-6 sm:grid-cols-2">
                  {experience.modules.map((module) => {
                    const Icon = module.icon;

                    return (
                      <motion.div
                        key={module.title}
                        whileHover={{
                          y: -10,
                          scale: 1.03,
                        }}
                        className={`group rounded-[28px] border bg-white/5 p-6 backdrop-blur-2xl transition-all duration-500 ${experience.theme.border}`}
                      >
                        {/* Icon */}
                        <div
                          className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/20 ${experience.theme.text}`}
                        >
                          <Icon className="h-8 w-8" />
                        </div>

                        {/* Content */}
                        <h4 className="text-xl font-bold text-white">{module.title}</h4>

                        <p className="mt-4 text-sm leading-relaxed text-slate-400">{module.description}</p>

                        {/* Status */}
                        <motion.div
                          animate={{
                            x: [0, 8, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                          className={`mt-6 flex items-center gap-2 text-sm ${experience.theme.text}`}
                        >
                          <span>System Active</span>

                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
