"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Clock } from "lucide-react";
import { vocationsContent } from "@/content/mockData";

export function VocationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vocacoes" className="section-padding bg-[var(--franciscan-habit)] text-[var(--franciscan-cream)]">
      <div className="container-franciscan" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--franciscan-cream)] mb-4">
              {vocationsContent.title}
            </h2>
            <p className="text-xl font-bold text-[var(--franciscan-cord)] mb-6">
              {vocationsContent.subtitle}
            </p>
            <p className="text-lg font-medium text-[var(--franciscan-sand)] leading-relaxed mb-10">
              {vocationsContent.description}
            </p>

            {/* Steps */}
            <div className="space-y-6">
              {vocationsContent.steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[var(--franciscan-cord)] text-[var(--franciscan-habit)] flex items-center justify-center font-serif font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[var(--franciscan-cream)] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-base font-medium text-[var(--franciscan-sand)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-8"
          >
            <div className="bg-[var(--franciscan-cream)] rounded-2xl p-8 text-[var(--franciscan-habit)]">
              <h3 className="font-serif text-2xl font-bold mb-4">
                {vocationsContent.contact.title}
              </h3>
              <p className="text-base font-medium text-[var(--franciscan-earth)] mb-8 leading-relaxed">
                {vocationsContent.contact.description}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-[var(--franciscan-sand)]/30">
                  <div className="w-12 h-12 rounded-lg bg-[var(--franciscan-habit)] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[var(--franciscan-cream)]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--franciscan-stone)]">E-mail</p>
                    <a
                      href={`mailto:${vocationsContent.contact.email}`}
                      className="font-bold text-[var(--franciscan-habit)] hover:underline"
                    >
                      {vocationsContent.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-[var(--franciscan-sand)]/30">
                  <div className="w-12 h-12 rounded-lg bg-[var(--franciscan-habit)] flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[var(--franciscan-cream)]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--franciscan-stone)]">Telefone</p>
                    <a
                      href={`tel:${vocationsContent.contact.phone.replace(/\D/g, "")}`}
                      className="font-bold text-[var(--franciscan-habit)] hover:underline"
                    >
                      {vocationsContent.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-[var(--franciscan-sand)]/30">
                  <div className="w-12 h-12 rounded-lg bg-[var(--franciscan-habit)] flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[var(--franciscan-cream)]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--franciscan-stone)]">Horário</p>
                    <p className="font-medium text-[var(--franciscan-earth)]">
                      {vocationsContent.contact.schedule}
                    </p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="w-full bg-[var(--franciscan-habit)] hover:bg-[var(--franciscan-earth)] text-[var(--franciscan-cream)] font-bold text-lg"
              >
                <Link href={`mailto:${vocationsContent.contact.email}`}>
                  Entrar em contato
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
