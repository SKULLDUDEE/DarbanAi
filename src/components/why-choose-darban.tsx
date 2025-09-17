"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  TrendingUp, 
  ShoppingCart, 
  Heart, 
  Zap,
  Check,
  ArrowRight,
  Sparkles
} from "lucide-react";

const WhyChooseDarban = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Conversions",
      description: "Transform browsers into buyers with intelligent recommendations that understand customer intent.",
      stat: "45%",
      statLabel: "Average increase",
      gradient: "from-cyan-500 to-teal-500",
      lightGradient: "from-cyan-50 to-teal-50",
      features: [
        "Smart product recommendations",
        "Personalized shopping journeys",
        "Real-time optimization"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Reduce Cart Abandonment",
      description: "Keep customers engaged throughout their journey with proactive assistance at critical moments.",
      stat: "60%",
      statLabel: "Reduction rate",
      gradient: "from-teal-500 to-emerald-500",
      lightGradient: "from-teal-50 to-emerald-50",
      features: [
        "Exit intent detection",
        "Smart recovery campaigns",
        "Checkout assistance"
      ]
    },
    {
      icon: Heart,
      title: "Boost Customer Satisfaction",
      description: "Deliver personalized experiences that make every customer feel valued and understood.",
      stat: "4.9",
      statLabel: "Customer rating",
      gradient: "from-emerald-500 to-green-500",
      lightGradient: "from-emerald-50 to-green-50",
      features: [
        "24/7 instant support",
        "Personalized interactions",
        "Proactive problem solving"
      ]
    },
    {
      icon: Zap,
      title: "Gain Competitive Edge",
      description: "Stay ahead with cutting-edge AI that adapts and evolves with your business needs.",
      stat: "<1s",
      statLabel: "Response time",
      gradient: "from-green-500 to-lime-500",
      lightGradient: "from-green-50 to-lime-50",
      features: [
        "Latest AI technology",
        "Advanced analytics",
        "Continuous learning"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0,204,204) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 border border-cyan-200 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-medium text-cyan-900">Why businesses choose us</span>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Transform Your Business with
            <span className="block mt-2 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
              Intelligent AI Solutions
            </span>
          </motion.h2>

          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Discover how Darban helps businesses deliver exceptional customer experiences and drive measurable growth.
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              <div className={`
                relative bg-white rounded-2xl p-8 
                border border-gray-200 
                transition-all duration-300 ease-out
                ${hoveredCard === index ? 'shadow-xl border-cyan-200' : 'shadow-sm'}
              `}>
                {/* Card gradient background on hover */}
                <div 
                  className={`
                    absolute inset-0 rounded-2xl bg-gradient-to-br ${benefit.lightGradient}
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                  `}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header with icon and stats */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`
                      p-3 rounded-xl bg-gradient-to-br ${benefit.gradient}
                      transform transition-transform duration-300 group-hover:scale-110
                    `}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="text-right">
                      <div className={`
                        text-2xl font-bold bg-gradient-to-r ${benefit.gradient} 
                        bg-clip-text text-transparent
                      `}>
                        {benefit.stat}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">
                        {benefit.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-6">
                    {benefit.features.map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-center gap-3 text-sm text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={hoveredCard === index ? { opacity: 1, x: 0 } : { opacity: 0.8, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className={`
                          p-1 rounded-full bg-gradient-to-r ${benefit.gradient}
                          opacity-80 group-hover:opacity-100 transition-opacity
                        `}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="group-hover:text-gray-900 transition-colors">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Learn more link */}
                  <button className={`
                    flex items-center gap-2 text-sm font-medium
                    bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent
                    group/btn
                  `}>
                    Learn more
                    <ArrowRight className={`
                      w-4 h-4 text-cyan-600 
                      transition-transform duration-300 
                      group-hover/btn:translate-x-1
                    `} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-3xl p-12 border border-cyan-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using Darban to transform their customer experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-cyan-200 transition-all duration-300"
              >
                Schedule Demo
              </motion.button>
            </div>

            <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                14-day free trial
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-green-500" />
                Cancel anytime
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseDarban;