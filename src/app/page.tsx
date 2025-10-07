import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import gemini from "@/assets/gemini.svg";
import geminiText from "@/assets/gemini-text.svg";
import PricingItem from "@/components/PricingItem";
import * as motion from "motion/react-client";

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
    features: ["Access to Gemini", "Access to GPT"],
  },
];

export default function Home() {
  return (
    <div>
      <MaxWidthWrapper>
        <div className="py-40 mx-auto text-center flex flex-col gap-6 items-center max-w-4xl">
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
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper>
        <motion.div
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="py-20 mx-auto text-center flex flex-col items-center max-w-4xl h-screen"
        >
          <h1 className="text-sm font-bold tracking-tight text-gray-600 sm:text-base">
            Explore our variety of language models
          </h1>

          <div className="flex items-center gap-1 mt-2">
            <Image src={gemini} alt="gemini logo" className="size-6" />
            <Image src={geminiText} alt="gemini logo" className="size-22" />
          </div>
        </motion.div>
      </MaxWidthWrapper>

      <section id="pricing" className="h-screen">
        <MaxWidthWrapper>
          <div className="py-24 mx-auto text-center flex flex-col items-center max-w-3xl">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Pricing
            </h1>

            <div className="grid grid-cols-2 gap-x-10 pt-12">
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
