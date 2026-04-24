"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { spiritualityContent } from "@/content/mockData";
import { SectionHeader } from "@/components/ui/section-header";

export function SpiritualitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="espiritualidade" className="section-shell-alt">
      <div className="container-franciscan" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionHeader
            kicker="Essência"
            title={spiritualityContent.title}
            subtitle={spiritualityContent.subtitle}
            description={spiritualityContent.description}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 mb-16">
          {spiritualityContent.elements.map((element, index) => (
            <motion.div
              key={element.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-premium h-full p-6 md:p-7"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] font-semibold text-franciscan-clay bg-[rgba(212,196,168,0.24)] border border-[color-mix(in_srgb,var(--franciscan-sand)_68%,white_32%)]">
                  Pilar Espiritual
                </span>
                <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--franciscan-sand)_60%,white_40%)] bg-[rgba(255,255,255,0.58)] px-3 text-sm font-serif font-semibold text-franciscan-habit">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-franciscan-habit mb-3 leading-tight text-balance">
                {element.title}
              </h3>
              <p className="text-base md:text-[1.02rem] font-normal text-franciscan-earth leading-relaxed">
                {element.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7"
        >
          {spiritualityContent.highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className={`group relative overflow-hidden rounded-3xl border border-[color-mix(in_srgb,var(--franciscan-sand)_60%,white_40%)] aspect-5/6 ${
                index === 1 ? "md:-translate-y-4" : ""
              }`}
            >
              <div className="absolute inset-0 bg-linear-to-b from-[rgba(255,255,255,0.06)] via-[rgba(74,55,40,0.55)] to-[rgba(43,30,20,0.88)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(196,163,90,0.25),transparent_45%)]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="text-[200px] font-serif font-bold text-franciscan-cream">
                  τ
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-franciscan-cream">
                <p className="text-[11px] tracking-[0.15em] uppercase font-semibold text-franciscan-sand mb-2">
                  Destaque
                </p>
                <h3 className="text-xl font-serif font-bold mb-2 leading-tight">
                  {highlight.title}
                </h3>
                <p className="text-sm md:text-base font-medium text-franciscan-sand leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
