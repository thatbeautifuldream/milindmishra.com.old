"use client";

import GitHubCalendar from "react-github-calendar";
import WordRotate from "../ui/word-rotate";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <GitHubCalendar
        username="thatbeautifuldream"
        colorScheme="light"
        hideColorLegend
        labels={{
          totalCount: "$ git push 'd {{count}} times",
        }}
      />
      <WordRotate
        words={[
          "Software Engineer",
          "Web Developer",
          "Tech Consultant",
          "Freelancer",
          "Open Source Contributor",
        ]}
        className="m-4"
      />
    </div>
  );
}
