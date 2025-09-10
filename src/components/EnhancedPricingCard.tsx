'use client';

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Check, LucideIcon, Sparkles, Crown, Zap } from "lucide-react";
import { useState, useRef, useCallback } from "react";
import { cn } from '@/lib/utils';

interface EnhancedPricingCardProps {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  icon: LucideIcon;
  popular: boolean;
  features: string[];
  isAnnual: boolean;
  index: number;
}

const EnhancedPricingCard = ({
  name,
  monthlyPrice,
  annualPrice,
  description,
  icon: Icon,
  popular,
  features,
  isAnnual,
  index
}: EnhancedPricingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  
  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

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

  const getCardTheme = () => {
    if (popular) {
      return {
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
        border: '2px solid rgba(59, 130, 246, 0.3)',
        glow: 'rgba(59, 130, 246, 0.4)',
        accent: 'from-blue-500 to-purple-600'
      };
    }
    return {
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      glow: 'rgba(255, 255, 255, 0.2)',
      accent: 'from-slate-600 to-slate-700'
    };
  };

  const theme = getCardTheme();
  const price = isAnnual ? annualPrice : monthlyPrice;

  return (
    <motion.div
      ref={cardRef}
      initial={{ 
        opacity: 0, 
        scale: 0.9,
        y: 50
      }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        y: 0
      }}
      whileHover={{ 
        scale: popular ? 1.05 : 1.02,
        y: -10
      }}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
        background: theme.background,
        border: theme.border,
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
      className="relative backdrop-blur-xl rounded-3xl p-8 h-full flex flex-col overflow-hidden group cursor-pointer"
    >
      {/* Popular badge with enhanced effects */}
      {popular && (
        <motion.div
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              animate={isHovered ? {
                x: ['-100%', '100%']
              } : {}}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="relative z-10 flex items-center">
              <Crown className="w-4 h-4 mr-2" />
              Most Popular
            </span>
          </motion.div>
        </motion.div>
      )}

      {/* Dynamic background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            ${theme.glow} 0%, 
            transparent 50%)`
        }}
      />

      {/* Animated border glow */}
      {popular && (
        <motion.div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100"
          style={{
            background: `linear-gradient(90deg, transparent, ${theme.glow}, transparent)`,
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
      )}

      {/* Floating particles for popular plan */}
      {popular && isHovered && (
        <>
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
                y: [0, -20, -40]
              }}
              transition={{ 
                duration: 2, 
                delay: i * 0.2,
                repeat: Infinity 
              }}
            />
          ))}
        </>
      )}

      <div className="relative z-10 flex-grow">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <motion.div
            className={`p-3 rounded-2xl bg-gradient-to-r ${theme.accent} shadow-xl`}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              boxShadow: `0 0 30px ${theme.glow}`
            }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="text-slate-300">{description}</p>
          </div>
        </div>

        {/* Price with animated counter */}
        <div className="mb-8">
          <div className="flex items-baseline gap-2 mb-2">
            <motion.span 
              className="text-5xl font-bold text-white"
              key={price}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ${price}
            </motion.span>
            <span className="text-slate-400">/ month</span>
          </div>
          {isAnnual && monthlyPrice > annualPrice && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-sm text-green-400 font-medium"
            >
              Save ${(monthlyPrice - annualPrice) * 12}/year
            </motion.div>
          )}
        </div>

        {/* Features with staggered animation */}
        <motion.ul 
          className="space-y-4 mb-8"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, featureIndex) => (
            <motion.li 
              key={featureIndex} 
              className="flex items-center gap-3"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="flex-shrink-0"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <Check className="w-5 h-5 text-green-400" />
              </motion.div>
              <span className="text-slate-200">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Enhanced CTA Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          'w-full py-4 px-6 rounded-2xl font-bold transition-all duration-300 relative overflow-hidden group/btn',
          popular
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl'
            : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
        )}
      >
        {/* Button glow effect */}
        {popular && (
          <motion.div
            className="absolute inset-0 bg-white/20 rounded-2xl"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
        
        {/* Button shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
        
        <span className="relative z-10 flex items-center justify-center">
          {name === 'Starter' ? 'Get Started Free' : 'Start Free Trial'}
          {popular && <Sparkles className="w-4 h-4 ml-2" />}
        </span>
      </motion.button>

      {/* Corner decorations */}
      {popular && (
        <>
          <motion.div
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
            animate={isHovered ? { 
              rotate: 360,
              scale: [1, 1.2, 1]
            } : {}}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1, repeat: Infinity }
            }}
          >
            <Sparkles className="w-5 h-5 text-yellow-400" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100"
            animate={isHovered ? { 
              scale: [1, 1.3, 1],
              rotate: [0, 180, 360]
            } : {}}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Zap className="w-4 h-4 text-blue-400" />
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default EnhancedPricingCard;