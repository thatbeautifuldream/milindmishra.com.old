"use client";

import { motion } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import WordRotate from "../ui/word-rotate";

export default function About() {
  return (
    <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}>
      <WordRotate
        words={[
          "Software Engineer",
          "Web Developer",
          "Tech Consultant",
          "Freelancer",
          "Open Source Contributor",
        ]}
        className="mb-4"
      />
      <GitHubCalendar
        username="thatbeautifuldream"
        colorScheme="light"
        hideColorLegend
        labels={{
          totalCount: "{{count}} contributions in the last year ✨",
        }}
      />
    </motion.div>
  );
}
