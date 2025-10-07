import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isAdminLogin = () => {
  if (typeof window === "undefined") return false;

  const token = localStorage.getItem("token");
  return !!token;
};

export const isSubscription = () => {
  if (typeof window === "undefined") return false;

  const apiKey = localStorage.getItem("api-key");
  return !!apiKey;
};
