"use client";

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className="bg-white flex-grow-0 border-t border-gray-200">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-8">
          <div className="flex flex-col gap-1 max-w-60">
            <span className="text-3xl text-blue-700 font-bold">AI Tools</span>
            <span className="text-sm text-muted-foreground">
              Experience high-quality AI, built for Real results
            </span>
          </div>

          <div className="flex flex-col gap-1 font-medium">
            <h2 className="font-semibold text-lg">Thông tin</h2>
            <Link href={"#"}>X (Twitter)</Link>
            <Link href={"#"}>LinkedIn</Link>
            <Link href={"#"}>Email</Link>
          </div>
        </div>

        <div className="py-6 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div className="mt-4 flex items-center justify-center md:mt-0">
            <div className="flex space-x-8">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-gray-600"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
