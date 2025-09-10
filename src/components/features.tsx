"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import HowItWorks from "./HowItWorks";
import { 
  Brain, 
  MessageSquare, 
  Zap, 
  Shield, 
  BarChart3, 
  Palette,
  Globe,
  Clock,
  Users,
  User,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Star
} from "lucide-react";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Genuine Darban features with professional color palette
  const featuresData = {
    hero: {
      icon: Brain,
      title: "Advanced AI Intelligence",
      description: "Cutting-edge natural language processing to understand context and provide human-like responses.",
      color: "from-[#00cccc] to-[#4ca1af]"
    },
    primary: [
      {
        icon: TrendingUp,
        title: "Intelligent Product Recommendations",
        description: "Personalized suggestions that match customer preferences.",
        color: "from-[#00cccc] to-[#4ca1af]",
        stats: "Smart AI",
        features: ["Personalized Suggestions", "Customer Preferences", "Smart Matching", "Conversion Boost"]
      },
      {
        icon: MessageSquare,
        title: "Omnichannel Support",
        description: "Seamless integration across web, mobile, and social platforms.",
        color: "from-amber-500 to-orange-500",
        stats: "All Platforms",
        features: ["Web Integration", "Mobile Apps", "Social Media", "Unified Experience"]
      },
      {
        icon: BarChart3,
        title: "Real-Time Analytics",
        description: "Actionable insights to optimize your sales strategy.",
        color: "from-emerald-600 to-teal-600",
        stats: "Live Data",
        features: ["Sales Insights", "Performance Metrics", "Strategy Optimization", "Real-time Reports"]
      },
      {
        icon: Clock,
        title: "24/7 Availability",
        description: "Always on, always helping your customers.",
        color: "from-slate-600 to-slate-700",
        stats: "Always On",
        features: ["Round-the-clock Support", "No Downtime", "Instant Response", "Global Coverage"]
      }
    ],
    secondary: [
      {
        icon: Palette,
        title: "In-Depth Customization",
        description: "Tailor the experience to your brand's unique needs.",
        color: "from-purple-600 to-violet-600",
        stats: "Brand Perfect"
      },
      {
        icon: Globe,
        title: "Multilingual Support",
        description: "The Darban Experience is not limited by Geography.",
        color: "from-indigo-600 to-blue-600",
        stats: "Global Reach"
      },
      {
        icon: Shield,
        title: "Enterprise Security",
        description: "Bank-grade security with end-to-end encryption and compliance.",
        color: "from-rose-500 to-pink-600",
        stats: "Secure & Safe"
      },
      {
        icon: Zap,
        title: "Lightning Fast Setup",
        description: "Get your AI chatbot up and running in minutes.",
        color: "from-cyan-600 to-teal-600",
        stats: "Quick Deploy"
      }
    ]
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    },
  };

  const heroVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 100,
      rotateX: -15,
      rotateY: 10
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      rotateX: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: 0.3,
        duration: 1.2
      }
    },
  };

  const heroIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        delay: 0.8
      }
    },
  };

  const heroTextVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: 1.0,
        staggerChildren: 0.1
      }
    },
  };

  const heroButtonVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        delay: 1.4
      }
    },
  };

  return (
    <>
      <section id="features" className="relative py-20 overflow-hidden bg-[#ffffff]">
        {/* Advanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] via-[#f9f9f9] to-[#e6f8f8]/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,204,204,0.03),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(76,161,175,0.03),transparent_50%)]" />
        
        {/* Animated Background Elements */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-[#00cccc]/10 to-[#4ca1af]/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-[#4ca1af]/10 to-[#00cccc]/10 rounded-full blur-2xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            >
              <span className="bg-gradient-to-r from-[#111111] to-[#666666] bg-clip-text text-transparent">
                Powerful Features to
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#00cccc] to-[#4ca1af] bg-clip-text text-transparent">
                Enhance Your Customer Experience
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-[#666666] max-w-3xl mx-auto leading-relaxed"
            >
              Darban's AI-powered platform delivers intelligent solutions that transform how you engage 
              with customers, providing personalized experiences that drive sales and satisfaction.
            </motion.p>
          </motion.div>

          {/* Hero Feature Card with GIF-like Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="relative group">
              <motion.div
                className="relative bg-[#f9f9f9]/80 backdrop-blur-xl border border-[#dddddd]/30 rounded-2xl p-6 shadow-xl shadow-[#00cccc]/5 overflow-hidden"
              >
                {/* Hero Card Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#e6f8f8]/50 via-[#ffffff]/30 to-[#f9f9f9]/50" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00cccc]/5 to-transparent rounded-full blur-2xl" />
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                  {/* Left Text Content with Bump Animation */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { 
                      opacity: 1, 
                      x: 0,
                      scale: [1, 0.95, 1.02, 1] // Shrink then expand when bumped
                    } : {}}
                    transition={{ 
                      opacity: { duration: 0.8, delay: 0.2 },
                      x: { duration: 0.8, delay: 0.2 },
                      scale: { 
                        duration: 1.2, 
                        delay: 1.8, // Happens when 3D image "bumps" into it
                        times: [0, 0.3, 0.7, 1]
                      }
                    }}
                  >
                    {/* Animated Title with Word Zoom Effects */}
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold text-[#111111] mb-3 leading-tight"
                    >
                      {featuresData.hero.title.split(' ').map((word, index) => (
                        <motion.span
                          key={index}
                          className="inline-block mr-2"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { 
                            opacity: 1, 
                            scale: [0.8, 1.1, 1] // Zoom in/out effect
                          } : {}}
                          transition={{ 
                            duration: 0.6, 
                            delay: 0.5 + index * 0.1,
                            times: [0, 0.6, 1]
                          }}
                          whileHover={{
                            scale: 1.05,
                            color: "#00cccc",
                            transition: { duration: 0.2 }
                          }}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.h3>
                    
                    {/* Animated Description */}
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 1.0, duration: 0.8 }}
                      className="text-base text-[#666666] mb-6 leading-relaxed"
                    >
                      {featuresData.hero.description.split(' ').map((word, index) => (
                        <motion.span
                          key={index}
                          className="inline-block mr-1"
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ delay: 1.2 + index * 0.05 }}
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.p>
                    
                    {/* Animated Button */}
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={isInView ? { 
                        opacity: 1, 
                        scale: 1, 
                        y: 0 
                      } : {}}
                      transition={{ delay: 1.4, duration: 0.6 }}
                      whileHover={{ 
                        scale: 1.05, 
                        x: 3,
                        boxShadow: "0 8px 25px rgba(0,204,204,0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-gradient-to-r from-[#00cccc] to-[#4ca1af] text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm group"
                    >
                      <span>Explore AI Features</span>
                      <motion.div
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </motion.button>
                  </motion.div>
                  
                  {/* Static Clean Image */}
                  <div className="relative flex justify-center items-center">
                    <motion.div
                      initial={{ 
                        opacity: 0, 
                        x: 50,
                        scale: 0.9
                      }}
                      animate={isInView ? { 
                        opacity: 1, 
                        x: 0,
                        scale: 1
                      } : {}}
                      transition={{
                        duration: 0.8,
                        delay: 1.2,
                        ease: "easeOut"
                      }}
                      className="relative"
                    >
                      {/* Static Background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00cccc]/5 to-[#4ca1af]/5 rounded-2xl blur-lg" />
                      
                      {/* Static Image Container */}
                      <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/30">
                        <img 
                          src="/chatbot-image.png" 
                          alt="Darban AI Chatbot" 
                          className="w-80 h-auto object-contain"
                        />
                      </div>

                      {/* Static Badges */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? {
                          opacity: 1,
                          scale: 1
                        } : {}}
                        transition={{
                          opacity: { delay: 2, duration: 0.5 },
                          scale: { delay: 2, duration: 0.5 }
                        }}
                        className="absolute -top-3 -right-3 bg-white rounded-lg shadow-md border border-gray-200/50 p-2"
                      >
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-[#00cccc]" />
                          <span className="text-sm font-medium text-gray-800">24/7</span>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? {
                          opacity: 1,
                          scale: 1
                        } : {}}
                        transition={{
                          opacity: { delay: 2.2, duration: 0.5 },
                          scale: { delay: 2.2, duration: 0.5 }
                        }}
                        className="absolute -bottom-3 -left-3 bg-white rounded-lg shadow-md border border-gray-200/50 p-2"
                      >
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-emerald-500" />
                          <span className="text-sm font-medium text-gray-800">Smart AI</span>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Primary Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          >
            {featuresData.primary.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onHoverStart={() => setActiveFeature(index)}
                onHoverEnd={() => setActiveFeature(null)}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group relative"
              >
                <div className="relative bg-[#f9f9f9]/70 backdrop-blur-xl border border-[#dddddd]/30 rounded-xl p-6 h-full shadow-lg shadow-[#00cccc]/5 overflow-hidden transition-all duration-500">
                  {/* Card Background Effects */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${feature.color}`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`p-2.5 rounded-lg bg-gradient-to-r ${feature.color} shadow-md`}
                      >
                        <feature.icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <span className="text-xs font-bold text-[#666666] bg-[#e0e0e0] px-2 py-1 rounded-full">
                        {feature.stats}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#111111] mb-3 group-hover:text-[#00cccc] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[#666666] mb-4 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                    
                    {feature.features && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: activeFeature === index ? 1 : 0,
                          height: activeFeature === index ? "auto" : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="space-y-1.5 mb-4 overflow-hidden"
                      >
                        {feature.features.map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-gradient-to-r from-[#00cccc] to-[#4ca1af] rounded-full" />
                            <span className="text-xs text-[#666666]">{item}</span>
                          </div>
                        ))}
                      </motion.div>
                    )}
                    
                    <motion.div
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-2 text-[#00cccc] font-semibold cursor-pointer text-sm"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3 h-3" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Secondary Features Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {featuresData.secondary.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -3, scale: 1.02 }}
                className="group"
              >
                <div className="relative bg-[#f9f9f9]/60 backdrop-blur-lg border border-[#dddddd]/40 rounded-lg p-4 h-full shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-3 transition-opacity duration-300 bg-gradient-to-br ${feature.color}`} />
                  
                  <div className="relative z-10 text-center">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${feature.color} shadow-sm mb-3`}
                    >
                      <feature.icon className="w-4 h-4 text-white" />
                    </motion.div>
                    
                    <h3 className="text-base font-bold text-[#111111] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-[#666666] mb-3 leading-relaxed">
                      {feature.description}
                    </p>
                    <span className="text-xs font-bold text-[#666666] bg-[#e0e0e0] px-2 py-1 rounded-full">
                      {feature.stats}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <HowItWorks />
    </>
  );
};

export default Features;
  