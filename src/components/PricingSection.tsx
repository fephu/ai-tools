"use client";

import { useInView } from "motion/react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import PricingItem from "./PricingItem";
import { useRef } from "react";
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

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <motion.section
      id="pricing"
      ref={ref}
      initial={{ y: 10, opacity: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
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
    </motion.section>
  );
};

export default PricingSection;
