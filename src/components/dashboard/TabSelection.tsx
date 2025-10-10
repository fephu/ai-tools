"use client";

import { TABS } from "@/types";
import TabSelectionItem from "./TabSelectionItem";
import { useEffect, useState } from "react";

const TabSelection = () => {
  const [selectedTab, setSelectedTab] = useState("Giới thiệu");
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setIsActive(!!localStorage.getItem("key"));
  }, []);

  return (
    <div className="flex items-center gap-4">
      <TabSelectionItem
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        text={"Giới thiệu"}
      />
      {TABS.map((item) => (
        <TabSelectionItem
          isLocked={!isActive}
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
