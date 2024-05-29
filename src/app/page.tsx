"use client";

import GitHubCalendar from "react-github-calendar";
import AnimateChildren from "~/components/ui/animate-children";
import WordRotate from "~/components/ui/word-rotate";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();
  return (
    <AnimateChildren>
      <div className="flex flex-col items-center justify-center space-y-4">
        <GitHubCalendar
          username="thatbeautifuldream"
          colorScheme={theme === "dark" ? "dark" : "light"}
          hideColorLegend
          labels={{
            totalCount: "$ git push 'd {{count}} times since last year",
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
    </AnimateChildren>
  );
}
