"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootMessages = [
  "Initializing systems...",
  "Loading digital ecosystems...",
  "Connecting APIs...",
  "Deploying interface...",
  "Welcome Avinash Kr Verma",
];

export default function LoadingScreen() {
  const [messages, setMessages] = useState<string[]>([]);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      setMessages((prev) => [...prev, bootMessages[current]]);
      current++;

      if (current === bootMessages.length) {
        clearInterval(interval);

        setTimeout(() => {
          setHideLoader(true);
        }, 1500);
      }
    }, 700);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!hideLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden bg-[#050816]"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,216,255,0.15),transparent_60%)]" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="relative w-[90%] max-w-3xl rounded-2xl border border-cyan-500/20 bg-black/40 p-8 backdrop-blur-xl"
          >
            {/* Terminal Header */}
            <div className="mb-6 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />

              <div className="ml-4 text-xs tracking-[0.3em] text-cyan-400/70 uppercase">AVINASH.SYSTEMS</div>
            </div>

            {/* Terminal Body */}
            <div className="space-y-4 font-mono text-sm md:text-base">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="flex items-center gap-3 text-cyan-300"
                >
                  <span className="text-cyan-500">$</span>

                  <span>{msg}</span>
                </motion.div>
              ))}

              {/* Blinking Cursor */}
              {!hideLoader && (
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                  }}
                  className="mt-2 h-5 w-3 bg-cyan-400"
                />
              )}
            </div>

            {/* Bottom Glow Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 4,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 left-0 h-0.5 bg-cyan-400"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
