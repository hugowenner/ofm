"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navigation } from "@/content/mockData";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-(--franciscan-cream)/84 backdrop-blur-md border-b border-[color-mix(in_srgb,var(--franciscan-sand)_60%,white_40%)] shadow-[0_14px_34px_-30px_rgba(42,29,19,0.95)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-franciscan">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex items-center justify-center bg-franciscan-habit rounded-2xl border border-[color-mix(in_srgb,var(--franciscan-clay)_42%,var(--franciscan-earth)_58%)] shadow-[0_15px_30px_-26px_rgba(41,27,16,0.95)]">
              <span className="text-3xl font-serif font-bold text-franciscan-cord">
                τ
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold leading-tight text-franciscan-habit">
                Frades Menores
              </span>
              <span className="text-[11px] uppercase tracking-[0.11em] font-semibold text-franciscan-stone">
                Província Santa Cruz
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1.5">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="link-micro px-3.5 py-2 text-sm font-medium tracking-[0.01em] text-franciscan-earth hover:text-franciscan-habit rounded-xl"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-(--franciscan-sand)/45 transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-franciscan-habit" />
            ) : (
              <Menu className="w-6 h-6 text-franciscan-habit" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-franciscan-cream border-t border-[color-mix(in_srgb,var(--franciscan-sand)_68%,white_32%)]"
          >
            <div className="container-franciscan py-4">
              <div className="rounded-2xl border border-[color-mix(in_srgb,var(--franciscan-sand)_62%,white_38%)] bg-[rgba(255,255,255,0.46)] p-2">
                <div className="flex flex-col gap-1">
                {navigation.main.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="link-micro-sm px-3.5 py-3 font-medium text-franciscan-earth hover:text-franciscan-habit hover:bg-(--franciscan-sand)/26 rounded-xl"
                  >
                    <span className="inline-flex items-center">
                      {item.name}
                    </span>
                  </Link>
                ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
