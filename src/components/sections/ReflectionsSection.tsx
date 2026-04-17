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
    <section id="reflexoes" className="section-padding bg-[var(--franciscan-parchment)]">
      <div className="container-franciscan" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[var(--franciscan-habit)] mb-4">
            {reflectionsContent.title}
          </h2>
          <p className="text-xl font-bold text-[var(--franciscan-clay)] mb-6">
            {reflectionsContent.subtitle}
          </p>
          <p className="text-lg font-medium text-[var(--franciscan-earth)] leading-relaxed">
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
              <div className="flex-1 p-6 rounded-2xl bg-[var(--franciscan-cream)] border-2 border-[var(--franciscan-sand)] hover:border-[var(--franciscan-habit)] hover:shadow-lg transition-all">
                {/* Category */}
                <span className="inline-block px-4 py-1 text-sm font-bold text-[var(--franciscan-cream)] bg-[var(--franciscan-habit)] rounded-full mb-4">
                  {post.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-[var(--franciscan-habit)] mb-3 group-hover:text-[var(--franciscan-clay)] transition-colors">
                  <Link href="#" className="hover:underline">
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-base font-medium text-[var(--franciscan-earth)] leading-relaxed mb-4 flex-1">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between pt-4 border-t-2 border-[var(--franciscan-sand)]">
                  <span className="text-sm font-bold text-[var(--franciscan-habit)]">
                    {post.author}
                  </span>
                  <div className="flex items-center gap-1 text-sm font-medium text-[var(--franciscan-stone)]">
                    <Calendar className="w-4 h-4" />
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
            size="lg"
            className="bg-[var(--franciscan-habit)] hover:bg-[var(--franciscan-earth)] text-[var(--franciscan-cream)] font-bold"
          >
            <Link href="#reflexoes">
              Ver todas as reflexões
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
