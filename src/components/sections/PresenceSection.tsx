"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin } from "lucide-react";
import { presenceContent } from "@/content/mockData";

export function PresenceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="presencas" className="section-padding bg-[var(--franciscan-cream)]">
      <div className="container-franciscan" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--franciscan-habit)] mb-4">
            {presenceContent.title}
          </h2>
          <p className="text-xl font-bold text-[var(--franciscan-clay)] mb-6">
            {presenceContent.subtitle}
          </p>
          <p className="text-lg font-medium text-[var(--franciscan-earth)] leading-relaxed">
            {presenceContent.description}
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {presenceContent.locations.map((location, index) => (
            <motion.div
              key={`${location.city}-${location.state}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                hoveredIndex === index
                  ? "border-[var(--franciscan-habit)] bg-[var(--franciscan-habit)]/5 shadow-lg"
                  : "border-[var(--franciscan-sand)] bg-[var(--franciscan-parchment)] hover:border-[var(--franciscan-clay)]"
              }`}
            >
              {/* Location Icon */}
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                    hoveredIndex === index
                      ? "bg-[var(--franciscan-habit)] text-[var(--franciscan-cream)]"
                      : "bg-[var(--franciscan-sand)] text-[var(--franciscan-habit)]"
                  }`}
                >
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg font-bold text-[var(--franciscan-habit)] mb-1">
                    {location.city}
                  </h3>
                  <p className="text-sm font-bold text-[var(--franciscan-clay)] mb-2">
                    {location.state} · {location.type}
                  </p>
                  <p
                    className={`text-sm font-medium text-[var(--franciscan-earth)] leading-relaxed transition-all duration-300 ${
                      hoveredIndex === index ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    {location.description}
                  </p>
                </div>
              </div>

              {/* Decorative corner */}
              <div
                className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full transition-colors ${
                  hoveredIndex === index ? "bg-[var(--franciscan-cord)]/20" : "bg-transparent"
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-8 rounded-2xl bg-[var(--franciscan-sand)]/50 border-2 border-[var(--franciscan-sand)] text-center"
        >
          <div className="flex items-center justify-center gap-2 text-[var(--franciscan-habit)]">
            <MapPin className="w-6 h-6" />
            <span className="font-bold">
              Visualize todas as nossas comunidades no mapa interativo (em breve)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
