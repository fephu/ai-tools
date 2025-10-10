"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { IoLockClosedOutline } from "react-icons/io5";

interface TabSelectionItemProps {
  text: string;
  isLocked?: boolean;
  selectedTab: string;
  setSelectedTab: (select: string) => void;
}

const TabSelectionItem = ({
  text,
  isLocked,
  selectedTab,
  setSelectedTab,
}: TabSelectionItemProps) => {
  return (
    <Button
      variant={"outline"}
      disabled={isLocked}
      className={cn(
        "cursor-pointer",
        selectedTab === text &&
          "bg-blue-800 hover:bg-blue-700 text-white hover:text-white"
      )}
      onClick={() => setSelectedTab(text)}
    >
      {text}
      {isLocked && <IoLockClosedOutline />}
    </Button>
  );
};

export default TabSelectionItem;
