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
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#f2f7ff]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-accent/50 border border-primary/20 backdrop-blur-sm mb-4"
            >
              <Zap className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                AI-Powered E-Commerce Concierge
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter"
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
                      return "text-slate-600";
                    case 1: // "Best"
                      return "bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 bg-clip-text text-transparent";
                    case 2: // "AI"
                      return "bg-gradient-to-r from-primary via-cyan-400 to-primary bg-clip-text text-transparent animate-pulse";
                    case 3: // "Concierge"
                      return "bg-gradient-to-r from-secondary via-teal-400 to-secondary bg-clip-text text-transparent";
                    case 4: // "for"
                      return "text-slate-600";
                    case 5: // "E-Commerce"
                      return "bg-gradient-to-r from-primary via-secondary to-cyan-500 bg-clip-text text-transparent";
                    default:
                      return "text-foreground";
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
                    {index < heading.split(' ').length - 1 && ' '}
                  </span>
                );
              })}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-lg text-muted-foreground max-w-xl mt-4"
            >
              Bridge the gap between offline and online shopping with Darban's
              AI-driven customer experience platform. Revolutionize your
              e-commerce engagement with one-tap integrations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex items-center gap-4 pt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--color-primary)' }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-primary/40 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Request a Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'var(--color-accent)' }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center space-x-2 px-8 py-3 rounded-full border hover:border-primary/40 backdrop-blur-sm transition-all duration-300"
              >
                <Play className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Learn More</span>
              </motion.button>
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