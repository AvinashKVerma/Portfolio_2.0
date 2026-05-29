"use client";

import { motion } from "framer-motion";
import { Boxes, BriefcaseBusiness, Server, ShieldCheck, Cpu, Cloud } from "lucide-react";

const metrics = [
  {
    title: "20+",
    subtitle: "Shared Components Built",

    icon: Boxes,

    description: "Reusable frontend systems including forms, workflow widgets, data tables, and scalable UI modules.",

    color: {
      border: "border-cyan-400/20",
      glow: "shadow-cyan-500/20",
      text: "text-cyan-400",
      gradient: "from-cyan-500/20 to-blue-500/5",
    },
  },

  {
    title: "3+",
    subtitle: "Years Production Experience",

    icon: BriefcaseBusiness,

    description: "Building scalable frontend architectures, enterprise systems, and production-grade applications.",

    color: {
      border: "border-violet-400/20",
      glow: "shadow-violet-500/20",
      text: "text-violet-400",
      gradient: "from-violet-500/20 to-indigo-500/5",
    },
  },

  {
    title: "HRMS",
    subtitle: "Enterprise Workforce Systems",

    icon: ShieldCheck,

    description:
      "Payroll, attendance, RBAC workflows, employee lifecycle systems, and scalable dashboard architecture.",

    color: {
      border: "border-emerald-400/20",
      glow: "shadow-emerald-500/20",
      text: "text-emerald-400",
      gradient: "from-emerald-500/20 to-teal-500/5",
    },
  },

  {
    title: "DIGIT",
    subtitle: "Government Citizen Platforms",

    icon: Server,

    description: "Large-scale government systems built using DIGIT (UPYOG) micro-frontend architecture.",

    color: {
      border: "border-orange-400/20",
      glow: "shadow-orange-500/20",
      text: "text-orange-400",
      gradient: "from-orange-500/20 to-yellow-500/5",
    },
  },

  {
    title: "SSR/SSG",
    subtitle: "Media Delivery Systems",

    icon: Cpu,

    description: "Production Next.js media systems optimized for SEO, Core Web Vitals, and dynamic rendering.",

    color: {
      border: "border-pink-400/20",
      glow: "shadow-pink-500/20",
      text: "text-pink-400",
      gradient: "from-pink-500/20 to-rose-500/5",
    },
  },

  {
    title: "AWS",
    subtitle: "CI/CD Pipelines",

    icon: Cloud,

    description: "Automated deployment workflows using AWS EC2, Amplify, GitHub, and scalable delivery systems.",

    color: {
      border: "border-sky-400/20",
      glow: "shadow-sky-500/20",
      text: "text-sky-400",
      gradient: "from-sky-500/20 to-cyan-500/5",
    },
  },
];

export default function LiveMetrics() {
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
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">Live Production Telemetry</p>

          <h2 className="text-4xl font-black text-white md:text-6xl">LIVE METRICS</h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Real-world systems, scalable architectures, enterprise workflows, and deployment infrastructure.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <motion.div
                key={metric.subtitle}
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
                  delay: index * 0.1,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className={`group relative overflow-hidden rounded-[32px] border bg-linear-to-br ${metric.color.gradient} ${metric.color.border} ${metric.color.glow} p-8 backdrop-blur-2xl transition-all duration-500`}
              >
                {/* Glow */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

                {/* Top */}
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <motion.h3
                      animate={{
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className={`text-5xl font-black ${metric.color.text}`}
                    >
                      {metric.title}
                    </motion.h3>

                    <p className="mt-4 text-xl font-bold text-white">{metric.subtitle}</p>
                  </div>

                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/20 ${metric.color.text}`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>
                </div>

                {/* Description */}
                <p className="mt-8 leading-relaxed text-slate-400">{metric.description}</p>

                {/* Bottom Status */}
                <motion.div
                  animate={{
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className={`mt-10 flex items-center gap-3 text-sm ${metric.color.text}`}
                >
                  <div className={`h-2 w-2 rounded-full ${metric.color.text.replace("text", "bg")}`} />

                  <span>Production Systems Active</span>
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
