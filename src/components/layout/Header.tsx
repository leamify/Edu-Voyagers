"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/experiences", label: "Experiences" },
  { href: "/learning-framework", label: "Learning Framework" },
  { href: "/safety", label: "Safety" },
  { href: "/for-schools", label: "For Schools" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMobileMenu = React.useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-canvas/95 backdrop-blur-md shadow-xs border-b border-sand-border/80 py-3.5"
            : "bg-canvas/80 backdrop-blur-xs py-5 border-b border-sand-border/30"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center group focus:outline-hidden py-0.5"
              aria-label="EduVoyagers Home"
            >
              <Image
                src="/logo.png"
                alt="EduVoyagers - Go Get Gather"
                width={240}
                height={80}
                className="h-12 sm:h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center space-x-1 xl:space-x-2"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-3.5 py-1.5 text-sm font-medium transition-colors rounded-xs relative group",
                      isActive
                        ? "text-forest font-semibold"
                        : "text-charcoal-muted hover:text-forest"
                    )}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-forest rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                href="/plan-a-program"
                variant="primary"
                size="sm"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Plan a Journey
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <Button
                href="/plan-a-program"
                variant="primary"
                size="sm"
                className="text-xs px-2.5 py-1.5"
              >
                Plan
              </Button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                className="p-2 text-charcoal hover:text-forest focus:outline-hidden transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        navLinks={NAV_LINKS}
      />
    </>
  );
}
