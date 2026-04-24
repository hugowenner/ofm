"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Heart, Compass, Leaf } from "lucide-react";
import { aboutContent } from "@/content/mockData";
import { SectionHeader } from "@/components/ui/section-header";

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
    <section id="quem-somos" className="section-shell">
      <div className="container-franciscan" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionHeader
            kicker="Identidade"
            title={aboutContent.title}
            subtitle={aboutContent.subtitle}
            description={aboutContent.description}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-7 mb-12 md:mb-14">
          {aboutContent.pillars.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-premium group h-full flex flex-col"
              >
                <div className="mb-5 flex items-center justify-between gap-3 border-b border-soft pb-4">
                  <span className="inline-flex items-center rounded-full border border-soft bg-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary">
                    Pilar {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="shrink-0 w-11 h-11 rounded-xl border border-soft bg-surface flex items-center justify-center group-hover:bg-brand transition-colors">
                    <IconComponent className="w-4.5 h-4.5 text-brand group-hover:text-inverse transition-colors" />
                  </div>
                </div>

                <h3 className="text-xl md:text-[1.55rem] font-serif font-bold text-heading mb-3 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-[0.98rem] md:text-base font-medium text-primary leading-relaxed mt-auto">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="surface-soft p-6 md:p-8 lg:p-10"
        >
          <div className="mb-6 md:mb-7 border-b border-soft pb-5 md:pb-6">
            <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-brand mb-2">
              Presenca concreta
            </p>
            <h3 className="font-serif text-2xl md:text-[1.9rem] font-bold text-heading leading-tight mb-2">
              Nossa missao tambem se expressa em numeros
            </h3>
            <p className="text-sm md:text-base font-medium text-secondary max-w-[62ch] leading-relaxed">
              Indicadores institucionais que ajudam a visualizar a extensao da presenca franciscana na Provincia Santa Cruz.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {aboutContent.stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center rounded-2xl p-5 md:p-6 border border-soft bg-surface"
              >
                <div className="mx-auto mb-3 h-px w-8 bg-border-soft" />
                <div className="text-3xl md:text-4xl font-serif font-bold text-heading mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-semibold uppercase tracking-[0.08em] text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
