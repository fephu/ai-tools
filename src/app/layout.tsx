import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Provider from "@/components/Provider";
import { Toaster } from "sonner";

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
        <main>
          <Provider>{children}</Provider>
          <Toaster richColors position="top-center" />
        </main>
      </body>
    </html>
  );
}
