"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { VerifySubscription } from "@/services/subscription";

const ActiveLicenseModal = () => {
  const [key, setKey] = useState<string>("");

  const verify = VerifySubscription(key);

  const handleVerifyKey = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    verify.mutate({ key });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm transform animate-in zoom-in duration-200">
        <form onSubmit={handleVerifyKey} className="flex flex-col gap-4 p-6">
          <h2>Vui lòng nhập key để sử dụng chức năng</h2>
          <Input
            onChange={(e) => setKey(e.target.value)}
            placeholder="Key"
            required
          />
          <Button className="w-fit">
            Xác nhận
            {verify.isPending && <Loader2 className="animate-spin" />}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ActiveLicenseModal;
