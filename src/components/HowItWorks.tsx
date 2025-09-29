import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Settings, 
  MessageCircle, 
  BarChart3, 
  ShoppingCart,
  Zap,
  CheckCircle,
  TrendingUp,
  Users,
  Clock
} from "lucide-react";

const HowItWorks = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const steps = [
    {
      step: "01",
      title: "Seamless Integration",
      description: "Connect in minutes, not days",
      detail: "Instantly connect Darban to your existing e-commerce platform with our one-click integration.",
      icon: Settings,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      features: ["Shopify Ready", "WooCommerce", "Custom APIs"],
      metric: "5 min setup",
      metricIcon: Clock
    },
    {
      step: "02", 
      title: "Smart Engagement",
      description: "AI-powered personalization",
      detail: "Our AI learns from every interaction to deliver hyper-personalized shopping experiences.",
      icon: MessageCircle,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      features: ["Behavioral Analysis", "Product Recommendations", "Smart Chat"],
      metric: "87% engagement",
      metricIcon: Users
    },
    {
      step: "03",
      title: "Deep Analytics", 
      description: "Data that drives decisions",
      detail: "Transform raw data into actionable insights with our comprehensive analytics dashboard.",
      icon: BarChart3,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      features: ["Real-time Metrics", "Conversion Tracking", "A/B Testing"],
      metric: "200+ metrics",
      metricIcon: TrendingUp
    },
    {
      step: "04",
      title: "Maximize Conversions",
      description: "Turn browsers into buyers",
      detail: "Watch your revenue grow with intelligent upselling and cart recovery strategies.",
      icon: ShoppingCart,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      features: ["Cart Recovery", "Smart Upselling", "Exit Intent"],
      metric: "45% more sales",
      metricIcon: CheckCircle
    }
  ];

  // Parallax and animation transforms
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50/20 overflow-hidden">
      {/* Compact Professional Header */}
      <motion.div 
        style={{ y: headerY, opacity: headerOpacity }}
        className="text-center py-16 max-w-6xl mx-auto px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 mb-6">
            <Zap className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-700 tracking-wide">SIMPLE 4-STEP PROCESS</span>
          </div>

          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent">
              How Darban Works
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your e-commerce with our streamlined approach to customer engagement and conversion
          </p>
        </motion.div>
      </motion.div>

      {/* Optimized Cards Grid Section */}
      <section ref={containerRef} className="relative py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Timeline indicator for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-orange-200" />

          <div className="space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Desktop Layout - Alternating sides */}
                  <div className={`hidden lg:grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'direction-rtl'}`}>
                    {/* Content Card */}
                    <motion.div 
                      className={`${isEven ? 'text-right' : 'text-left order-2'}`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-white rounded-3xl shadow-xl border border-gray-100/50 p-8 relative overflow-hidden group">
                        {/* Background gradient on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                        
                        {/* Step number badge */}
                        <div className={`absolute ${isEven ? '-right-3 -top-3' : '-left-3 -top-3'}`}>
                          <div className={`bg-gradient-to-r ${step.color} text-white text-xl font-bold w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg`}>
                            {step.step}
                          </div>
                        </div>

                        <div className="relative">
                          {/* Title and Icon Row */}
                          <div className={`flex items-center gap-4 mb-4 ${isEven ? 'flex-row-reverse' : ''}`}>
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${step.bgColor} border border-gray-200/50`}>
                              <step.icon className="w-6 h-6 text-gray-700" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                          </div>

                          {/* Description */}
                          <p className="text-base font-medium text-gray-700 mb-3">{step.description}</p>
                          <p className="text-sm text-gray-600 mb-6">{step.detail}</p>

                          {/* Features Grid */}
                          <div className={`grid grid-cols-3 gap-3 mb-6`}>
                            {step.features.map((feature, i) => (
                              <div key={i} className="text-center">
                                <div className="bg-gray-50 rounded-lg py-2 px-3">
                                  <span className="text-xs font-medium text-gray-600">{feature}</span>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Metric Highlight */}
                          <div className={`flex items-center gap-2 ${isEven ? 'justify-end' : 'justify-start'}`}>
                            <step.metricIcon className="w-5 h-5 text-gray-400" />
                            <span className={`text-lg font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                              {step.metric}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Visual Element */}
                    <motion.div 
                      className={`${isEven ? '' : 'order-1'} flex justify-center`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <div className="relative w-64 h-64">
                        {/* Animated background circles */}
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0"
                        >
                          <div className={`absolute inset-4 bg-gradient-to-r ${step.color} rounded-full opacity-10 blur-2xl`} />
                        </motion.div>
                        
                        {/* Center icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className={`p-8 rounded-3xl bg-gradient-to-br ${step.color} shadow-2xl`}
                          >
                            <step.icon className="w-24 h-24 text-white" />
                          </motion.div>
                        </div>

                        {/* Orbiting dots */}
                        {[0, 120, 240].map((angle) => (
                          <motion.div
                            key={angle}
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: angle / 120 }}
                            className="absolute inset-0"
                          >
                            <div 
                              className="absolute w-3 h-3 bg-white rounded-full shadow-lg"
                              style={{
                                top: '15%',
                                left: '50%',
                                transform: 'translateX(-50%)'
                              }}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Mobile/Tablet Layout */}
                  <div className="lg:hidden">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-2xl shadow-xl border border-gray-100/50 p-6 relative overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} opacity-30`} />
                      
                      <div className="relative">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} text-white shadow-lg`}>
                            <step.icon className="w-8 h-8" />
                          </div>
                          <div>
                            <span className="text-3xl font-bold text-gray-200">{step.step}</span>
                            <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          </div>
                        </div>
                        
                        <p className="text-gray-700 font-medium mb-2">{step.description}</p>
                        <p className="text-gray-600 text-sm mb-4">{step.detail}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {step.features.map((feature, i) => (
                            <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-xs font-medium text-gray-600">
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <step.metricIcon className="w-4 h-4 text-gray-400" />
                          <span className={`font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                            {step.metric}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline dot for desktop */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className={`w-6 h-6 bg-gradient-to-r ${step.color} rounded-full shadow-lg`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="text-center py-20">
        
      </div>
    </div>
  );
};

export default HowItWorks;