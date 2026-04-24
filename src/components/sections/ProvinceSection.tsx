"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Users, ScrollText, HeartHandshake, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const provinceCards = [
  {
    title: "Quem somos",
    description:
      "Uma fraternidade de irmãos consagrados, reunidos pela simplicidade, pela vida em comum e pelo serviço.",
    icon: Users,
  },
  {
    title: "Nossa história",
    description:
      "Uma caminhada que começou com frades vindos da Holanda, passou por Manaus, Rio de Janeiro e Minas, e ganhou autonomia como Província Santa Cruz.",
    icon: ScrollText,
  },
  {
    title: "Espiritualidade",
    description:
      "Uma fé vivida com os pés no chão: oração, pobreza, alegria, cuidado com a criação e proximidade com quem precisa.",
    icon: HeartHandshake,
  },
  {
    title: "Onde estamos",
    description:
      "Presença franciscana em comunidades, paróquias, escolas e projetos sociais, especialmente em Minas Gerais e no Sul da Bahia.",
    icon: MapPin,
  },
];

export function ProvinceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="provincia-santa-cruz" className="section-shell-alt">
      <div className="container-franciscan" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <SectionHeader
            kicker="A Província Santa Cruz"
            title="Nossa presença franciscana"
            subtitle="Uma presença franciscana com raízes, fé e missão"
            description="A Província Santa Cruz reúne frades que vivem o Evangelho no caminho de São Francisco de Assis. Nascida de uma missão iniciada por frades holandeses, criou raízes no Brasil e hoje atua em Minas Gerais e no Sul da Bahia por meio da vida fraterna, da oração, da educação, da pastoral e do serviço social."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {provinceCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="rounded-2xl border border-subtle bg-surface p-5 md:p-6 shadow-[0_14px_30px_-30px_rgba(62,44,28,0.22)]"
              >
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-soft bg-background text-primary">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-lg md:text-xl font-serif font-bold text-primary mb-2">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-secondary leading-relaxed">
                  {card.description}
                </p>
              </article>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="mt-10 text-center"
        >
          <Button asChild className="btn-institutional">
            <Link href="#provincia-santa-cruz">Conheça a Província</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
