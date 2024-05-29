"use client";

import Sign from "../assets/sign";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center space-y-2 py-6 text-sm"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <div>
        <Sign />
      </div>
      <div className="text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} - Need to reach me?{" "}
        <a
          href="https://x.com/milindmishra_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          DM me on Twitter.
        </a>
      </div>
    </motion.div>
  );
};

export default Footer;
