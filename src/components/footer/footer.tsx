"use client";

import React from "react";
import Link from "next/link";
import { footer } from "./config";
import { Button, buttonVariants } from "../ui/button"; // Import buttonVariants
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";
import { cn } from "@/lib/utils"; // Import cn utility

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6">
      <div className="text-xs text-gray-500 dark:text-gray-400 sm:w-1/3">
        © {year} Modified with ❤️ by {config.author}. Source:{""}
        <a
          href="https://github.com/naresh-khatri/3d-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          // We use buttonVariants with "ghost" to inherit the exact project styles
          // We then override sizing (h-auto, px-2) to make it fit nicely in the footer text
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "text-xs h-auto px-2 py-0.5 hover:bg-accent hover:text-accent-foreground pointer-events-auto relative z-10"
          )}
        >Naresh Khatri.</a>
      </div>
      <div className="flex items-center justify-center sm:w-1/3">
        <SocialMediaButtons />
      </div>
      <nav className="flex gap-4 sm:gap-6 z-10 sm:w-1/3 sm:justify-end">
        {footer.map((link, index) => {
          const { title, href } = link;

          return (
            <Link
              className="text-xs underline-offset-4 hover:underline"
              href={href}
              key={`l_${index}`}
            >
              <Button variant={"link"}>{title}</Button>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
}

export default Footer;