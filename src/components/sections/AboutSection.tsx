"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Heart, Compass, Leaf } from "lucide-react";
import { aboutContent } from "@/content/mockData";

const iconMap = {
  users: Users,
  heart: Heart,
  compass: Compass,
  leaf: Leaf,
};

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="quem-somos" className="section-padding bg-[var(--franciscan-cream)]">
      <div className="container-franciscan" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--franciscan-habit)] mb-4">
            {aboutContent.title}
          </h2>
          <p className="text-xl font-bold text-[var(--franciscan-clay)] mb-6">
            {aboutContent.subtitle}
          </p>
          <p className="text-lg font-medium text-[var(--franciscan-earth)] leading-relaxed">
            {aboutContent.description}
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {aboutContent.pillars.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-[var(--franciscan-parchment)] border-2 border-[var(--franciscan-sand)] hover:border-[var(--franciscan-habit)] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-[var(--franciscan-habit)] flex items-center justify-center">
                    <IconComponent className="w-7 h-7 text-[var(--franciscan-cream)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[var(--franciscan-habit)] mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-base font-medium text-[var(--franciscan-earth)] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {aboutContent.stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl border-2 border-[var(--franciscan-sand)] bg-[var(--franciscan-cream)]"
            >
              <div className="text-3xl md:text-4xl font-serif font-bold text-[var(--franciscan-habit)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-[var(--franciscan-stone)]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
