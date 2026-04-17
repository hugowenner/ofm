"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { heroContent } from "@/content/mockData";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[var(--earth-areia)]">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--earth-barro)]/30" />
        
        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tau-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <text x="30" y="40" textAnchor="middle" fontSize="24" fill="currentColor" className="text-[var(--nature-folhagem)]">
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
            <span className="text-7xl md:text-8xl font-serif text-[var(--special-dourado)]">
              τ
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--neutral-grafite)] mb-6 text-balance">
            {heroContent.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[var(--nature-folhagem)] font-medium mb-6">
            {heroContent.subtitle}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-[var(--neutral-cinza)] leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
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
              className="bg-[var(--nature-folhagem)] hover:bg-[var(--nature-musgo)] text-[var(--special-branco)] px-8"
            >
              <Link href={heroContent.cta.primary.href}>
                {heroContent.cta.primary.text}
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-[var(--nature-folhagem)] text-[var(--nature-folhagem)] hover:bg-[var(--nature-folhagem)] hover:text-[var(--special-branco)] px-8"
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
            className="max-w-xl mx-auto"
          >
            <p className="text-base md:text-lg italic text-[var(--neutral-pedra)] mb-2">
              &ldquo;{heroContent.quote.text}&rdquo;
            </p>
            <cite className="text-sm text-[var(--nature-folhagem)] not-italic">
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
            className="flex flex-col items-center gap-2 text-[var(--neutral-pedra)] hover:text-[var(--nature-folhagem)] transition-colors"
          >
            <span className="text-xs uppercase tracking-wider">Explorar</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
