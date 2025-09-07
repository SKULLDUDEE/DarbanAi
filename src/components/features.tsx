"use client";

import { motion } from "framer-motion";
import AdvancedCard from "./AdvancedCard";
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
  Users
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "Advanced AI Intelligence",
      description: "Powered by cutting-edge natural language processing to understand context and provide human-like responses.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageSquare,
      title: "Multi-Channel Support",
      description: "Deploy your chatbots across websites, mobile apps, social media, and messaging platforms seamlessly.",
      color: "from-primary to-secondary",
    },
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      description: "Get your chatbot up and running in minutes with our intuitive drag-and-drop interface.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with end-to-end encryption and compliance with GDPR, HIPAA, and SOC 2.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Gain deep insights into customer interactions with comprehensive analytics and reporting tools.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Palette,
      title: "Complete Customization",
      description: "Fully customize your chatbot's appearance, personality, and responses to match your brand.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Support for 100+ languages with automatic translation and localization capabilities.",
      color: "from-teal-500 to-blue-500",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Provide round-the-clock customer support without the overhead of human agents.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together with your team to build, test, and optimize your chatbots collaboratively.",
      color: "from-orange-500 to-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
    <section id="features" className="py-24 bg-gradient-to-b from-background to-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
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
              Powerful Features
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Everything You Need to Build
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Amazing Chatbots
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features you need to create, 
            deploy, and manage intelligent chatbots that deliver exceptional customer experiences.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <AdvancedCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
              />
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
