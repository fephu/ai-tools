"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Loader2 } from "lucide-react";
import { VerifySubscription } from "@/services/subscription";

const ActiveLicenseDialog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [key, setKey] = useState<string>("");
  const verify = VerifySubscription(key);

  const handleVerifyKey = () => {
    verify.mutate({ key });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Nhập API Key</Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogTitle className="text-2xl">API Key</DialogTitle>
        <DialogDescription>
          Vui lòng nhập API Key để sử dụng chức năng.
        </DialogDescription>
        <div className="flex flex-col gap-4 items-end">
          <Input
            onChange={(e) => setKey(e.target.value)}
            placeholder="Key"
            required
          />
          <Button className="w-fit" onClick={handleVerifyKey}>
            Xác nhận
            {verify.isPending && <Loader2 className="animate-spin" />}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ActiveLicenseDialog;
