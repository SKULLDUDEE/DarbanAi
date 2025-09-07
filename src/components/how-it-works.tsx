'use client';

import { motion } from 'framer-motion';
import { UploadCloud, Bot, MessageSquare, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: UploadCloud,
    title: '1. Provide Your Data',
    description: 'Upload documents, add website links, or connect your knowledge base.',
  },
  {
    icon: Bot,
    title: '2. Customize Your Chatbot',
    description: 'Customize the look, feel, and personality to match your brand.',
  },
  {
    icon: MessageSquare,
    title: '3. Deploy Everywhere',
    description: 'Integrate your chatbot on your website, mobile app, and other channels.',
  },
  {
    icon: BarChart3,
    title: '4. Analyze & Optimize',
    description: 'Use the analytics dashboard to monitor performance and improve your chatbot.',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-accent/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Get Started in 4 Simple Steps
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Our intuitive platform makes it easy to build and deploy powerful AI chatbots.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative text-center"
              >
                <div className="relative inline-block">
                  <div className="w-24 h-24 flex items-center justify-center rounded-full bg-white shadow-lg border">
                    <step.icon className="w-12 h-12 text-primary" />
                  </div>
                  <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;