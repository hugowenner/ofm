"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { spiritualityContent } from "@/content/mockData";

export function SpiritualitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="espiritualidade" className="section-padding bg-[var(--franciscan-parchment)]">
      <div className="container-franciscan" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--franciscan-habit)] mb-4">
            {spiritualityContent.title}
          </h2>
          <p className="text-xl font-bold text-[var(--franciscan-clay)] mb-6">
            {spiritualityContent.subtitle}
          </p>
          <p className="text-lg font-medium text-[var(--franciscan-earth)] leading-relaxed">
            {spiritualityContent.description}
          </p>
        </motion.div>

        {/* Elements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {spiritualityContent.elements.map((element, index) => (
            <motion.div
              key={element.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-[var(--franciscan-cream)] border-2 border-[var(--franciscan-sand)] hover:border-[var(--franciscan-habit)] transition-colors"
            >
              {/* Number */}
              <span className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[var(--franciscan-cord)] text-[var(--franciscan-habit)] flex items-center justify-center font-serif font-bold text-lg shadow-lg">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-serif font-bold text-[var(--franciscan-habit)] mb-4 pl-2">
                {element.title}
              </h3>
              <p className="text-base font-medium text-[var(--franciscan-earth)] leading-relaxed pl-2">
                {element.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Highlights - Editorial Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {spiritualityContent.highlights.map((highlight) => (
            <div
              key={highlight.title}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-[var(--franciscan-habit)]"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--franciscan-earth)] via-transparent to-transparent opacity-90" />
              
              {/* Decorative Tau */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="text-[200px] font-serif font-bold text-[var(--franciscan-cream)]">
                  τ
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-[var(--franciscan-cream)]">
                <h3 className="text-xl font-serif font-bold mb-2">
                  {highlight.title}
                </h3>
                <p className="text-base font-medium text-[var(--franciscan-sand)] leading-relaxed">
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
