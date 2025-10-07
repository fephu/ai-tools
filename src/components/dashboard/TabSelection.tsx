"use client";

import { TABS } from "@/types";
import TabSelectionItem from "./TabSelectionItem";
import { useState } from "react";

const TabSelection = () => {
  const [selectedTab, setSelectedTab] = useState("");

  return (
    <div className="flex items-center gap-4">
      {TABS.map((item) => (
        <TabSelectionItem
          isLocked={true}
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
