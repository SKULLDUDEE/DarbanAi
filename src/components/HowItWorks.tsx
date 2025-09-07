"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Settings, 
  MessageCircle, 
  BarChart3, 
  ShoppingCart,
  ArrowRight,
  Sparkles,
  Zap,
  Target
} from "lucide-react";

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const steps = [
    {
      step: "1/4",
      title: "Integration",
      description: "Easily integrate Darban with your e-commerce platform.",
      detail: "Connect Darban to your existing systems in minutes. Our seamless integration works with Shopify, WooCommerce, Magento, and custom platforms.",
      icon: Settings,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      step: "2/4", 
      title: "Engage",
      description: "Offer personalized assistance and recommendations.",
      detail: "Darban analyzes customer behavior and preferences to provide tailored product recommendations and personalized shopping experiences.",
      icon: MessageCircle,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      step: "3/4",
      title: "Analyze", 
      description: "Use real-time data to refine and improve.",
      detail: "Get actionable insights from customer interactions, conversion patterns, and performance metrics to continuously optimize your strategy.",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      step: "4/4",
      title: "Convert",
      description: "Increase sales and customer satisfaction effortlessly.",
      detail: "Watch your conversion rates soar as Darban guides customers through personalized shopping journeys, reducing cart abandonment and boosting sales.",
      icon: ShoppingCart,
      color: "from-orange-500 to-red-500", 
      bgColor: "from-orange-50 to-red-50"
    }
  ];

  // Process visualization component
  const ProcessVisualization = () => {
    const y1 = useTransform(scrollYProgress, [0, 0.25], [100, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.5], [100, 0]);
    const y3 = useTransform(scrollYProgress, [0.5, 0.75], [100, 0]);
    const y4 = useTransform(scrollYProgress, [0.75, 1], [100, 0]);
    
    const opacity1 = useTransform(scrollYProgress, [0, 0.25], [0.3, 1]);
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.5], [0.3, 1]);
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.75], [0.3, 1]);
    const opacity4 = useTransform(scrollYProgress, [0.75, 1], [0.3, 1]);

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    return (
      <div className="sticky top-1/2 -translate-y-1/2 w-full h-96 flex items-center justify-center">
        <motion.div 
          className="relative w-80 h-80"
          style={{ scale }}
        >
          {/* Central hub */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full shadow-2xl flex items-center justify-center z-10"
            style={{ rotate }}
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>

          {/* Step 1 - Integration */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ y: y1, opacity: opacity1 }}
          >
            <motion.div 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Settings className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div 
              className="absolute -top-2 -right-2 w-4 h-4 bg-blue-400 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Step 2 - Engage */}
          <motion.div
            className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2"
            style={{ y: y2, opacity: opacity2 }}
          >
            <motion.div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <MessageCircle className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div 
              className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>

          {/* Step 3 - Analyze */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
            style={{ y: y3, opacity: opacity3 }}
          >
            <motion.div 
              className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <BarChart3 className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div 
              className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.div>

          {/* Step 4 - Convert */}
          <motion.div
            className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"
            style={{ y: y4, opacity: opacity4 }}
          >
            <motion.div 
              className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <ShoppingCart className="w-8 h-8 text-white" />
            </motion.div>
            <motion.div 
              className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            />
          </motion.div>

          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
            <motion.path
              d="M160 80 L240 160 L160 240 L80 160 Z"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              opacity={0.3}
              animate={{ strokeDashoffset: [0, -10] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(59, 130, 246)" />
                <stop offset="25%" stopColor="rgb(147, 51, 234)" />
                <stop offset="50%" stopColor="rgb(34, 197, 94)" />
                <stop offset="100%" stopColor="rgb(249, 115, 22)" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    );
  };

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-background to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm mb-6"
          >
            <Zap className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              Simple Process
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              How Darban
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Works
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Digital agencies can vary in size and specialization. Some may focus on specific niches, 
            such as healthcare or e-commerce, while others may offer a comprehensive solution.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <motion.div 
                  className={`absolute -left-8 top-0 w-1 h-full bg-gradient-to-b ${step.color} rounded-full`}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                />
                
                <div className="bg-white/80 backdrop-blur-sm border border-slate-200/60 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <motion.div 
                    className="flex items-start gap-6"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div 
                      className={`p-4 rounded-2xl bg-gradient-to-r ${step.color} shadow-lg flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <motion.div 
                        className="flex items-center gap-4 mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                      >
                        <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                          Step {step.step}
                        </span>
                        <motion.div 
                          className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                        />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-lg mb-4">
                        {step.description}
                      </p>
                      <p className="text-sm text-muted-foreground/80 leading-relaxed">
                        {step.detail}
                      </p>
                      
                      <motion.div 
                        className="flex items-center text-primary font-semibold mt-6 cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Process Visualization */}
          <div className="lg:block hidden">
            <ProcessVisualization />
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary to-secondary text-white px-12 py-6 rounded-full font-semibold text-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
          >
            <span className="flex items-center">
              Get Started Today
              <motion.div
                className="ml-3"
                whileHover={{ x: 5 }}
              >
                <Target className="w-6 h-6" />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;