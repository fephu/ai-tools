"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { MdOutlineArrowOutward } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="fixed z-40 top-0 insent-x-0 h-18 w-full backdrop-blur-md">
      <header className="relative">
        <MaxWidthWrapper>
          <div className="flex h-16 items-center justify-between">
            <Link href="#">
              <span className="text-xl md:text-3xl text-blue-800 font-bold tracking-tight">
                AI Tools
              </span>
            </Link>

            <div className="ml-auto hidden md:flex items-center gap-6">
              <Link
                href="#pricing"
                className={buttonVariants({
                  variant: "ghost",
                })}
              >
                <span className="text-base font-normal tracking-tight">
                  Gói giá
                </span>
              </Link>
              <Link
                href="#contact"
                className={buttonVariants({
                  variant: "ghost",
                  className:
                    "bg-blue-700 text-white hover:bg-blue-600 hover:text-white",
                })}
              >
                <span className="text-base font-normal tracking-tight">
                  Liên hệ
                </span>
                <MdOutlineArrowOutward />
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
