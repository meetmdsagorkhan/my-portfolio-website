"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "@/lib/lenis";

interface LenisProps {
  children: React.ReactNode;
  isInsideModal?: boolean;
}

function SmoothScroll({ children, isInsideModal = false }: LenisProps) {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
      lenis?.stop();
      lenis?.start();
    });
  }, []);

  // When inside modal, just return children without Lenis wrapper for native scrolling
  if (isInsideModal) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        duration: 2,
        prevent: (node) => {
          // Prevent Lenis when modal is open
          const modalOpen = document.querySelector('.modall') !== null;
          return modalOpen;
        },
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
