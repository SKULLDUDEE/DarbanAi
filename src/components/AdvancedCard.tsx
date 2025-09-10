'use client';

import { motion } from "framer-motion";
import { ArrowRight, LucideIcon } from "lucide-react";

interface AdvancedCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

// Simple illustration component based on the feature type
const FeatureIllustration = ({ icon: Icon, title }: { icon: LucideIcon; title: string }) => {
  const getIllustration = () => {
    if (title.toLowerCase().includes('ai') || title.toLowerCase().includes('intelligence')) {
      return (
        <div className="relative w-full h-32 mb-4 flex items-center justify-center">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-50 rounded-2xl"
            whileHover={{ scale: 1.05 }}
          />
          <motion.div 
            className="relative z-10 bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-xl shadow-lg"
            whileHover={{ rotate: [0, -3, 3, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-10 h-10 text-white" />
          </motion.div>
          <motion.div 
            className="absolute top-2 right-4 w-3 h-3 bg-blue-400 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
        </div>
      );
    }

    if (title.toLowerCase().includes('multi') || title.toLowerCase().includes('platform') || title.toLowerCase().includes('channel')) {
      return (
        <div className="relative w-full h-32 mb-4 flex items-center justify-center">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl"
            whileHover={{ scale: 1.05 }}
          />
          <div className="relative z-10 flex items-center justify-center space-x-2">
            <motion.div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg shadow-md"
              whileHover={{ y: -3 }}
            >
              <Icon className="w-6 h-6 text-white" />
            </motion.div>
            <motion.div 
              className="bg-white p-2 rounded-lg shadow-sm border"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
            >
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
            </motion.div>
            <motion.div 
              className="bg-white p-2 rounded-lg shadow-sm border"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.4 }}
            >
              <div className="w-4 h-4 bg-green-500 rounded"></div>
            </motion.div>
          </div>
        </div>
      );
    }

    if (title.toLowerCase().includes('analytics') || title.toLowerCase().includes('chart')) {
      return (
        <div className="relative w-full h-32 mb-4 flex items-center justify-center">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl"
            whileHover={{ scale: 1.05 }}
          />
          <div className="relative z-10 bg-white p-4 rounded-xl shadow-lg border">
            <div className="flex items-end space-x-1 mb-2">
              <motion.div 
                className="w-2 h-4 bg-green-500 rounded-sm"
                animate={{ height: [16, 20, 16] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="w-2 h-6 bg-emerald-500 rounded-sm"
                animate={{ height: [24, 28, 24] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              />
              <motion.div 
                className="w-2 h-3 bg-green-400 rounded-sm"
                animate={{ height: [12, 16, 12] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              />
            </div>
            <Icon className="w-4 h-4 text-green-600" />
          </div>
        </div>
      );
    }

    // Default illustration
    return (
      <div className="relative w-full h-32 mb-4 flex items-center justify-center">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl"
          whileHover={{ scale: 1.05 }}
        />
        <motion.div 
          className="relative z-10 bg-gradient-to-r from-slate-600 to-slate-700 p-4 rounded-xl shadow-lg"
          whileHover={{ rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-10 h-10 text-white" />
        </motion.div>
      </div>
    );
  };

  return getIllustration();
};

const AdvancedCard = ({ icon: Icon, title, description }: AdvancedCardProps) => {
  return (
    <motion.div 
      whileHover={{ 
        y: -8, 
        scale: 1.02, 
        boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.12)',
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      className="relative bg-white backdrop-blur-sm border border-slate-200/60 rounded-3xl p-8 h-full flex flex-col transition-all duration-300 ease-in-out cursor-pointer group overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br from-primary to-secondary rounded-3xl" />
      
      {/* Illustration */}
      <FeatureIllustration icon={Icon} title={title} />
      
      {/* Content */}
      <div className="relative z-10 flex-1">
        <motion.h3 
          className="text-2xl font-bold text-foreground mb-3 leading-tight"
          whileHover={{ x: 3 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-muted-foreground leading-relaxed text-base mb-6"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {description}
        </motion.p>
      </div>

      {/* CTA */}
      <motion.div
        className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100"
        initial={{ opacity: 0.6 }}
        whileHover={{ opacity: 1 }}
      >
        <motion.span 
          className="text-primary font-semibold text-lg group-hover:text-secondary transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          Learn More
        </motion.span>
        <motion.div
          className="bg-gradient-to-r from-primary to-secondary p-2 rounded-full shadow-lg group-hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.1, rotate: 45 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="w-5 h-5 text-white" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AdvancedCard;
