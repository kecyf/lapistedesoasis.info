"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#next-edition", label: "Prochaine Édition" },
  { href: "#about", label: "Notre Histoire" },
  { href: "#editions", label: "Éditions" },
  { href: "#team", label: "Équipe" },
  { href: "/reglement", label: "Règlement" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-sand-50/95 backdrop-blur-md shadow-warm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-terracotta-400 to-terracotta-600 flex items-center justify-center">
                <span className="text-white font-heading text-lg font-bold">
                  O
                </span>
              </div>
              <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-oasis-500" />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-heading text-lg font-medium leading-tight transition-colors",
                  isScrolled ? "text-night-900" : "text-white"
                )}
              >
                La Piste
              </span>
              <span
                className={cn(
                  "text-xs tracking-widest uppercase transition-colors",
                  isScrolled ? "text-terracotta-600" : "text-sand-200"
                )}
              >
                des Oasis
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-terracotta-500",
                  isScrolled ? "text-night-800" : "text-sand-100"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/inscription"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta-500 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-terracotta-600 hover:scale-105"
            >
              Je m'inscris
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={cn(
                  "block h-0.5 w-full transition-all",
                  isScrolled ? "bg-night-900" : "bg-white",
                  isMobileMenuOpen && "rotate-45 translate-y-2"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-full transition-all",
                  isScrolled ? "bg-night-900" : "bg-white",
                  isMobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-full transition-all",
                  isScrolled ? "bg-night-900" : "bg-white",
                  isMobileMenuOpen && "-rotate-45 -translate-y-2"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-base font-medium py-2",
                      isScrolled ? "text-night-800" : "text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/inscription"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta-500 px-6 py-3 text-base font-medium text-white"
                >
                  Je m'inscris
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}

