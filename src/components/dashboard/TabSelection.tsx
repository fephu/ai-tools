"use client";

import { TABS } from "@/types";
import TabSelectionItem from "./TabSelectionItem";
import { useSubscription } from "@/hooks/use-subscription";

interface TabSelectionProps {
  selectedTab: string;
  setSelectedTab: (s: string) => void;
}

const TabSelection = ({ selectedTab, setSelectedTab }: TabSelectionProps) => {
  const { key: subscriontion } = useSubscription();

  return (
    <div className="flex items-center gap-4">
      <TabSelectionItem
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        text={"Giới thiệu"}
      />
      {TABS.map((item) => (
        <TabSelectionItem
          isLocked={!subscriontion}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          key={item}
          text={item}
        />
      ))}
    </div>
  );
};

export default TabSelection;
