"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { MdOutlineArrowOutward } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 insent-x-0 h-16">
      <header className="relative bg-white shadow-xs">
        <MaxWidthWrapper>
          <div className="flex h-16 items-center">
            <Link href="/">
              <span className="text-xl md:text-3xl text-blue-700 font-bold">
                AI Tools
              </span>
            </Link>

            <div className="ml-auto hidden md:flex items-center gap-4">
              <Link
                href="#pricing"
                className={buttonVariants({ variant: "ghost" })}
              >
                Pricing
              </Link>
              <Link
                href="#contact"
                className={buttonVariants({ variant: "ghost" })}
              >
                Contact us
              </Link>
              <Link
                href="/login"
                className={buttonVariants({
                  variant: "ghost",
                })}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className={buttonVariants({
                  variant: "ghost",
                  className:
                    "bg-blue-700 text-white hover:bg-blue-600 hover:text-white",
                })}
              >
                Sign up
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
