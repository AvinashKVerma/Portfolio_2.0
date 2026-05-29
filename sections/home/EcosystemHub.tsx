"use client";

import { motion } from "framer-motion";
import {
  Newspaper,
  BriefcaseBusiness,
  Building2,
  ArrowUpRight,
  Play,
  Radio,
  Mic2,
  Languages,
  ShieldCheck,
  Database,
  Activity,
  Users,
  Wallet,
  MapPinned,
} from "lucide-react";

const ecosystems = [
  {
    id: 1,
    title: "MEDIA ECOSYSTEM",
    subtitle: "NEWS PLATFORM",
    icon: Newspaper,
    theme: "from-cyan-500/20 to-blue-500/5",
    border: "border-cyan-400/20",
    glow: "shadow-cyan-500/20",
    accent: "text-cyan-400",

    description:
      "SSR-powered bilingual media platform with dynamic publishing, SEO optimization, live TV systems, and immersive content delivery.",

    features: ["SSR ENABLED", "SSG OPTIMIZED", "CORE WEB VITALS PASSED"],

    modules: [
      {
        icon: Play,
        label: "Live TV",
      },
      {
        icon: Mic2,
        label: "Podcasts",
      },
      {
        icon: Radio,
        label: "Reels",
      },
      {
        icon: Languages,
        label: "Hindi ↔ English",
      },
    ],
  },

  {
    id: 2,
    title: "ENTERPRISE ECOSYSTEM",
    subtitle: "HRMS PLATFORM",
    icon: BriefcaseBusiness,
    theme: "from-violet-500/20 to-indigo-500/5",
    border: "border-violet-400/20",
    glow: "shadow-violet-500/20",
    accent: "text-violet-400",

    description:
      "Enterprise-grade HRMS architecture with RBAC, payroll workflows, analytics dashboards, and scalable operational systems.",

    features: ["RBAC ARCHITECTURE", "JWT AUTH SYSTEM", "SCALABLE WORKFLOWS"],

    modules: [
      {
        icon: Users,
        label: "Employee Management",
      },
      {
        icon: Wallet,
        label: "Payroll",
      },
      {
        icon: ShieldCheck,
        label: "RBAC",
      },
      {
        icon: Database,
        label: "MongoDB",
      },
    ],
  },

  {
    id: 3,
    title: "REAL ESTATE ECOSYSTEM",
    subtitle: "PROPERTY CONSULTING",
    icon: Building2,
    theme: "from-yellow-500/20 to-orange-500/5",
    border: "border-yellow-400/20",
    glow: "shadow-yellow-500/20",
    accent: "text-yellow-400",

    description:
      "Luxury property consulting experience with cinematic UI systems, premium interactions, immersive showcases, and modern architecture aesthetics.",

    features: ["LUXURY EXPERIENCE", "CINEMATIC SCROLLING", "PREMIUM UI SYSTEM"],

    modules: [
      {
        icon: MapPinned,
        label: "Ranchi",
      },
      {
        icon: Building2,
        label: "Luxury Residences",
      },
      {
        icon: Activity,
        label: "Investment Spaces",
      },
      {
        icon: ArrowUpRight,
        label: "Commercial Projects",
      },
    ],
  },
];

export default function EcosystemHub() {
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
        {/* Section Header */}
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
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">Interactive Digital Worlds</p>

          <h2 className="text-4xl font-black text-white md:text-6xl">DIGITAL ECOSYSTEMS</h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Exploring scalable systems across media, enterprise workflows, and luxury digital experiences.
          </p>
        </motion.div>

        {/* Ecosystem Worlds */}
        <div className="grid gap-10 lg:grid-cols-3">
          {ecosystems.map((ecosystem, index) => {
            const Icon = ecosystem.icon;

            return (
              <motion.div
                key={ecosystem.id}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -15,
                  scale: 1.02,
                }}
                className={`group relative overflow-hidden rounded-[32px] border bg-linear-to-br ${ecosystem.theme} ${ecosystem.border} ${ecosystem.glow} p-8 backdrop-blur-2xl transition-all duration-500`}
              >
                {/* Glow Orb */}
                <div className="absolute -right-10px -top-10px h-40 w-40 rounded-full bg-white/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

                {/* Floating Orb */}
                <motion.div
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-10 flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                  <Icon className={`h-10 w-10 ${ecosystem.accent}`} />
                </motion.div>

                {/* Top */}
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{ecosystem.title}</p>

                  <h3 className="mt-4 text-3xl font-black text-white">{ecosystem.subtitle}</h3>

                  <p className="mt-6 leading-relaxed text-slate-400">{ecosystem.description}</p>
                </div>

                {/* Features */}
                <div className="mt-10 space-y-3">
                  {ecosystem.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm font-medium text-white backdrop-blur-xl"
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Modules */}
                <div className="mt-10 grid grid-cols-2 gap-4">
                  {ecosystem.modules.map((module) => {
                    const ModuleIcon = module.icon;

                    return (
                      <motion.div
                        key={module.label}
                        whileHover={{
                          scale: 1.05,
                        }}
                        className="rounded-2xl border border-white/5 bg-black/20 p-4 backdrop-blur-xl transition-all duration-300 hover:border-white/20"
                      >
                        <ModuleIcon className={`mb-3 h-5 w-5 ${ecosystem.accent}`} />

                        <p className="text-sm text-slate-300">{module.label}</p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Bottom CTA */}
                <motion.div
                  whileHover={{
                    x: 5,
                  }}
                  className="mt-12 flex items-center gap-3 text-white"
                >
                  <span className="font-semibold">Explore Ecosystem</span>

                  <ArrowUpRight className="h-5 w-5" />
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
