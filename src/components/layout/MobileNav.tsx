"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, ArrowRight, Phone, Mail } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

export function MobileNav({ isOpen, onClose, navLinks }: MobileNavProps) {
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-forest-dark/80 backdrop-blur-xs transition-opacity animate-in fade-in"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-canvas p-6 shadow-2xl flex flex-col justify-between border-l border-sand-border animate-in slide-in-from-right duration-300">
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-sand-border">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-2 text-forest-dark"
            >
              <div className="w-9 h-9 rounded-xs overflow-hidden">
                <Image src="/logo.png" alt="EduVoyagers Logo" width={36} height={36} className="w-full h-full object-contain" />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-wider text-forest">
                EDUVOYAGERS
              </span>
            </Link>
            <button
              onClick={onClose}
              type="button"
              className="p-2 -mr-2 text-charcoal hover:text-forest transition-colors rounded-xs focus:outline-hidden"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between py-3 px-3 text-base font-medium transition-colors rounded-sm ${
                    isActive
                      ? "text-forest bg-forest-subtle font-semibold"
                      : "text-charcoal hover:text-forest hover:bg-sand-light/60"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "text-forest" : "text-charcoal-light"
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-between py-3 px-3 text-base font-medium text-charcoal hover:text-forest hover:bg-sand-light/60 rounded-sm"
            >
              <span>Contact</span>
              <ArrowRight className="w-4 h-4 text-charcoal-light" />
            </Link>
          </nav>
        </div>

        <div className="pt-6 border-t border-sand-border space-y-4">
          <Button
            href="/plan-a-program"
            variant="primary"
            size="lg"
            className="w-full justify-center"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Plan a Journey
          </Button>

          <div className="pt-2 text-xs text-charcoal-muted space-y-1.5">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-forest" />
              <span>contact@eduvoyagers.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-forest" />
              <span>+91 70045 18406</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
