"use client";

import { motion } from "framer-motion";
import About from "./about";
import Blogs from "./blogs";
import { useTabStore, type TabType } from "~/stores";

const tabs: TabType[] = ["About", "Projects", "Resume", "Blogs"];

interface TabProps {
  text: string;
  selected: boolean;
  customID?: string;
}

const Tab = ({ text, selected, customID }: TabProps) => {
  const { setSelectedTab } = useTabStore();

  return (
    <button
      onClick={() => setSelectedTab(text as TabType)}
      className={`${
        selected ? "text-primary" : " hover:text-gray-900"
      } relative rounded-md px-2 py-1 text-sm font-medium text-gray-500 transition-colors duration-300 focus-within:outline-primary`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.div
          className="absolute left-0 top-0 flex size-full h-full w-full items-end justify-center"
          layoutId={customID + "linetab"}
          transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.1 }}
        >
          <span className="z-0 h-[3px] w-[60%] rounded-t-full bg-primary"></span>
        </motion.div>
      )}
    </button>
  );
};

const AnimateTabChildren = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
    >
      {children}
    </motion.div>
  );
};

interface LineTabProps {
  center?: boolean;
  customID?: string;
}

const LineTabs = ({ center, customID }: LineTabProps) => {
  const { selectedTab } = useTabStore();

  return (
    <>
      <div
        className={`${
          center ? "justify-center " : ""
        } border-black-500/25 mb-8 flex flex-wrap items-center gap-2 border-b`}
      >
        {tabs.map((tab) => (
          <Tab
            text={tab}
            selected={selectedTab === tab}
            key={tab}
            customID={customID}
          />
        ))}
      </div>
      {selectedTab === "About" && (
        <AnimateTabChildren>
          <About />
        </AnimateTabChildren>
      )}
      {selectedTab === "Blogs" && (
        <AnimateTabChildren>
          <Blogs />
        </AnimateTabChildren>
      )}
    </>
  );
};

export default LineTabs;
