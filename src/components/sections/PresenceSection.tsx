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
    <section id="presencas" className="section-padding bg-[var(--special-branco)]">
      <div className="container-franciscan" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--neutral-grafite)] mb-4">
            {presenceContent.title}
          </h2>
          <p className="text-lg text-[var(--nature-folhagem)] font-medium mb-6">
            {presenceContent.subtitle}
          </p>
          <p className="text-lg text-[var(--neutral-cinza)] leading-relaxed">
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
              className={`group relative p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                hoveredIndex === index
                  ? "border-[var(--nature-folhagem)] bg-[var(--nature-folhagem)]/5 shadow-lg"
                  : "border-[var(--earth-barro)] bg-[var(--earth-areia)] hover:border-[var(--nature-folhagem)]/50"
              }`}
            >
              {/* Location Icon */}
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                    hoveredIndex === index
                      ? "bg-[var(--nature-folhagem)] text-[var(--special-branco)]"
                      : "bg-[var(--earth-barro)] text-[var(--nature-folhagem)]"
                  }`}
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg text-[var(--neutral-grafite)] mb-1">
                    {location.city}
                  </h3>
                  <p className="text-sm text-[var(--nature-folhagem)] font-medium mb-2">
                    {location.state} · {location.type}
                  </p>
                  <p
                    className={`text-sm text-[var(--neutral-cinza)] leading-relaxed transition-all duration-300 ${
                      hoveredIndex === index ? "opacity-100 max-h-24" : "opacity-70 max-h-12"
                    }`}
                  >
                    {location.description}
                  </p>
                </div>
              </div>

              {/* Decorative corner */}
              <div
                className={`absolute top-0 right-0 w-16 h-16 rounded-bl-full transition-colors ${
                  hoveredIndex === index ? "bg-[var(--nature-folhagem)]/10" : "bg-transparent"
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
          className="mt-12 p-8 rounded-2xl bg-[var(--earth-barro)]/30 text-center"
        >
          <div className="flex items-center justify-center gap-2 text-[var(--neutral-pedra)]">
            <MapPin className="w-5 h-5" />
            <span className="text-sm">
              Visualize todas as nossas comunidades no mapa interativo (em breve)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
