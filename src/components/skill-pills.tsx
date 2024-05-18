import Image from "next/image";
import React from "react";
import { skills } from "~/lib/data";

const SkillPills = () => {
  return (
    <div className="hide-scrollbar flex w-full items-center gap-2 overflow-x-auto sm:flex-wrap sm:justify-center sm:overflow-x-hidden">
      {skills.map((skill, index) => (
        <div key={index} className="flex-shrink-0">
          <button type="button">
            <span className="text-primary border-secondary hover:bg-secondary inline-flex items-center justify-between rounded-full border bg-white px-3 py-0.5 text-xs capitalize">
              <Image
                src={skill.src}
                alt={skill.alt}
                width="16"
                height="16"
                className="mr-1 h-[16px] w-[16px] object-cover"
              />
              <span className="capitalize leading-5 lg:inline">
                {skill.label}
              </span>
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default SkillPills;
