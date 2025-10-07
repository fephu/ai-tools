import type { Metadata } from "next";
import { Geist, Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "variable",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI APPS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("h-full font-sans antialiased", roboto.className)}>
        <main>{children}</main>
      </body>
    </html>
  );
}
