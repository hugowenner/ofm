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
    <section id="vocacoes" className="section-padding bg-[var(--nature-musgo)] text-[var(--earth-areia)]">
      <div className="container-franciscan" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--earth-areia)] mb-4">
              {vocationsContent.title}
            </h2>
            <p className="text-lg text-[var(--special-dourado)] font-medium mb-6">
              {vocationsContent.subtitle}
            </p>
            <p className="text-lg text-[var(--earth-areia)]/80 leading-relaxed mb-10">
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
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--special-dourado)] text-[var(--neutral-grafite)] flex items-center justify-center font-serif">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[var(--earth-areia)] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[var(--earth-areia)]/70 leading-relaxed">
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
            <div className="bg-[var(--special-branco)] rounded-2xl p-8 text-[var(--neutral-grafite)]">
              <h3 className="font-serif text-2xl mb-4">
                {vocationsContent.contact.title}
              </h3>
              <p className="text-[var(--neutral-cinza)] mb-8 leading-relaxed">
                {vocationsContent.contact.description}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-[var(--earth-areia)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--nature-folhagem)]/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[var(--nature-folhagem)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--neutral-pedra)]">E-mail</p>
                    <a
                      href={`mailto:${vocationsContent.contact.email}`}
                      className="text-[var(--nature-folhagem)] hover:underline"
                    >
                      {vocationsContent.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-[var(--earth-areia)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--nature-folhagem)]/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[var(--nature-folhagem)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--neutral-pedra)]">Telefone</p>
                    <a
                      href={`tel:${vocationsContent.contact.phone.replace(/\D/g, "")}`}
                      className="text-[var(--nature-folhagem)] hover:underline"
                    >
                      {vocationsContent.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-[var(--earth-areia)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--nature-folhagem)]/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[var(--nature-folhagem)]" />
                  </div>
                  <div>
                    <p className="text-sm text-[var(--neutral-pedra)]">Horário</p>
                    <p className="text-[var(--neutral-cinza)]">
                      {vocationsContent.contact.schedule}
                    </p>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="w-full bg-[var(--nature-folhagem)] hover:bg-[var(--nature-musgo)] text-[var(--special-branco)]"
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
