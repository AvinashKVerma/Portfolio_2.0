"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type EcosystemCardProps = {
  title: string;
  subtitle: string;
  description: string;
  href: string;
  color: "cyan" | "violet" | "gold";
};

const glowMap = {
  cyan: "from-cyan-400/20 to-cyan-600/5 border-cyan-400/20",
  violet: "from-violet-400/20 to-violet-600/5 border-violet-400/20",
  gold: "from-yellow-400/20 to-yellow-600/5 border-yellow-400/20",
};

export default function EcosystemCard({ title, subtitle, description, href, color }: EcosystemCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <Link href={href}>
        <div
          className={`group relative overflow-hidden rounded-3xl border bg-linear-to-br p-8 backdrop-blur-xl transition-all duration-500 ${glowMap[color]}`}
        >
          {/* Glow */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
          </div>

          {/* Floating Orb */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="mb-10 h-24 w-24 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
          />

          {/* Content */}
          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{title}</p>

            <h3 className="mt-4 text-3xl font-bold text-white">{subtitle}</h3>

            <p className="mt-6 leading-relaxed text-slate-400">{description}</p>

            {/* CTA */}
            <div className="mt-10 flex items-center gap-3 text-white">
              <span className="font-medium">Explore System</span>

              <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>

          {/* Border Glow */}
          <div className="absolute inset-0 rounded-3xl border border-white/5" />
        </div>
      </Link>
    </motion.div>
  );
}
