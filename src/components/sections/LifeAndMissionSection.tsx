"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { lifeAndMissionContent } from "@/content/mockData";

export function LifeAndMissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section id="vida-e-missao" className="section-shell-alt">
      <div className="container-franciscan" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-14"
        >
          <SectionHeader
            kicker="Acontece"
            title={lifeAndMissionContent.title}
            subtitle={lifeAndMissionContent.subtitle}
            description={lifeAndMissionContent.description}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-7">
          {lifeAndMissionContent.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full bg-surface border-subtle shadow-[0_14px_34px_-30px_rgba(62,44,28,0.2)]">
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center rounded-full border border-[#d7c6b3] bg-[#f9f4ee] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5A3E2B]">
                      {item.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-secondary">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(item.date)}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-serif font-bold leading-tight text-primary">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm md:text-base leading-relaxed text-secondary">
                    {item.description}
                  </p>
                </CardContent>

                <CardFooter className="mt-auto">
                  <Button asChild variant="outline" className="w-full">
                    <Link href={item.href}>
                      Ler mais
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
