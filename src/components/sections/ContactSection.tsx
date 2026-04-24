"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { contactContent, vocationsContent } from "@/content/mockData";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="fale-conosco" className="section-shell-alt">
      <div className="container-franciscan" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <SectionHeader
            kicker="Conexão"
            title="Fale Conosco"
            subtitle="Estamos por perto. Pode escrever com calma."
            description="Quer conversar, tirar uma dúvida ou partilhar um pedido? Nossa equipe recebe sua mensagem com atenção e simplicidade."
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-4">
              <div className="rounded-2xl border border-subtle bg-surface p-5 shadow-[0_16px_34px_-30px_rgba(62,44,28,0.2)]">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-subtle bg-background text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-2 leading-tight">
                      Endereço
                    </h3>
                    <p className="text-base font-medium text-secondary leading-relaxed">
                      {contactContent.address.street}
                      <br />
                      {contactContent.address.neighborhood}, {contactContent.address.city} - {contactContent.address.state}
                      <br />
                      CEP: {contactContent.address.zip}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-subtle bg-surface p-5 shadow-[0_16px_34px_-30px_rgba(62,44,28,0.2)]">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-subtle bg-background text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">
                      Telefone
                    </h3>
                    <p className="text-base font-medium text-secondary">
                      <a
                        href={`tel:${contactContent.phones[0].number.replace(/\D/g, "")}`}
                        className="font-semibold text-primary hover:text-secondary transition-colors"
                      >
                        {contactContent.phones[0].number}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-subtle bg-surface p-5 shadow-[0_16px_34px_-30px_rgba(62,44,28,0.2)]">
                <div className="flex items-start gap-4">
                  <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-subtle bg-background text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-2">
                      E-mail
                    </h3>
                    <a
                      href={`mailto:${contactContent.email}`}
                      className="text-base font-semibold text-primary hover:text-secondary transition-colors"
                    >
                      {contactContent.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-3xl border border-subtle bg-surface shadow-[0_18px_40px_-34px_rgba(62,44,28,0.2)] overflow-hidden">
              <div className="px-5 py-4 border-b border-subtle bg-background">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-primary">
                  Mapa da localização
                </h3>
              </div>
              <div className="aspect-4/3 w-full bg-background">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4449.791743904352!2d-43.96313472401499!3d-19.911487737733765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6974859c67b39%3A0x236711d2c814f9a3!2sR.%20Sabin%C3%B3polis%2C%2050A%20-%20Carlos%20Prates%2C%20Belo%20Horizonte%20-%20MG%2C%2030710-340!5e1!3m2!1spt-BR!2sbr!4v1777040801343!5m2!1spt-BR!2sbr"
                  title="Mapa da Província Santa Cruz em Belo Horizonte"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          id="vocacao"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="mt-8 rounded-2xl border border-subtle bg-surface p-6 md:p-7"
        >
          <p className="text-[11px] uppercase tracking-[0.12em] font-semibold text-secondary mb-2">
            Interesse vocacional
          </p>
          <h3 className="font-serif text-2xl md:text-[1.8rem] font-bold text-primary mb-3 leading-tight">
            Se essa pergunta mora no seu coração, vale conversar
          </h3>
          <p className="text-base text-secondary leading-relaxed max-w-4xl mb-4">
            A caminhada vocacional acontece com tempo, escuta e verdade: Discernimento → Postulantado → Noviciado → Profissão.
          </p>
          <Button asChild className="btn-institutional">
            <Link href={`mailto:${vocationsContent.contact.email}`}>
              Falar sobre vocação
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
