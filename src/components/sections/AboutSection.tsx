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
    <section id="quem-somos" className="section-padding bg-[var(--special-branco)]">
      <div className="container-franciscan" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--neutral-grafite)] mb-4">
            {aboutContent.title}
          </h2>
          <p className="text-lg text-[var(--nature-folhagem)] font-medium mb-6">
            {aboutContent.subtitle}
          </p>
          <p className="text-lg text-[var(--neutral-cinza)] leading-relaxed">
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
                className="group p-8 rounded-2xl bg-[var(--earth-areia)] hover:bg-[var(--earth-barro)]/30 transition-colors duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--nature-folhagem)]/10 flex items-center justify-center group-hover:bg-[var(--nature-folhagem)]/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-[var(--nature-folhagem)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-[var(--neutral-grafite)] mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-[var(--neutral-cinza)] leading-relaxed">
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
          {aboutContent.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl border border-[var(--earth-barro)] bg-[var(--special-branco)]"
            >
              <div className="text-3xl md:text-4xl font-serif text-[var(--nature-folhagem)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--neutral-pedra)]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
