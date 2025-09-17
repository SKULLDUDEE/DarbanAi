'use client';

import { motion } from "framer-motion";
import { ArrowRight, Play, Zap } from "lucide-react";
import CommentBox2 from "./CommentBox2";
import CommentBox from "./CommentBox";
import Image from "next/image";

const Hero = () => {
  const heading = 'The Best AI Concierge for E-Commerce';

  return (
    <section
      id="home"
      className="relative min-h-[40vh] flex items-start pt-24 justify-center overflow-hidden bg-gradient-to-br from-[#f5f5f5] via-[#f9f9f9] to-[#e6f8f8]"
    >
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-[#00cccc]/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-40 right-20 w-24 h-24 bg-[#4ca1af]/15 rounded-full blur-lg"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-1/3 w-20 h-20 bg-amber-400/20 rounded-full blur-lg"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,204,204,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,204,204,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-white/20" />
        
        {/* Dark Shadow Orbs */}
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-32 right-32 w-40 h-40 bg-slate-900/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, 90, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-24 right-16 w-28 h-28 bg-gray-800/15 rounded-full blur-xl"
        />
        
        {/* Dark Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-900/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900/8 to-transparent" />
        <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-slate-800/10 to-transparent" />
        
        {/* Animated Particles */}
        <motion.div
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#00cccc]/40 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-amber-500/50 rounded-full"
        />
        
        {/* Dark Floating Elements */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-16 left-1/4 w-6 h-6 bg-slate-700/30 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 40, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-32 right-1/3 w-4 h-4 bg-gray-900/25 rounded-full blur-sm"
        />
      </div>
      {/* Vertical Side Banner */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="hidden lg:block absolute -left-16 top-1/2 -translate-y-1/2 z-20"
      >
        <div className="flex items-center justify-center bg-[#00cccc]/10 border border-[#00cccc]/30 backdrop-blur-sm rounded px-3 py-2 transform -rotate-90 origin-center">
          <Zap className="w-3 h-3 text-[#00cccc] mr-2" />
          <span className="text-xs font-medium text-[#00cccc] whitespace-nowrap">
            AI-Powered E-Commerce Concierge
          </span>
        </div>
      </motion.div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="text-left"
          >

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.3,
                  },
                },
              }}
            >
              {heading.split(' ').map((word, index) => {
                const getWordStyle = (wordIndex: number) => {
                  switch (wordIndex) {
                    case 0: // "The"
                      return "text-[#666666]";
                    case 1: // "Best"
                      return "bg-gradient-to-r from-[#00cccc] via-[#4ca1af] to-[#00cccc] bg-clip-text text-transparent";
                    case 2: // "AI"
                      return "bg-gradient-to-r from-[#00cccc] via-[#4ca1af] to-[#00cccc] bg-clip-text text-transparent animate-pulse";
                    case 3: // "Concierge"
                      return "bg-gradient-to-r from-[#4ca1af] via-[#00cccc] to-[#4ca1af] bg-clip-text text-transparent";
                    case 4: // "for"
                      return "text-[#666666]";
                    case 5: // "E-Commerce"
                      return "bg-gradient-to-r from-[#00cccc] via-[#4ca1af] to-[#00cccc] bg-clip-text text-transparent";
                    default:
                      return "text-[#111111]";
                  }
                };

                return (
                  <span key={index} className="inline-block">
                    {word.split('').map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        className={`inline-block ${getWordStyle(index)}`}
                        variants={{
                          hidden: { y: 50, opacity: 0, rotateX: -90, scale: 0.8 },
                          visible: {
                            y: 0,
                            opacity: 1,
                            rotateX: 0,
                            scale: 1,
                            transition: {
                              type: "spring",
                              damping: 12,
                              stiffness: 200,
                              duration: 0.6,
                            },
                          },
                        }}
                        whileHover={{
                          scale: 1.1,
                          textShadow: "0px 0px 8px rgba(0,204,204,0.8)",
                          transition: { duration: 0.2 },
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                    {index < heading.split(' ').length - 1 && <span className="inline-block w-2"></span>}
                  </span>
                );
              })}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-base text-[#666666] max-w-lg mt-3"
            >
              Bridge the gap between offline and online shopping with Darban&apos;s
              AI-driven customer experience platform. Revolutionize your
              e-commerce engagement with one-tap integrations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex items-center gap-3 pt-6"
            >
              <button className="bg-gradient-to-r from-[#00cccc] to-[#4ca1af] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1 hover:shadow-lg transition-shadow">
                <span>Request Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="flex items-center space-x-1 px-4 py-2 rounded-full border border-[#dddddd] text-sm hover:border-[#00cccc] transition-colors">
                <Play className="w-4 h-4 text-[#00cccc]" />
                <span className="text-[#111111]">Learn More</span>
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="relative hidden md:block"
          >
            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <CommentBox />
              <CommentBox2 />
              <Image
                src="/banner-robot.png"
                alt="Floating Robot"
                width={600}
                height={600}
                quality={100}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;