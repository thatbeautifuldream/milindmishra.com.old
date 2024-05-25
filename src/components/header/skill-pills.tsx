import Image from "next/image";
import React from "react";
import { type Skill, skills } from "~/lib/data";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "~/components/ui/hover-card";

export default function SkillPills() {
  return (
    <div className="hide-scrollbar flex w-full items-center gap-2 overflow-x-auto sm:flex-wrap sm:justify-center sm:overflow-x-hidden">
      {skills.map((skill, index) => (
        <SkillHover key={index} skill={skill}>
          <div className="flex-shrink-0">
            <button type="button">
              <span className="inline-flex items-center justify-between rounded-md border border-secondary bg-secondary px-3 py-0.5 text-xs capitalize text-primary hover:animate-pulse hover:bg-secondary">
                <Image
                  src={skill?.src}
                  alt={skill?.alt}
                  width="16"
                  height="16"
                  className="mr-1 h-[16px] w-[16px] object-cover"
                />
                <span className="font-semibold capitalize leading-5 text-primary/80 lg:inline">
                  {skill?.label}
                </span>
              </span>
            </button>
          </div>
        </SkillHover>
      ))}
    </div>
  );
}

function SkillHover({
  children,
  skill,
}: {
  children: React.ReactNode;
  skill: Skill;
}) {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Image
            src={skill?.src}
            alt={skill?.alt}
            width="32"
            height="32"
            className="mr-1 h-[32px] w-[32px] object-cover"
          />
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{skill?.label}</h4>
            <p className="text-sm">
              {skill?.description ?? "No description available."}
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
