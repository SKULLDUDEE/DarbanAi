'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const CommentBox = () => {
  const [text, setText] = useState("");
  const fullText = "Hey, how can we help you?";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, [fullText]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.5 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 15, delay: 1.5 }}
      className="absolute top-1/3 left-[-10%] md:left-[-5%] flex items-center bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-xl z-20"
    >
      <Image src="/coment-box-icon1.png" alt="icon" width={40} height={40} className="mr-4" />
      <p className="typing mb-0 text-gray-800 font-medium">{text}</p>
    </motion.div>
  );
};

export default CommentBox;
