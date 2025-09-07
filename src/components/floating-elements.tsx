"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const FloatingElements = () => {
  const elements = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => {
      const size = Math.random() * 150 + 50;
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      const endX = Math.random() * 100;
      const endY = Math.random() * 100;
      const color =
        Math.random() > 0.5
          ? "var(--color-primary)"
          : "var(--color-secondary)";

      return (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            left: `${startX}%`,
            top: `${startY}%`,
            backgroundColor: color,
            opacity: Math.random() * 0.1 + 0.05,
            filter: "blur(40px)",
          }}
          animate={{
            x: [`${startX}%`, `${endX}%`, `${startX}%`],
            y: [`${startY}%`, `${endY}%`, `${startY}%`],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      );
    });
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {elements}
    </div>
  );
};

export default FloatingElements;