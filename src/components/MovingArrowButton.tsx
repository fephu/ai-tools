"use client";

import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { MdOutlineArrowForward, MdOutlineArrowOutward } from "react-icons/md";

interface MovingArrowButtonProps {
  className?: string;
}

const MovingArrowButton = ({ className }: MovingArrowButtonProps) => {
  return (
    <Link
      href="/dashboard"
      className={buttonVariants({
        className: `group ${className}`,
      })}
    >
      <span>Bắt đầu</span>
      <MdOutlineArrowOutward className="size-5 transition-all duration-400 group-hover:hidden" />
      <MdOutlineArrowForward className="size-5 transition-all duration-[8s] hidden group-hover:block" />
    </Link>
  );
};

export default MovingArrowButton;
