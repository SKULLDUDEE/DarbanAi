'use client';

import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { ArrowRight, LucideIcon, Sparkles, Zap, Star } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

interface UltraAdvancedCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  index?: number;
  variant?: 'quantum' | 'neural' | 'cosmic' | 'liquid' | 'crystalline';
}

const UltraAdvancedCard = ({ 
  icon: Icon, 
  title, 
  description, 
  color, 
  index = 0,
  variant = 'quantum'
}: UltraAdvancedCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [ripples, setRipples] = useState<Array<{id: number, x: number, y: number}>>([]);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Advanced motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  const scale = useMotionValue(1);
  
  // Ultra-smooth springs
  const springRotateX = useSpring(rotateX, { stiffness: 400, damping: 40 });
  const springRotateY = useSpring(rotateY, { stiffness: 400, damping: 40 });
  const springScale = useSpring(scale, { stiffness: 300, damping: 30 });

  // Neural network effect
  const [neurons, setNeurons] = useState<Array<{
    id: number, 
    x: number, 
    y: number, 
    connections: number[]
  }>>([]);

  // Quantum particles
  const [quantumParticles, setQuantumParticles] = useState<Array<{
    id: number,
    x: number,
    y: number,
    vx: number,
    vy: number,
    life: number
  }>>([]);

  useEffect(() => {
    if (variant === 'neural' && isHovered) {
      const newNeurons = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        connections: Array.from({ length: Math.floor(Math.random() * 3) + 1 }, 
          () => Math.floor(Math.random() * 8))
      }));
      setNeurons(newNeurons);
    } else {
      setNeurons([]);
    }
  }, [variant, isHovered]);

  useEffect(() => {
    if (variant === 'quantum' && isHovered) {
      const interval = setInterval(() => {
        setQuantumParticles(prev => {
          const newParticles = prev
            .map(p => ({
              ...p,
              x: p.x + p.vx,
              y: p.y + p.vy,
              life: p.life - 1
            }))
            .filter(p => p.life > 0);
          
          // Add new particles
          if (newParticles.length < 15) {
            newParticles.push({
              id: Date.now() + Math.random(),
              x: Math.random() * 100,
              y: Math.random() * 100,
              vx: (Math.random() - 0.5) * 2,
              vy: (Math.random() - 0.5) * 2,
              life: 60
            });
          }
          
          return newParticles;
        });
      }, 50);
      
      return () => clearInterval(interval);
    }
  }, [variant, isHovered]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const percentX = ((e.clientX - rect.left) / rect.width) * 100;
    const percentY = ((e.clientY - rect.top) / rect.height) * 100;
    
    setMousePosition({ x: percentX, y: percentY });
    x.set(mouseX * 0.1);
    y.set(mouseY * 0.1);
  }, [x, y]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    const newRipple = { id: Date.now(), x, y };
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 1000);
  }, []);

  const getVariantStyles = () => {
    switch (variant) {
      case 'quantum':
        return {
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          glow: 'rgba(59, 130, 246, 0.3)'
        };
      case 'neural':
        return {
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
          border: '1px solid rgba(34, 197, 94, 0.2)',
          glow: 'rgba(34, 197, 94, 0.3)'
        };
      case 'cosmic':
        return {
          background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
          border: '1px solid rgba(147, 51, 234, 0.2)',
          glow: 'rgba(147, 51, 234, 0.3)'
        };
      case 'liquid':
        return {
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
          border: '1px solid rgba(6, 182, 212, 0.2)',
          glow: 'rgba(6, 182, 212, 0.3)'
        };
      case 'crystalline':
        return {
          background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)',
          border: '1px solid rgba(168, 85, 247, 0.2)',
          glow: 'rgba(168, 85, 247, 0.3)'
        };
      default:
        return {
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          glow: 'rgba(59, 130, 246, 0.3)'
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <motion.div
      ref={cardRef}
      initial={{ 
        opacity: 0, 
        scale: 0.8,
        rotateX: variant === 'crystalline' ? 45 : 0,
        rotateY: variant === 'liquid' ? 180 : 0
      }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        rotateX: 0,
        rotateY: 0
      }}
      whileHover={{ 
        scale: 1.02,
        rotateX: variant === 'cosmic' ? 5 : 0,
        rotateY: variant === 'cosmic' ? 5 : 0,
      }}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        scale: springScale,
        transformStyle: "preserve-3d",
        perspective: 1000,
        background: variantStyles.background,
        border: variantStyles.border,
      }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        delay: index * 0.1 
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
      onClick={handleClick}
      className="relative backdrop-blur-xl rounded-3xl p-8 h-full flex flex-col justify-between overflow-hidden group cursor-pointer"
    >
      {/* Dynamic background based on mouse position */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: variant === 'cosmic' 
            ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(147, 51, 234, 0.2) 0%, 
                rgba(236, 72, 153, 0.1) 30%, 
                transparent 70%)`
            : `conic-gradient(from ${mousePosition.x * 3.6}deg at ${mousePosition.x}% ${mousePosition.y}%, 
                ${variantStyles.glow} 0deg, 
                transparent 60deg, 
                ${variantStyles.glow} 120deg, 
                transparent 180deg, 
                ${variantStyles.glow} 240deg, 
                transparent 300deg, 
                ${variantStyles.glow} 360deg)`
        }}
      />

      {/* Quantum particles */}
      {variant === 'quantum' && (
        <AnimatePresence>
          {quantumParticles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                x: `${particle.x}%`,
                y: `${particle.y}%`
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 1 }}
            />
          ))}
        </AnimatePresence>
      )}

      {/* Neural network */}
      {variant === 'neural' && neurons.length > 0 && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {neurons.map((neuron) => 
            neuron.connections.map((connectionId) => {
              const target = neurons[connectionId];
              if (!target) return null;
              return (
                <motion.line
                  key={`${neuron.id}-${connectionId}`}
                  x1={`${neuron.x}%`}
                  y1={`${neuron.y}%`}
                  x2={`${target.x}%`}
                  y2={`${target.y}%`}
                  stroke="rgba(34, 197, 94, 0.4)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: Math.random() * 0.5 }}
                />
              );
            })
          )}
          {neurons.map((neuron) => (
            <motion.circle
              key={neuron.id}
              cx={`${neuron.x}%`}
              cy={`${neuron.y}%`}
              r="3"
              fill="rgba(34, 197, 94, 0.8)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0, 1.2, 1],
                opacity: [0, 1, 0.8]
              }}
              transition={{ duration: 0.5, delay: Math.random() * 0.3 }}
            />
          ))}
        </svg>
      )}

      {/* Liquid morphing effect */}
      {variant === 'liquid' && isHovered && (
        <motion.div
          className="absolute inset-0 rounded-3xl"
          animate={{
            borderRadius: [
              "1.5rem",
              "3rem 1rem 3rem 1rem",
              "1rem 3rem 1rem 3rem",
              "2rem 2rem 1rem 3rem",
              "1.5rem"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: 'linear-gradient(45deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))',
            border: '1px solid rgba(6, 182, 212, 0.3)'
          }}
        />
      )}

      {/* Crystalline facets */}
      {variant === 'crystalline' && isHovered && (
        <>
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0"
              style={{
                background: `linear-gradient(${i * 60}deg, 
                  rgba(168, 85, 247, 0.1) 0%, 
                  transparent 50%, 
                  rgba(236, 72, 153, 0.1) 100%)`,
                clipPath: `polygon(50% 50%, ${50 + 40 * Math.cos(i * Math.PI / 3)}% ${50 + 40 * Math.sin(i * Math.PI / 3)}%, ${50 + 40 * Math.cos((i + 1) * Math.PI / 3)}% ${50 + 40 * Math.sin((i + 1) * Math.PI / 3)}%)`
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            />
          ))}
        </>
      )}

      {/* Click ripples */}
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full border-2 border-white/30"
            style={{
              left: `${ripple.x}%`,
              top: `${ripple.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{ 
              width: 200, 
              height: 200, 
              opacity: 0 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>

      {/* Floating elements */}
      <motion.div
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
        animate={isHovered ? { 
          rotate: variant === 'cosmic' ? 360 : 0,
          scale: [1, 1.2, 1],
          y: [0, -5, 0]
        } : {}}
        transition={{ 
          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
          scale: { duration: 2, repeat: Infinity },
          y: { duration: 1.5, repeat: Infinity }
        }}
      >
        {variant === 'cosmic' && <Star className="w-5 h-5 text-purple-400" />}
        {variant === 'quantum' && <Zap className="w-5 h-5 text-blue-400" />}
        {variant === 'neural' && <Sparkles className="w-5 h-5 text-green-400" />}
        {(variant === 'liquid' || variant === 'crystalline') && <Sparkles className="w-5 h-5 text-cyan-400" />}
      </motion.div>

      {/* Enhanced glow border */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${variantStyles.glow}, transparent)`,
          backgroundSize: "200% 100%",
        }}
        animate={isHovered ? {
          backgroundPosition: ["200% 0%", "-200% 0%"]
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="relative z-10">
        {/* Ultra-enhanced icon */}
        <motion.div 
          className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${color} shadow-2xl mb-6 relative overflow-hidden`}
          whileHover={{ 
            scale: 1.15,
            rotate: variant === 'liquid' ? [0, -10, 10, 0] : 0,
            boxShadow: `0 0 40px ${variantStyles.glow}`
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          {/* Icon aurora effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={isHovered ? {
              background: [
                `linear-gradient(0deg, ${variantStyles.glow}, transparent)`,
                `linear-gradient(90deg, ${variantStyles.glow}, transparent)`,
                `linear-gradient(180deg, ${variantStyles.glow}, transparent)`,
                `linear-gradient(270deg, ${variantStyles.glow}, transparent)`,
                `linear-gradient(360deg, ${variantStyles.glow}, transparent)`
              ]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Icon className="w-10 h-10 text-white relative z-10" />
        </motion.div>

        {/* Title with advanced effects */}
        <motion.h3 
          className="text-2xl font-bold text-foreground mb-3 relative"
          whileHover={{ scale: 1.02 }}
        >
          {title}
          <motion.div
            className="absolute bottom-0 left-0 h-1 rounded-full"
            style={{ background: `linear-gradient(90deg, ${variantStyles.glow}, transparent)` }}
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.4 }}
          />
        </motion.h3>

        <motion.p 
          className="text-muted-foreground leading-relaxed"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Ultra-enhanced CTA */}
      <motion.div
        className="relative z-10 mt-6"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.a 
          href="#" 
          className="flex items-center text-primary font-bold relative group/link overflow-hidden px-4 py-2 rounded-xl"
          style={{
            background: `linear-gradient(135deg, ${variantStyles.glow}20, transparent)`
          }}
          whileHover={{ x: 8 }}
          transition={{ duration: 0.2 }}
        >
          <span className="relative z-10">Explore More</span>
          
          <motion.div
            className="ml-3"
            animate={isHovered ? { 
              x: [0, 8, 0],
              rotate: [0, 15, 0]
            } : {}}
            transition={{ duration: 0.6, repeat: Infinity }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>

          {/* Button glow effect */}
          <motion.div
            className="absolute inset-0 rounded-xl opacity-0 group-hover/link:opacity-100"
            style={{ background: `linear-gradient(135deg, ${variantStyles.glow}30, transparent)` }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      </motion.div>

      {/* Corner energy fields */}
      {Array.from({ length: 4 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-12 h-12 opacity-0 group-hover:opacity-100 ${
            i === 0 ? 'top-0 left-0' :
            i === 1 ? 'top-0 right-0' :
            i === 2 ? 'bottom-0 left-0' : 'bottom-0 right-0'
          }`}
          style={{
            background: `radial-gradient(circle, ${variantStyles.glow} 0%, transparent 70%)`,
            borderRadius: i === 0 ? '0 0 100% 0' :
                         i === 1 ? '0 0 0 100%' :
                         i === 2 ? '0 100% 0 0' : '100% 0 0 0'
          }}
          initial={{ scale: 0, rotate: 0 }}
          whileHover={{ 
            scale: 1, 
            rotate: variant === 'cosmic' ? i * 90 : 0 
          }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
        />
      ))}
    </motion.div>
  );
};

export default UltraAdvancedCard;