"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import useTerminal from "./useTerminal";
import { terminalCommands } from "./TerminalCommands";

export default function Terminal() {
  const { open, setOpen } = useTerminal();

  const [command, setCommand] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const handleCommand = () => {
    const normalized = command.trim().toLowerCase();

    const output = terminalCommands[normalized] || `Command not found: ${command}`;

    setHistory((prev) => [...prev, `> ${command}`, output]);

    setCommand("");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 z-9999 bg-black/80 backdrop-blur-2xl"
        >
          {/* Terminal Window */}
          <motion.div
            initial={{
              y: 40,
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            exit={{
              y: 20,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="mx-auto mt-20 w-[95%] max-w-5xl overflow-hidden rounded-[32px] border border-cyan-400/20 bg-[#050816] shadow-2xl shadow-cyan-500/10"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">AVINASH.SYSTEMS</p>

              <button onClick={() => setOpen(false)} className="text-sm text-slate-400 transition hover:text-white">
                ESC
              </button>
            </div>

            {/* Terminal Body */}
            <div className="h-[70vh] overflow-y-auto p-6 font-mono">
              {/* Intro */}
              <div className="mb-8 text-cyan-400">Developer Terminal Activated.</div>

              {/* History */}
              <div className="space-y-4">
                {history.map((item, index) => (
                  <motion.pre
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className={`whitespace-pre-wrap text-sm ${
                      item.startsWith(">") ? "text-cyan-400" : "text-slate-300"
                    }`}
                  >
                    {item}
                  </motion.pre>
                ))}
              </div>

              {/* Input */}
              <div className="mt-8 flex items-center gap-3">
                <span className="text-cyan-400">{">"}</span>

                <input
                  autoFocus
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleCommand();
                    }
                  }}
                  placeholder="Type a command..."
                  className="w-full bg-transparent text-slate-200 outline-none placeholder:text-slate-500"
                />
              </div>

              {/* Help */}
              <div className="mt-10 border-t border-white/5 pt-6 text-xs text-slate-500">
                Available Commands:
                <div className="mt-2 flex flex-wrap gap-3">
                  <span>whoami</span>
                  <span>show projects</span>
                  <span>explain architecture</span>
                  <span>open hrms</span>
                  <span>run deployment</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
