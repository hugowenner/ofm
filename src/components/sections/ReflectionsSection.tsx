"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { reflectionsContent } from "@/content/mockData";

export function ReflectionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section id="reflexoes" className="section-padding bg-[var(--earth-areia)]">
      <div className="container-franciscan" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-[var(--neutral-grafite)] mb-4">
            {reflectionsContent.title}
          </h2>
          <p className="text-lg text-[var(--nature-folhagem)] font-medium mb-6">
            {reflectionsContent.subtitle}
          </p>
          <p className="text-lg text-[var(--neutral-cinza)] leading-relaxed">
            {reflectionsContent.description}
          </p>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reflectionsContent.posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col"
            >
              {/* Post Card */}
              <div className="flex-1 p-6 rounded-2xl bg-[var(--special-branco)] border border-[var(--earth-barro)] hover:border-[var(--nature-folhagem)]/50 transition-colors">
                {/* Category */}
                <span className="inline-block px-3 py-1 text-xs font-medium text-[var(--nature-folhagem)] bg-[var(--nature-folhagem)]/10 rounded-full mb-4">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-serif text-[var(--neutral-grafite)] mb-3 group-hover:text-[var(--nature-folhagem)] transition-colors">
                  <Link href="#" className="hover:underline">
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-[var(--neutral-cinza)] leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--earth-barro)]">
                  <span className="text-sm text-[var(--neutral-pedra)]">
                    {post.author}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[var(--neutral-pedra)]">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button
            asChild
            variant="outline"
            className="border-[var(--nature-folhagem)] text-[var(--nature-folhagem)] hover:bg-[var(--nature-folhagem)] hover:text-[var(--special-branco)]"
          >
            <Link href="#reflexoes">
              Ver todas as reflexões
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
