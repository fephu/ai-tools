"use client";

import Image from "next/image";
import logoImg from "@/assets/email-campaign-84.svg";
import MaxWidthWrapper from "./MaxWidthWrapper";
import * as motion from "motion/react-client";
import { useRef } from "react";
import { useInView } from "motion/react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { LuSendHorizontal } from "react-icons/lu";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.section
      id="contact"
      ref={ref}
      initial={{ y: 10, opacity: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gray-50 py-20 md:py-26 h-fit flex items-center"
    >
      <Image
        src={logoImg}
        alt="contactus image"
        className="w-1/2 ml-4 hidden md:flex"
      />
      <MaxWidthWrapper className="max-w-2xl text-start">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
          Liên hệ chúng tôi
        </h1>
        <p className="text-sm md:text-base text-center mt-4 text-muted-foreground">
          Bạn cần hỗ trợ? Đừng ngần ngại, hãy cho chúng tôi biết.
        </p>
        <div className="pt-10">
          <form className="flex flex-col gap-4">
            <Input
              type="email"
              placeholder="Email"
              className="h-12 md:text-base"
            />
            <Input placeholder="Họ và tên" className="h-12 md:text-base" />
            <Input placeholder="Số điện thoại" className="h-12 md:text-base" />
            <Textarea
              placeholder="Lời nhắn"
              className="resize-none md:text-base"
            />
            <Button className="w-fit cursor-pointer">
              Send <LuSendHorizontal />
            </Button>
          </form>
        </div>
      </MaxWidthWrapper>
    </motion.section>
  );
};

export default ContactSection;
