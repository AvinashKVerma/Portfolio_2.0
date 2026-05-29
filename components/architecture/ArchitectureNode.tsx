"use client";

import { motion } from "framer-motion";

type ArchitectureNodeProps = {
  label: string;
  color: string;
  delay: number;
};

export default function ArchitectureNode({ label, color, delay }: ArchitectureNodeProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
      }}
      className="relative z-10 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 backdrop-blur-xl"
    >
      <div className="flex items-center justify-between">
        <span className="font-medium text-white">{label}</span>

        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay,
          }}
          className={`h-3 w-3 rounded-full ${color}`}
        />
      </div>
    </motion.div>
  );
}
