"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Crown } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: "Starter",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Perfect for trying out our platform",
    icon: Zap,
    popular: false,
    features: [
      "1 Chatbot",
      "100 messages/month",
      "Basic templates",
      "Email support",
    ],
  },
  {
    name: "Professional",
    monthlyPrice: 29,
    annualPrice: 24,
    description: "Ideal for growing businesses",
    icon: Star,
    popular: true,
    features: [
      "5 Chatbots",
      "10,000 messages/month",
      "Advanced templates",
      "Priority support",
      "Custom branding",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: 99,
    annualPrice: 83,
    description: "For large-scale operations",
    icon: Crown,
    popular: false,
    features: [
      "Unlimited chatbots",
      "Unlimited messages",
      "Custom integrations",
      "24/7 phone support",
      "Dedicated account manager",
    ],
  },
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Choose Your Perfect Plan
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free and scale as you grow. No hidden fees or long-term commitments.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <span className={cn('font-medium', { 'text-muted-foreground': isAnnual })}>
            Monthly
          </span>
          <div
            onClick={() => setIsAnnual(!isAnnual)}
            className={cn(
              'relative w-14 h-8 rounded-full p-1 cursor-pointer transition-colors',
              isAnnual ? 'bg-primary' : 'bg-muted'
            )}
          >
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 700, damping: 30 }}
              className="w-6 h-6 bg-white rounded-full shadow"
            />
          </div>
          <span className={cn('font-medium', { 'text-muted-foreground': !isAnnual })}>
            Annual (Save 20%)
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={cn(
                'relative p-8 rounded-2xl border h-full flex flex-col',
                plan.popular
                  ? 'bg-gradient-to-b from-accent/50 to-white border-primary/30 shadow-xl shadow-primary/10'
                  : 'bg-card/50 border-border/50'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="flex-grow">
                <div className="flex items-center gap-4 mb-4">
                  <plan.icon className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>

                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold text-foreground">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/ month</span>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                  'w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 mt-8',
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl'
                    : 'bg-white border border-primary/50 text-primary hover:bg-accent/50'
                )}
              >
                {plan.name === 'Starter' ? 'Get Started Free' : 'Start Free Trial'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
