"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import loginIcon from "@/assets/login.gif";
import Link from "next/link";
import { ChevronLeft, Loader2 } from "lucide-react";
import { useState } from "react";
import { AdminLogin } from "@/services/auth";

const Page = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const login = AdminLogin();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login.mutate({ username, password });
  };

  return (
    <MaxWidthWrapper>
      <div className="h-screen max-w-sm mx-auto gap-4 flex justify-center flex-col">
        <Link
          href={"/"}
          className={buttonVariants({ variant: "ghost", className: "w-fit" })}
        >
          <ChevronLeft />
          Trang chủ
        </Link>
        <Image src={loginIcon} alt="login icon" className="w-1/6" />
        <div className="flex items-center gap-4">
          <h1 className="text-4xl font-medium">
            Đăng nhập{" "}
            <span className="text-blue-700 tracking-tighter text-4xl">
              Admin
            </span>
          </h1>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col gap-4 mt-4">
          <div className="flex flex-col gap-1 w-full">
            <Label>Tên người dùng</Label>
            <Input onChange={(e) => setUsername(e.target.value)} required />
          </div>

          <div className="flex flex-col gap-1 w-full">
            <Label>Mật khẩu</Label>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button
            size={"lg"}
            className="text-base tracking-tight cursor-pointer"
          >
            Đăng nhập
            {login.isPending && <Loader2 className="animate-spin" />}
          </Button>
        </form>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
