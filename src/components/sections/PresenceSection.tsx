"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { presenceContent } from "@/content/mockData";
import { SectionHeader } from "@/components/ui/section-header";

export function PresenceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [featuredLocation, ...otherLocations] = presenceContent.locations;

  return (
    <section id="presencas" className="section-shell">
      <div className="container-franciscan" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionHeader
            kicker="Território"
            title={presenceContent.title}
            subtitle={presenceContent.subtitle}
            description={presenceContent.description}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 items-stretch">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45 }}
            className="lg:col-span-5 surface-highlight p-6 md:p-7 lg:p-8 min-h-105 flex flex-col"
          >
            <div className="relative mb-6 overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--franciscan-sand)_62%,white_38%)] bg-[rgba(255,255,255,0.34)] p-5">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[rgba(196,163,90,0.15)]" />
              <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-franciscan-stone mb-3">
                Presença em Destaque
              </p>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-franciscan-habit mb-2 leading-tight">
                {featuredLocation.city}
              </h3>
              <p className="text-sm md:text-base font-semibold text-franciscan-clay">
                {featuredLocation.state} · {featuredLocation.type}
              </p>
            </div>

            <p className="text-base md:text-lg text-franciscan-earth leading-relaxed max-w-[36ch]">
              {featuredLocation.description}
            </p>

            <div className="mt-auto pt-8">
              <div className="rounded-2xl border border-[color-mix(in_srgb,var(--franciscan-sand)_64%,white_36%)] bg-[rgba(255,255,255,0.44)] p-4 flex items-center justify-between transition-all duration-300 hover:border-[color-mix(in_srgb,var(--franciscan-clay)_45%,var(--franciscan-sand)_55%)] hover:shadow-[0_18px_30px_-26px_rgba(41,27,16,0.9)] cursor-pointer">
                <div className="flex items-center gap-3 text-franciscan-habit">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(107,68,35,0.1)]">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span className="font-semibold text-sm">Saiba mais sobre esta comunidade</span>
                </div>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(255,255,255,0.72)]">
                  <ArrowUpRight className="w-4 h-4 text-franciscan-clay" />
                </span>
              </div>
            </div>
          </motion.article>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {otherLocations.map((location, index) => (
            <motion.div
              key={`${location.city}-${location.state}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: (index + 1) * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer h-full ${
                hoveredIndex === index
                  ? "border-[color-mix(in_srgb,var(--franciscan-habit)_40%,var(--franciscan-sand)_60%)] bg-[rgba(255,255,255,0.86)] -translate-y-1 scale-[1.02] shadow-[0_20px_34px_-26px_rgba(41,27,16,0.95)]"
                  : index < 2
                    ? "border-[color-mix(in_srgb,var(--franciscan-clay)_35%,var(--franciscan-sand)_65%)] bg-[rgba(255,255,255,0.72)] hover:border-[color-mix(in_srgb,var(--franciscan-habit)_42%,var(--franciscan-sand)_58%)] hover:scale-[1.01] hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-26px_rgba(41,27,16,0.9)]"
                    : "border-[color-mix(in_srgb,var(--franciscan-sand)_70%,white_30%)] bg-[rgba(255,255,255,0.56)] hover:border-[color-mix(in_srgb,var(--franciscan-clay)_45%,var(--franciscan-sand)_55%)] hover:scale-[1.01] hover:-translate-y-0.5 hover:shadow-[0_16px_30px_-26px_rgba(41,27,16,0.9)]"
              }`}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <div
                  className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    hoveredIndex === index
                      ? "bg-franciscan-habit text-franciscan-cream shadow-[0_14px_24px_-18px_rgba(41,27,16,0.95)]"
                      : "bg-[color-mix(in_srgb,var(--franciscan-sand)_55%,white_45%)] text-franciscan-habit"
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] font-semibold text-franciscan-clay bg-[rgba(212,196,168,0.22)] border border-[color-mix(in_srgb,var(--franciscan-sand)_66%,white_34%)]">
                  {location.type}
                </span>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-serif text-lg font-bold text-franciscan-habit mb-1 leading-tight">
                  {location.city}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-franciscan-stone mb-2">
                  {location.state}
                </p>
                <p
                  className={`text-sm font-medium text-franciscan-earth leading-relaxed transition-all duration-300 ${
                    hoveredIndex === index ? "opacity-100" : "opacity-80"
                  }`}
                >
                  {location.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[color-mix(in_srgb,var(--franciscan-sand)_72%,white_28%)] flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.12em] font-semibold text-franciscan-stone">Explorar presença</span>
                <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${hoveredIndex === index ? "translate-x-0.5 -translate-y-0.5 text-franciscan-habit" : "text-franciscan-clay"}`} />
              </div>
            </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 surface-soft p-7 md:p-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-franciscan-habit">
            <MapPin className="w-6 h-6" />
            <span className="font-semibold tracking-[0.01em]">
              Visualize todas as nossas comunidades no mapa interativo (em breve)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
