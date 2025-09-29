'use client';

import { motion } from 'framer-motion';
import {
  Users,
  Target,
  Lightbulb,
  Award,
  TrendingUp,
  Globe2,
} from 'lucide-react';

const stats = [
  { number: '50K+', label: 'Happy Customers', icon: Users },
  { number: '99.9%', label: 'Uptime Guarantee', icon: Target },
  { number: '24/7', label: 'Support Available', icon: Lightbulb },
  { number: '150+', label: 'Countries Served', icon: Globe2 },
];

const values = [
  {
    icon: TrendingUp,
    title: 'Innovation First',
    description:
      "We're constantly pushing the boundaries of what's possible with AI technology.",
  },
  {
    icon: Users,
    title: 'Customer Centric',
    description:
      "Every decision we make is guided by what's best for our customers and their success.",
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description:
      'We maintain the highest standards in everything we do, from code to customer service.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-background to-accent/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            <Users className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">About Us</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Revolutionizing Customer
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Conversations with AI
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Darban.AI, we believe that every business deserves intelligent,
            personalized customer interactions. Our mission is to democratize
            AI technology and make it accessible to businesses of all sizes.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map(({ number, label, icon: Icon }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 mb-4">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {number}
              </div>
              <div className="text-muted-foreground text-sm">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Our Story
              </span>
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2023, Darban.AI emerged from a simple observation:
                businesses were struggling to provide personalized, round-the-clock
                customer support while managing costs and maintaining quality.
              </p>
              <p>
                Our team of AI researchers, engineers, and customer experience experts
                came together with a shared vision: to create an AI chatbot platform
                that&apos;s not just powerful, but also intuitive and accessible to everyone.
              </p>
              <p>
                Today, we&apos;re proud to serve thousands of businesses worldwide —
                from startups to Fortune 500 companies — helping them transform
                their customer interactions through intelligent automation.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl blur-xl" />
              <div className="relative">
                <blockquote className="text-lg italic text-foreground mb-4">
                  &ldquo;We&apos;re not just building chatbots; we&apos;re crafting digital
                  experiences that make every customer feel heard, understood, and valued.&rdquo;
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold mr-4">
                    DA
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Darban.AI Team</div>
                    <div className="text-sm text-muted-foreground">Founders & Engineers</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Our Values
            </span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            These core principles guide everything we do and shape the way we build products and serve our customers.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 mb-6">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">{title}</h4>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
