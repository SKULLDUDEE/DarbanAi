'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const CommentBox2 = () => {
  const [text, setText] = useState("");
  const fullText = "Can you please help me to creating the task?";

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
      transition={{ type: "spring", stiffness: 120, damping: 15, delay: 2 }}
      className="absolute bottom-1/4 right-[-10%] md:right-[-5%] flex items-center bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-xl z-20"
    >
      <Image src="/coment-box-icon2.png" alt="icon" width={30} height={30} className="mr-3" />
      <p className="typing mb-0 text-gray-800 font-medium text-sm">{text}</p>
    </motion.div>
  );
};

export default CommentBox2;
