import ActiveLicenseDialog from "@/components/dashboard/ActiveLicenseDialog";
import TabSelection from "@/components/dashboard/TabSelection";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { isSubscription } from "@/lib/utils";

const Page = () => {
  return (
    <MaxWidthWrapper>
      <div className="py-10">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl tracking-tight text-blue-600 font-semibold">
            TOOL SÁNG TẠO NỘI DUNG v10
          </h1>
          <div>{!isSubscription() && <ActiveLicenseDialog />}</div>
        </div>
        <div className="mt-6 hidden">
          <TabSelection />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
