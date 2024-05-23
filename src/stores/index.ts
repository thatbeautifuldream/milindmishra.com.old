import { create } from "zustand";

export type TabType = "Home" | "Projects" | "Resume" | "Blogs";

interface TabState {
  selectedTab: TabType;
  setSelectedTab: (tab: TabType) => void;
}

export const useTabStore = create<TabState>((set) => ({
  selectedTab: "Home",
  setSelectedTab: (tab: TabType) => set({ selectedTab: tab }),
}));
