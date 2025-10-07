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

const ActiveLicenseDialog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Nhập API Key</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle className="text-2xl">API Key</DialogTitle>
        <DialogDescription>
          Vui lòng nhập API Key để sử dụng chức năng.
        </DialogDescription>
        <div className="flex flex-col gap-4">
          <Input placeholder="Nhập API Key" />
          <Button className="w-fit">Xác nhận</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ActiveLicenseDialog;
