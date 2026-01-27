"use client";

import React from "react";
import Link from "next/link";
import { footer } from "./config";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-border px-4 py-6 sm:flex-row md:px-6">
      <div className="text-xs text-gray-500 dark:text-gray-400 sm:w-1/3">
        © {year} Modified with ❤️ by {config.author}. Original:{" "}
        <a
          href="https://github.com/naresh-khatri/3d-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs underline-offset-4 hover:underline pointer-events-auto relative z-10"
        >
          Naresh Khatri
        </a>
        .
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
