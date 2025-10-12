"use client";

import AboutTab from "@/components/dashboard/AboutTab";
import ActiveLicenseModal from "@/components/dashboard/ActiveLicenseModal";
import TabSelection from "@/components/dashboard/TabSelection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { useSubscription } from "@/hooks/use-subscription";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Page = () => {
  const [selectedTab, setSelectedTab] = useState<string>("Giới thiệu");

  const {
    key,
    clearSubscriptionKey,
    verifySubscriptionKey,
    isValid,
    error,
    clearError,
  } = useSubscription();

  useEffect(() => {
    verifySubscriptionKey();
  }, []);

  useEffect(() => {
    if (isValid === false && error) {
      toast.error(error);
      clearError();
    }
  }, [error, isValid, clearError]);

  return (
    <MaxWidthWrapper>
      <div className="py-10">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl tracking-tight text-blue-600 font-semibold">
            TOOL SÁNG TẠO NỘI DUNG v10
          </h1>
          {!key ? (
            <ActiveLicenseModal />
          ) : (
            <Button
              variant={"destructive"}
              className="cursor-pointer"
              onClick={clearSubscriptionKey}
            >
              Xóa key
            </Button>
          )}
        </div>
        <div className="mt-6">
          <TabSelection
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </div>

        {selectedTab === "Giới thiệu" && <AboutTab />}
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
