"use client";

import { motion } from "framer-motion";
import ArchitectureFlow from "./ArchitectureFlow";

type ArchitectureCardProps = {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  flow: string[];

  theme: {
    border: string;
    glow: string;
    gradient: string;
    text: string;
  };
};

export default function ArchitectureCard({ title, subtitle, icon: Icon, flow, theme }: ArchitectureCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      className={`group relative overflow-hidden rounded-[32px] border bg-linear-to-br ${theme.gradient} ${theme.border} ${theme.glow} p-8 backdrop-blur-2xl transition-all duration-500`}
    >
      {/* Glow */}
      <div className="absolute -right-12.5 -top-12.5 h-48 w-48 rounded-full bg-white/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

      {/* Top */}
      <div className="relative z-10">
        <div
          className={`mb-8 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-black/20 ${theme.text}`}
        >
          <Icon className="h-10 w-10" />
        </div>

        <p className={`text-sm uppercase tracking-[0.35em] ${theme.text}`}>{subtitle}</p>

        <h3 className="mt-4 text-3xl font-black text-white">{title}</h3>
      </div>

      {/* Flow */}
      <ArchitectureFlow flow={flow} color={theme.text.replace("text", "bg")} />

      {/* Footer */}
      <motion.div
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className={`mt-10 flex items-center gap-3 text-sm ${theme.text}`}
      >
        <div className={`h-2 w-2 rounded-full ${theme.text.replace("text", "bg")}`} />

        <span>Architecture Active</span>
      </motion.div>

      {/* Border Overlay */}
      <div className="absolute inset-0 rounded-[32px] border border-white/5" />
    </motion.div>
  );
}
