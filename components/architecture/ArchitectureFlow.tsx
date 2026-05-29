"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ArchitectureNode from "./ArchitectureNode";

type ArchitectureFlowProps = {
  flow: string[];
  color: string;
};

export default function ArchitectureFlow({ flow, color }: ArchitectureFlowProps) {
  return (
    <div className="relative mt-12">
      {flow.map((item, index) => (
        <div key={item}>
          <ArchitectureNode label={item} color={color} delay={index * 0.3} />

          {index !== flow.length - 1 && (
            <div className="flex justify-center py-4">
              <motion.div
                animate={{
                  y: [0, 6, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <ArrowDown className={`h-5 w-5 ${color.replace("bg", "text")}`} />
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
