import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import gemini from "@/assets/gemini.svg";
import geminiText from "@/assets/gemini-text.svg";
import claude from "@/assets/claude-color.svg";
import claudeText from "@/assets/claude-text.svg";
import openAi from "@/assets/openai.svg";
import * as motion from "motion/react-client";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="py-20 md:py-40 mx-auto text-center flex flex-col gap-6 items-center max-w-3xl">
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl">
              Experience high-quality AI, built for{" "}
              <span className="text-blue-600"> Real results</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="flex gap-4 mt-6"
          >
            <Link href="/sign-up" className={buttonVariants({ size: "lg" })}>
              <span className="text-base">Get started</span>
              <ChevronRight />
            </Link>
          </motion.div>
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-40 mx-auto text-center flex flex-col items-center max-w-4xl"
          >
            <h1 className="text-sm font-bold tracking-tight text-gray-600 sm:text-base">
              Explore our variety of language models
            </h1>

            <div className="flex items-center gap-8 mt-2">
              <div className="flex items-center gap-1">
                <Image src={gemini} alt="gemini logo" className="size-6" />
                <Image src={geminiText} alt="gemini logo" className="size-22" />
              </div>
              <div className="flex items-center gap-1">
                <Image src={claude} alt="claude logo" className="size-6" />
                <Image src={claudeText} alt="claude logo" className="size-22" />
              </div>
              <Image src={openAi} alt="openai logo" className="size-8" />
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>

      <ContactSection />

      <PricingSection />
    </div>
  );
}
