"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      image: "SJ",
      rating: 5,
      content: "Darban.AI transformed our customer support completely. We went from 12-hour response times to instant, intelligent responses. Our customer satisfaction scores increased by 40% in just 3 months.",
    },
    {
      name: "Michael Chen",
      role: "Head of Customer Success",
      company: "GrowthCorp",
      image: "MC",
      rating: 5,
      content: "The AI chatbots are incredibly smart and easy to set up. What used to take our team hours now happens automatically. Our customers love the instant support, and we love the cost savings.",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "InnovateLab",
      image: "ER",
      rating: 5,
      content: "Implementation was seamless, and the results were immediate. The chatbot handles 80% of our inquiries automatically, freeing up our team to focus on complex issues. ROI was positive within the first month.",
    },
    {
      name: "David Kim",
      role: "CTO",
      company: "ScaleUp Solutions",
      image: "DK",
      rating: 5,
      content: "The level of customization and intelligence is remarkable. Our chatbot feels like a natural extension of our brand. The analytics provide incredible insights into customer behavior and preferences.",
    },
    {
      name: "Lisa Thompson",
      role: "Operations Manager",
      company: "ServicePro",
      image: "LT",
      rating: 5,
      content: "24/7 customer support without the overhead costs. The chatbot learns from every interaction and gets smarter over time. It's like having a super-intelligent team member that never sleeps.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/10 overflow-hidden">
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
            <Star className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Customer Stories</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Loved by Thousands of
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Happy Customers
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our customers have to say 
            about their experience with Darban.AI.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 shadow-2xl">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 opacity-10">
                <Quote className="w-16 h-16 text-primary" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex items-center justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-foreground text-center leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[currentIndex].content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentIndex].image}
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-foreground text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-primary" />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${ index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-muted hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5 text-primary" />
            </motion.button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {[{"number": "4.9/5", "label": "Average Rating"}, {"number": "10,000+", "label": "Happy Customers"}, {"number": "99%", "label": "Would Recommend"}].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
