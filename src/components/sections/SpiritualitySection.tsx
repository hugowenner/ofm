"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { spiritualityContent } from "@/content/mockData";

export function SpiritualitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="espiritualidade" className="section-padding bg-[var(--earth-areia)]">
      <div className="container-franciscan" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--neutral-grafite)] mb-4">
            {spiritualityContent.title}
          </h2>
          <p className="text-lg text-[var(--nature-folhagem)] font-medium mb-6">
            {spiritualityContent.subtitle}
          </p>
          <p className="text-lg text-[var(--neutral-cinza)] leading-relaxed">
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
              className="relative p-8 rounded-2xl bg-[var(--special-branco)] border border-[var(--earth-barro)]"
            >
              {/* Number */}
              <span className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-[var(--special-dourado)] text-[var(--neutral-grafite)] flex items-center justify-center font-serif text-lg">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-serif text-[var(--neutral-grafite)] mb-4 pl-2">
                {element.title}
              </h3>
              <p className="text-[var(--neutral-cinza)] leading-relaxed pl-2">
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
          {spiritualityContent.highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] bg-[var(--nature-musgo)]"
            >
              {/* Background Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--neutral-grafite)] via-transparent to-transparent opacity-80" />
              
              {/* Decorative pattern for placeholder */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="text-[200px] font-serif text-[var(--special-branco)]">
                  τ
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-[var(--earth-areia)]">
                <h3 className="text-xl font-serif mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-[var(--earth-areia)]/80 leading-relaxed">
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
