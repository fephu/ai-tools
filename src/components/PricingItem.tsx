"use client";

import { cn } from "@/lib/utils";
import { Check, ChevronRight } from "lucide-react";
import MovingArrowButton from "./MovingArrowButton";

interface PricingItemProps {
  plan: string;
  description: string;
  price: number;
  features: string[];
}

const PricingItem = ({
  plan,
  description,
  features,
  price,
}: PricingItemProps) => {
  return (
    <div
      className={cn(
        "rounded-xl shadow-sm text-left border border-gray-200 flex flex-col justify-between",
        plan === "Plus" && "border-blue-600"
      )}
    >
      <div className="p-6">
        <p
          className={`text-3xl font-bold ${plan === "Plus" && "text-blue-600"}`}
        >
          {plan}
        </p>
        <p className="mt-1 text-gray-500">{description}</p>
      </div>

      <div className="p-6 flex flex-col gap-3">
        {features.map((f) => (
          <div key={f} className="flex items-center gap-2">
            <Check className="size-4" />
            <span>{f}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 p-6 items-end">
        {price > 0 && <p className="text-4xl">${price}</p>}
        {plan === "Plus" && <MovingArrowButton className="bg-gray-200" />}
      </div>
    </div>
  );
};

export default PricingItem;
