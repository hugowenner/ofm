"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { heroContent } from "@/content/mockData";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-franciscan-parchment pt-24 md:pt-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(196,163,90,0.18),transparent_48%)]" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-(--franciscan-sand)/50" />
      </div>

      <div className="relative z-10 container-franciscan text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="surface-highlight p-8 md:p-12 lg:p-14">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <Image
                src="/logo02.png"
                alt="OFM - Província Santa Cruz"
                width={160}
                height={160}
                className="mx-auto h-32 w-32 md:h-36 md:w-54 object-contain"
              />
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-franciscan-habit mb-6 text-balance leading-[1.08]">
              {heroContent.title}
            </h1>

            <p className="text-lg md:text-2xl font-semibold text-franciscan-clay mb-6 tracking-[0.01em] text-balance">
              {heroContent.subtitle}
            </p>

            <p className="text-base md:text-xl font-medium text-franciscan-earth leading-relaxed max-w-3xl mx-auto mb-10 text-balance">
              {heroContent.description}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Button asChild size="lg" className="btn-institutional px-8 text-lg rounded-2xl">
                <Link href={heroContent.cta.primary.href}>
                  {heroContent.cta.primary.text}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="btn-secondary-institutional px-8 text-lg rounded-2xl">
                <Link href={heroContent.cta.secondary.href}>{heroContent.cta.secondary.text}</Link>
              </Button>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="quote-block max-w-3xl mx-auto text-left"
            >
              <p className="text-lg md:text-2xl font-medium italic text-franciscan-earth mb-3 leading-relaxed">
                &ldquo;{heroContent.quote.text}&rdquo;
              </p>
              <cite className="text-sm md:text-base font-semibold not-italic tracking-wide text-franciscan-clay">
                {heroContent.quote.author}
              </cite>
            </motion.blockquote>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8"
          >
            <a
              href="#quem-somos"
              className="inline-flex flex-col items-center gap-2 text-franciscan-stone hover:text-franciscan-habit transition-colors"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Explorar</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
