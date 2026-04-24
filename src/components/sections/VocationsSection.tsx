"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Mail, Phone } from "lucide-react";
import { vocationsContent } from "@/content/mockData";
import { SectionHeader } from "@/components/ui/section-header";

export function VocationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="vocacoes"
      className="section-padding relative overflow-hidden text-primary"
      style={{
        background:
          "radial-gradient(circle at 12% -8%, rgba(139,106,78,0.12), transparent 38%), radial-gradient(circle at 88% 115%, rgba(230,222,211,0.7), transparent 44%), linear-gradient(180deg, #F5EFE6 0%, #FBF8F2 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.22] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.6),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.45),rgba(245,239,230,0.12))]" />
      <div className="container-franciscan" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            kicker="Chamado"
            title={vocationsContent.title}
            subtitle={vocationsContent.subtitle}
            description={vocationsContent.description}
            className="mb-14"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-5">
              {vocationsContent.steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative rounded-3xl border border-subtle bg-surface p-5 md:p-6 shadow-[0_18px_40px_-34px_rgba(62,44,28,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-light hover:shadow-[0_22px_42px_-30px_rgba(62,44,28,0.28)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-12 h-12 rounded-2xl border border-primary bg-[linear-gradient(170deg,var(--semantic-primary),var(--semantic-primary-light))] text-inverse flex items-center justify-center font-serif font-bold text-base shadow-[0_12px_24px_-18px_rgba(90,62,43,0.5)]">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-serif text-lg md:text-xl font-bold text-primary mb-1 leading-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base font-medium text-secondary leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <span className="absolute right-5 top-5 inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] uppercase text-primary border border-subtle bg-background/80">
                    Etapa
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-8"
          >
              <div className="surface-soft p-8 text-primary">
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 leading-tight">
                {vocationsContent.contact.title}
              </h3>
                <p className="text-base font-medium text-secondary mb-8 leading-relaxed">
                {vocationsContent.contact.description}
              </p>

              <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-subtle bg-background/75 hover:bg-surface transition-colors duration-300">
                    <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
                      <Mail className="w-5 h-5 text-inverse" />
                  </div>
                  <div>
                      <p className="text-[11px] uppercase tracking-widest font-semibold text-secondary">E-mail</p>
                    <a
                      href={`mailto:${vocationsContent.contact.email}`}
                        className="font-semibold text-primary hover:text-primary-light transition-colors"
                    >
                      {vocationsContent.contact.email}
                    </a>
                  </div>
                </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl border border-subtle bg-background/75 hover:bg-surface transition-colors duration-300">
                    <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
                      <Phone className="w-5 h-5 text-inverse" />
                  </div>
                  <div>
                      <p className="text-[11px] uppercase tracking-widest font-semibold text-secondary">Telefone</p>
                    <a
                      href={`tel:${vocationsContent.contact.phone.replace(/\D/g, "")}`}
                        className="font-semibold text-primary hover:text-primary-light transition-colors"
                    >
                      {vocationsContent.contact.phone}
                    </a>
                  </div>
                </div>

                  <div className="flex items-center gap-4 p-4 rounded-xl border border-subtle bg-background/75 hover:bg-surface transition-colors duration-300">
                    <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center">
                      <Clock className="w-5 h-5 text-inverse" />
                  </div>
                  <div>
                      <p className="text-[11px] uppercase tracking-widest font-semibold text-secondary">Horário</p>
                      <p className="font-medium text-primary">{vocationsContent.contact.schedule}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild className="btn-institutional w-full sm:w-auto rounded-xl">
                  <Link href={`mailto:${vocationsContent.contact.email}`}>
                    Entrar em contato
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                  <Button asChild variant="outline" className="btn-secondary-institutional w-full sm:w-auto rounded-xl">
                  <Link href="#contato">Falar com a equipe</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
