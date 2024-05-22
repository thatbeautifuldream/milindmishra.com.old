"use client";

import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";

export default function About() {
  return (
    <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
      <GitHubCalendar
        username="thatbeautifuldream"
        colorScheme="light"
        hideColorLegend
        labels={{
          totalCount: "{{count}} contributions in the last year ✨",
        }}
      />
    </motion.h1>
  );
}
