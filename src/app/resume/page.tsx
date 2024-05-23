"use client";

import AnimateChildren from "~/components/animate-children";

export default function Resume() {
  return (
    <AnimateChildren>
      <div className="hidden flex-col items-center justify-center sm:flex">
        <iframe
          src="https://docs.google.com/document/d/1ujYf9MIOEeH3UpaHKZmXm_9-W6XpSQ5LAcLUv0ue32k/preview?embedded=true"
          className="h-screen w-full rounded-md"
        />
      </div>
      <div className="flex flex-col items-center justify-center sm:hidden">
        <a
          href="/assets/resume/Milind_Kumar_Mishra_Resume_2024.pdf"
          download
          className="font-semibold text-blue-500 underline"
        >
          Download Resume (PDF) 📄
        </a>
      </div>
    </AnimateChildren>
  );
}
