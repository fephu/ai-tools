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

  const apiKey = localStorage.getItem("key");

  return !!apiKey;
};

export function getBaseUrl() {
  const API_URL =
    process.env.NODE_ENV === "production"
      ? "https://ai-tools-ebon.vercel.app"
      : "http://localhost:3000";
}
