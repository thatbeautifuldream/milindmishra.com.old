"use client";

import AnimateChildren from "~/components/animate-children";

export default function Resume() {
  return (
    <AnimateChildren>
      <div className="flex flex-col items-center justify-center space-y-4">
        <iframe
          src="https://docs.google.com/document/d/1ujYf9MIOEeH3UpaHKZmXm_9-W6XpSQ5LAcLUv0ue32k/preview?embedded=true"
          className="h-screen w-full rounded-md"
        />
      </div>
    </AnimateChildren>
  );
}
