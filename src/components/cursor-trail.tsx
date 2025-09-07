"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

const CursorTrail = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    let trailId = 0;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add new trail point
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: trailId++ }];
        // Keep only last 10 points
        return newTrail.slice(-10);
      });
    };

    const fadeTrail = () => {
      setTrail(prev => prev.slice(1));
      animationFrameId = requestAnimationFrame(fadeTrail);
    };

    window.addEventListener('mousemove', updateMousePosition);
    animationFrameId = requestAnimationFrame(fadeTrail);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"
          style={{
            left: point.x - 4,
            top: point.y - 4,
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ 
            opacity: 0, 
            scale: 0.5,
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Main cursor dot */}
      <motion.div
        className="absolute w-4 h-4 bg-primary/30 rounded-full pointer-events-none"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default CursorTrail;