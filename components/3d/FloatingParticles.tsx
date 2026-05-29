"use client";

import { motion } from "framer-motion";

const particles = [
  { left: "10%", top: "20%", size: 6, duration: 6 },
  { left: "25%", top: "60%", size: 8, duration: 8 },
  { left: "40%", top: "30%", size: 5, duration: 7 },
  { left: "55%", top: "75%", size: 7, duration: 9 },
  { left: "70%", top: "40%", size: 4, duration: 6 },
  { left: "85%", top: "15%", size: 9, duration: 10 },
  { left: "15%", top: "85%", size: 5, duration: 7 },
  { left: "35%", top: "50%", size: 6, duration: 8 },
  { left: "60%", top: "10%", size: 8, duration: 9 },
  { left: "90%", top: "70%", size: 5, duration: 6 },
];

export default function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-cyan-400/40"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
}
