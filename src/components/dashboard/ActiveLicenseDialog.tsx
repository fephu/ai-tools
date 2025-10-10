"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { axiosInstance } from "@/lib/axios";
import axios from "axios";

const ActiveLicenseDialog = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [key, setKey] = useState<string>("");

  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    setIsActive(!!localStorage.getItem("key"));
  }, []);

  const handleVerifyKey = async () => {
    if (key === "" || !key) {
      return;
    }

    try {
      const res = await axiosInstance.post("/subscription/verify", {
        key,
      });

      alert(res.data.message);

      localStorage.setItem("key", key);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data);
      } else {
        alert("Unexpected error");
      }
    }
  };

  return (
    <>
      {isActive ? (
        <Button variant={"outline"}>Mua thêm key</Button>
      ) : (
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
              <Input
                onChange={(e) => setKey(e.target.value)}
                placeholder="Key"
              />
              <Input
                onChange={(e) => setKey(e.target.value)}
                placeholder="Email"
              />
              <Button className="w-fit" onClick={handleVerifyKey}>
                Xác nhận
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default ActiveLicenseDialog;
