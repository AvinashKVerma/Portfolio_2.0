"use client";

import { motion } from "framer-motion";
import { Building2, Newspaper, BriefcaseBusiness } from "lucide-react";

import ArchitectureCard from "@/components/architecture/ArchitectureCard";

const architectures = [
  {
    title: "Government Platform",
    subtitle: "DIGIT Citizen Service Infrastructure",

    icon: Building2,

    theme: {
      border: "border-violet-400/20",
      glow: "shadow-violet-500/20",
      gradient: "from-violet-500/20 to-cyan-500/5",
      text: "text-violet-400",
    },

    flow: ["Citizen App", "DIGIT MFE", "REST APIs", "Caching Layer", "Database"],
  },

  {
    title: "News Platform",
    subtitle: "SSR Media Delivery Architecture",

    icon: Newspaper,

    theme: {
      border: "border-cyan-400/20",
      glow: "shadow-cyan-500/20",
      gradient: "from-cyan-500/20 to-blue-500/5",
      text: "text-cyan-400",
    },

    flow: ["Next.js SSR", "SEO Engine", "Content APIs", "Analytics", "AdSense"],
  },

  {
    title: "HRMS",
    subtitle: "Enterprise Workforce System",

    icon: BriefcaseBusiness,

    theme: {
      border: "border-emerald-400/20",
      glow: "shadow-emerald-500/20",
      gradient: "from-emerald-500/20 to-teal-500/5",
      text: "text-emerald-400",
    },

    flow: ["Frontend Dashboard", "JWT Auth", "RBAC", "Payroll APIs", "MongoDB"],
  },
  {
    title: "Property Consulting",
    subtitle: "Luxury Real Estate Experience",

    icon: Newspaper,

    theme: {
      border: "border-yellow-400/20",
      glow: "shadow-yellow-500/20",
      gradient: "from-yellow-500/20 to-orange-500/5",
      text: "text-yellow-400",
    },

    flow: ["Luxury Frontend", "Interactive Maps", "Property APIs", "Investment Dashboard", "Premium UI System"],
  },
];

export default function ArchitecturePreview() {
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
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">Systems Engineering</p>

          <h2 className="text-4xl font-black text-white md:text-6xl">SYSTEM ARCHITECTURE</h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-400">
            Interactive architecture maps representing scalable production systems and enterprise workflows.
          </p>
        </motion.div>

        {/* Architecture Grid */}
        <div className="grid gap-10 lg:grid-cols-3">
          {architectures.map((architecture, index) => (
            <motion.div
              key={architecture.title}
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
                delay: index * 0.2,
              }}
              viewport={{
                once: true,
              }}
            >
              <ArchitectureCard
                title={architecture.title}
                subtitle={architecture.subtitle}
                icon={architecture.icon}
                flow={architecture.flow}
                theme={architecture.theme}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
