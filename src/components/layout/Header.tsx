"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigation, siteConfig } from "@/content/mockData";

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
          ? "bg-[var(--special-branco)]/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="container-franciscan">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Tau Symbol */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <span
                className={`text-3xl font-serif transition-colors duration-300 ${
                  isScrolled
                    ? "text-[var(--special-dourado)]"
                    : "text-[var(--special-dourado)]"
                }`}
              >
                τ
              </span>
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif text-lg leading-tight transition-colors duration-300 ${
                  isScrolled
                    ? "text-[var(--neutral-grafite)]"
                    : "text-[var(--neutral-grafite)]"
                }`}
              >
                Frades Menores
              </span>
              <span
                className={`text-xs transition-colors duration-300 ${
                  isScrolled
                    ? "text-[var(--neutral-pedra)]"
                    : "text-[var(--neutral-pedra)]"
                }`}
              >
                Província Santa Cruz
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:bg-[var(--earth-barro)]/50 ${
                  isScrolled
                    ? "text-[var(--neutral-cinza)] hover:text-[var(--nature-folhagem)]"
                    : "text-[var(--neutral-cinza)] hover:text-[var(--nature-folhagem)]"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              asChild
              className="ml-4 bg-[var(--nature-folhagem)] hover:bg-[var(--nature-musgo)] text-[var(--special-branco)]"
            >
              <Link href="#vocacoes">Vem com a gente</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--earth-barro)]/50 transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[var(--neutral-grafite)]" />
            ) : (
              <Menu className="w-6 h-6 text-[var(--neutral-grafite)]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[var(--special-branco)] border-t border-[var(--earth-barro)]"
          >
            <div className="container-franciscan py-4">
              <div className="flex flex-col gap-1">
                {navigation.main.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-[var(--neutral-cinza)] hover:text-[var(--nature-folhagem)] hover:bg-[var(--earth-barro)]/30 rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 px-4">
                  <Button
                    asChild
                    className="w-full bg-[var(--nature-folhagem)] hover:bg-[var(--nature-musgo)] text-[var(--special-branco)]"
                  >
                    <Link
                      href="#vocacoes"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Vem com a gente
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
