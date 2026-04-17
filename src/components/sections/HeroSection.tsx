"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { heroContent } from "@/content/mockData";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--franciscan-parchment)]">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--franciscan-sand)]/40" />
        
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tau-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <text x="30" y="40" textAnchor="middle" fontSize="24" fontWeight="bold" fill="currentColor" className="text-[var(--franciscan-habit)]">
                  τ
                </text>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tau-pattern)" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-franciscan text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Tau Symbol */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-[var(--franciscan-habit)]">
              <span className="text-6xl md:text-7xl font-serif font-bold text-[var(--franciscan-cord)]">
                τ
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[var(--franciscan-habit)] mb-6 text-balance">
            {heroContent.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-bold text-[var(--franciscan-clay)] mb-6">
            {heroContent.subtitle}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl font-medium text-[var(--franciscan-earth)] leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
            {heroContent.description}
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              asChild
              size="lg"
              className="bg-[var(--franciscan-habit)] hover:bg-[var(--franciscan-earth)] text-[var(--franciscan-cream)] px-8 font-bold text-lg"
            >
              <Link href={heroContent.cta.primary.href}>
                {heroContent.cta.primary.text}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-[var(--franciscan-habit)] text-[var(--franciscan-habit)] hover:bg-[var(--franciscan-habit)] hover:text-[var(--franciscan-cream)] px-8 font-bold text-lg"
            >
              <Link href={heroContent.cta.secondary.href}>
                {heroContent.cta.secondary.text}
              </Link>
            </Button>
          </motion.div>

          {/* Quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-xl mx-auto p-6 rounded-xl bg-[var(--franciscan-sand)]/50"
          >
            <p className="text-lg md:text-xl font-medium italic text-[var(--franciscan-earth)] mb-3">
              &ldquo;{heroContent.quote.text}&rdquo;
            </p>
            <cite className="text-base font-bold not-italic text-[var(--franciscan-cord)]">
              — {heroContent.quote.author}
            </cite>
          </motion.blockquote>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#quem-somos"
            className="flex flex-col items-center gap-2 text-[var(--franciscan-stone)] hover:text-[var(--franciscan-habit)] transition-colors"
          >
            <span className="text-xs font-bold uppercase tracking-wider">Explorar</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
