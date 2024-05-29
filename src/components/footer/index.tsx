"use client";

import { AnimateBlur } from "../animation/animate-blur";
import Sign from "../assets/sign";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 py-6 text-sm">
      <AnimateBlur className="flex flex-col items-center justify-center space-y-2 py-6 text-sm">
        <div>
          <Sign />
        </div>
        <div className="text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} - Need to reach me?{" "}
          <a
            href="https://x.com/milindmishra_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            DM me on Twitter.
          </a>
        </div>
      </AnimateBlur>
    </div>
  );
};

export default Footer;
