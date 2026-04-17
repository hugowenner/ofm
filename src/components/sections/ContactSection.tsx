"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { contactContent } from "@/content/mockData";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="section-padding bg-[var(--special-branco)]">
      <div className="container-franciscan" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--neutral-grafite)] mb-4">
            {contactContent.title}
          </h2>
          <p className="text-lg text-[var(--nature-folhagem)] font-medium mb-6">
            {contactContent.subtitle}
          </p>
          <p className="text-lg text-[var(--neutral-cinza)] leading-relaxed">
            {contactContent.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4 p-6 rounded-xl bg-[var(--earth-areia)]">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--nature-folhagem)]/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[var(--nature-folhagem)]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[var(--neutral-grafite)] mb-2">
                    Endereço
                  </h3>
                  <p className="text-[var(--neutral-cinza)] leading-relaxed">
                    {contactContent.address.street}
                    <br />
                    {contactContent.address.neighborhood}
                    <br />
                    {contactContent.address.city} - {contactContent.address.state}
                    <br />
                    CEP: {contactContent.address.zip}
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex gap-4 p-6 rounded-xl bg-[var(--earth-areia)]">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--nature-folhagem)]/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[var(--nature-folhagem)]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[var(--neutral-grafite)] mb-2">
                    Telefones
                  </h3>
                  <div className="space-y-1">
                    {contactContent.phones.map((phone) => (
                      <p key={phone.label} className="text-[var(--neutral-cinza)]">
                        <span className="text-[var(--neutral-pedra)]">{phone.label}:</span>{" "}
                        <a
                          href={`tel:${phone.number.replace(/\D/g, "")}`}
                          className="hover:text-[var(--nature-folhagem)] transition-colors"
                        >
                          {phone.number}
                        </a>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 p-6 rounded-xl bg-[var(--earth-areia)]">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--nature-folhagem)]/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[var(--nature-folhagem)]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[var(--neutral-grafite)] mb-2">
                    E-mail
                  </h3>
                  <a
                    href={`mailto:${contactContent.email}`}
                    className="text-[var(--nature-folhagem)] hover:underline"
                  >
                    {contactContent.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4 p-6 rounded-xl bg-[var(--earth-areia)]">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--nature-folhagem)]/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[var(--nature-folhagem)]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-[var(--neutral-grafite)] mb-2">
                    Horário de Atendimento
                  </h3>
                  <p className="text-[var(--neutral-cinza)]">
                    Segunda a sexta: {contactContent.hours.weekdays}
                    <br />
                    Sábados: {contactContent.hours.weekend}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 rounded-2xl bg-[var(--earth-areia)] border border-[var(--earth-barro)]">
              <h3 className="font-serif text-2xl text-[var(--neutral-grafite)] mb-6">
                Envie uma mensagem
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[var(--neutral-cinza)] mb-1"
                    >
                      Nome
                    </label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      className="bg-[var(--special-branco)] border-[var(--earth-barro)] focus:border-[var(--nature-folhagem)]"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[var(--neutral-cinza)] mb-1"
                    >
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="bg-[var(--special-branco)] border-[var(--earth-barro)] focus:border-[var(--nature-folhagem)]"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[var(--neutral-cinza)] mb-1"
                  >
                    Assunto
                  </label>
                  <Input
                    id="subject"
                    placeholder="Como podemos ajudar?"
                    className="bg-[var(--special-branco)] border-[var(--earth-barro)] focus:border-[var(--nature-folhagem)]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[var(--neutral-cinza)] mb-1"
                  >
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Escreva sua mensagem..."
                    rows={5}
                    className="bg-[var(--special-branco)] border-[var(--earth-barro)] focus:border-[var(--nature-folhagem)] resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[var(--nature-folhagem)] hover:bg-[var(--nature-musgo)] text-[var(--special-branco)]"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensagem
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
