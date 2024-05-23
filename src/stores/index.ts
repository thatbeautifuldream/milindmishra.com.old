import { create } from "zustand";

export type TabType = "About" | "Projects" | "Resume" | "Blogs";

interface TabState {
  selectedTab: TabType;
  setSelectedTab: (tab: TabType) => void;
}

export const useTabStore = create<TabState>((set) => ({
  selectedTab: "About",
  setSelectedTab: (tab: TabType) => set({ selectedTab: tab }),
}));
