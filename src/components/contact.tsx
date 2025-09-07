'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    value: 'hello@darban.ai',
    href: 'mailto:hello@darban.ai',
  },
  {
    icon: Phone,
    title: 'Call Us',
    value: '(555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'San Francisco, CA',
    href: '#',
  },
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(res => setTimeout(res, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Get in Touch</h2>
            <p className="text-lg text-muted-foreground">We'd love to hear from you. Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.</p>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="p-3 bg-accent/50 rounded-lg">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <a href={item.href} className="text-lg text-foreground hover:text-primary transition-colors">
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-white p-8 rounded-2xl shadow-2xl shadow-primary/10 border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" required className="w-full p-3 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary" />
                <input type="email" placeholder="Email Address" required className="w-full p-3 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary" />
              </div>
              <input type="text" placeholder="Subject" required className="w-full p-3 rounded-lg border bg-background/50 focus:ring-2 focus:ring-primary" />
              <textarea placeholder="Your Message" required rows={5} className="w-full p-3 rounded-lg border bg-background/50 resize-none focus:ring-2 focus:ring-primary" />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px var(--color-primary)' }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? <Loader className="animate-spin" /> : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;