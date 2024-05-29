import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./layout.css";
import Sign from "~/components/assets/sign";

export default function LayoutAnimation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      data-isOpen={isOpen}
      initial={{ borderRadius: 50 }}
      className="parent bg-background text-primary"
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div layout initial={{ borderRadius: 50 }} className="child">
        {isOpen ? (
          <>
            <Sign />
            Hire Me ?
          </>
        ) : (
          <>
            <Sign className="h-20 w-20" />
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
