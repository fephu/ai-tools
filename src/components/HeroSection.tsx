"use client";

import MaxWidthWrapper from "./MaxWidthWrapper";
import * as motion from "motion/react-client";
import Image from "next/image";
import gemini from "@/assets/gemini.svg";
import geminiText from "@/assets/gemini-text.svg";
import MovingArrowButton from "./MovingArrowButton";
import bgImage from "@/assets/bg.jpg";
import { useRef } from "react";
import { useInView } from "motion/react";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section
      id="#"
      style={{ backgroundImage: `url(${bgImage.src})` }}
      className="bg-cover py-48 md:py-62"
    >
      <MaxWidthWrapper>
        <div className="mx-auto text-center flex flex-col gap-6 items-center max-w-3xl">
          <motion.div
            ref={ref}
            initial={{ y: 10, opacity: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              Experience high-quality AI, built for{" "}
              <span className="text-blue-800"> Real results</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="flex gap-4 mt-6"
          >
            <MovingArrowButton />
          </motion.div>
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-40 mx-auto text-center flex flex-col items-center max-w-4xl"
          >
            <h1 className="text-sm font-bold tracking-tight text-gray-600 sm:text-base">
              Khám phá nhiều mô hình ngôn ngữ của chúng tôi
            </h1>

            <div className="flex items-center gap-4 md:gap-8 mt-2">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1"
              >
                <Image src={gemini} alt="gemini logo" className="size-6" />
                <Image src={geminiText} alt="gemini logo" className="size-22" />
              </motion.div>
              {/* <div className="flex items-center gap-1">
                <Image src={claude} alt="claude logo" className="size-6" />
                <Image src={claudeText} alt="claude logo" className="size-22" />
              </div>
              <Image src={openAi} alt="openai logo" className="size-8" /> */}
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;
