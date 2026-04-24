"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { historyContent } from "@/content/mockData";
import { SectionHeader } from "@/components/ui/section-header";

export function HistorySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="historia" className="section-shell">
      <div className="container-franciscan" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {} }
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionHeader
            kicker="Caminho"
            title={historyContent.title}
            subtitle={historyContent.subtitle}
            description={historyContent.description}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {historyContent.moments.map((moment, index) => (
            <motion.article
              key={moment.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {} }
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="card-premium"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary bg-[linear-gradient(135deg,var(--semantic-primary),var(--semantic-primary-light))] text-inverse font-serif font-bold">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary leading-tight mb-3">
                    {moment.title}
                  </h3>
                  <p className="text-base md:text-[1.02rem] font-medium text-secondary leading-relaxed">
                    {moment.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {} }
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 surface-soft p-7 md:p-8"
        >
          <p className="text-base md:text-lg font-medium text-primary leading-relaxed max-w-4xl">
            A Província Santa Cruz nasceu da travessia, passou pela prova e amadureceu no serviço. 
            O que sustenta essa história não é a ideia de grandeza, mas a fidelidade ao Evangelho 
            vivido com simplicidade.
          </p>
        </motion.div>
      </div>
    </section>
  );
}