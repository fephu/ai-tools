"use client";

import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { MdOutlineArrowForward } from "react-icons/md";

interface MovingArrowButtonProps {
  className?: string;
}

const MovingArrowButton = ({ className }: MovingArrowButtonProps) => {
  return (
    <Link
      href="/dashboard"
      className={buttonVariants({
        className: { className },
      })}
    >
      <span>Bắt đầu</span>
      <MdOutlineArrowForward className="size-4 transition-all" />
    </Link>
  );
};

export default MovingArrowButton;
