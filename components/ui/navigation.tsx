"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home, User, GraduationCap, FolderOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/education", label: "Education", icon: GraduationCap },
  { href: "/works", label: "Works", icon: FolderOpen },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <div className="relative w-10 h-10 rounded-md overflow-hidden">
          <img
            src="/assets/images/logo/logo.png"
            alt="Shiv Shankar Yadav Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-heading font-bold text-xl text-heading tracking-wide hidden sm:inline-block">
          SHIV YADAV
        </span>
      </Link>

      <div className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-heading hover:bg-neutral-100 hover:text-black transition-all duration-300"
          >
            <link.icon className="w-4 h-4" />
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:block">
          <Button
            asChild
            className="bg-black text-white font-bold px-8 py-3 rounded-md hover:bg-neutral-800 transition-all duration-300 text-sm uppercase tracking-wider"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="rounded-lg">
              <Menu className="w-5 h-5 text-heading" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-white border-neutral-200">
            <SheetHeader>
              <SheetTitle className="font-heading text-lg font-bold text-heading">
                Menu
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 mt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-heading hover:bg-neutral-100 transition-all duration-200"
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <Button
                  asChild
                  className="w-full bg-black text-white font-bold py-3 rounded-md hover:bg-neutral-800 transition-all duration-300 text-sm uppercase tracking-wider"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Contact
                  </Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
