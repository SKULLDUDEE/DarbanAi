"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Github } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "How it Works", href: "#how-it-works" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Contact", href: "#contact" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Github, href: "#" },
  ];

  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <Image 
                src="/darban-logo-light.svg" 
                alt="Darban AI Logo" 
                width={32} 
                height={32} 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Darban.AI
              </span>
            </div>
            <p className="text-muted-foreground">Stay updated with the latest features and AI innovations.</p>
            <div className="flex">
              <input type="email" placeholder="Enter your email" className="flex-1 p-2 rounded-l-lg border-t border-b border-l focus:ring-2 focus:ring-primary" />
              <button className="p-2 bg-primary text-white rounded-r-lg font-semibold">Subscribe</button>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-foreground mb-4 capitalize">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} Darban.AI. All rights reserved.</p>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-accent/50 text-primary hover:bg-accent"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;