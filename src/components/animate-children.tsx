"use client";

import { motion } from "framer-motion";

const AnimateChildren = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateChildren;