"use client";

import { Navigation } from "@/components/ui/navigation";
import { useEffect, useRef, useState } from "react";
import "@/assets/css/shiv-navigation.css";

export function SiteHeader() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const shouldBeScrolled = window.scrollY > 50;
        setIsScrolled(shouldBeScrolled);
        if (shouldBeScrolled) {
          headerRef.current.classList.add("is-scrolled");
        } else {
          headerRef.current.classList.remove("is-scrolled");
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className="header header-three tw-transition-all tw-z-99 position-fixed top-0 left-0 w-full bg-transparent"
    >
      <div className="container tw-container-1800-px">
        <Navigation />
      </div>
    </header>
  );
}
