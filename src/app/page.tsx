import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import gemini from "@/assets/gemini.svg";
import geminiText from "@/assets/gemini-text.svg";
import claude from "@/assets/claude-color.svg";
import claudeText from "@/assets/claude-text.svg";
import openAi from "@/assets/openai.svg";
import PricingItem from "@/components/PricingItem";
import * as motion from "motion/react-client";
import { Input } from "@/components/ui/input";
import { LuSendHorizontal } from "react-icons/lu";
import { Textarea } from "@/components/ui/textarea";
import logoImg from "@/assets/email-campaign-84.svg";

const PRICING_ITEMS = [
  {
    plan: "Free",
    description:
      "Ideal for individual users wanting to explore the basic features. This plan offers:",
    price: 0,
    features: [],
  },
  {
    plan: "Plus",
    description:
      "Designed for users seeking advanced features and extended AI model access. In addition to everything in the Free plan, this plan offers:",
    price: 16,
    features: [
      "Access to Gemini",
      "Access to GPT",
      "Access to Claude 3.5 Sonnet",
      "Image Generation ",
      "Document Library",
      "SEO Youtube",
      "Chat",
      "Auto Agent",
    ],
  },
];

export default function Home() {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="py-20 md:py-40 mx-auto text-center flex flex-col gap-6 items-center max-w-4xl">
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

      <section
        id="contact"
        className="bg-gray-50 py-10 md:py-26 h-fit flex items-center"
      >
        <Image
          src={logoImg}
          alt="contactus image"
          className="w-1/2 ml-4 hidden md:flex"
        />
        <MaxWidthWrapper className="max-w-2xl text-start">
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm md:text-base text-center mt-4 text-muted-foreground"
          >
            Do you need support? Don&apos;t hesitate, let us know
          </motion.p>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="pt-6"
          >
            <form className="flex flex-col gap-4">
              <Input
                type="email"
                placeholder="Email"
                className="h-12 md:text-base"
              />
              <Input placeholder="Full name" className="h-12 md:text-base" />
              <Input placeholder="Phone number" className="h-12 md:text-base" />
              <Textarea
                placeholder="Message"
                className="resize-none md:text-base"
              />
              <Button className="w-fit cursor-pointer">
                Send <LuSendHorizontal />
              </Button>
            </form>
          </motion.div>
        </MaxWidthWrapper>
      </section>

      <section id="pricing">
        <MaxWidthWrapper>
          <div className="py-24 mx-auto text-center flex flex-col items-center max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Pricing
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-10 pt-12">
              {PRICING_ITEMS.map((item) => (
                <PricingItem
                  key={item.plan}
                  plan={item.plan}
                  description={item.description}
                  price={item.price}
                  features={item.features}
                />
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
