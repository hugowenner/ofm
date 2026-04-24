"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { reflectionsContent } from "@/content/mockData";
import { SectionHeader } from "@/components/ui/section-header";

export function ReflectionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [featuredPost, ...secondaryPosts] = reflectionsContent.posts;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section id="reflexoes" className="section-shell-alt">
      <div className="container-franciscan" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionHeader
            kicker="Publicações"
            title={reflectionsContent.title}
            subtitle={reflectionsContent.subtitle}
            description={reflectionsContent.description}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mb-12">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 card-premium"
          >
            <span className="inline-flex px-3 py-1 rounded-full text-xs uppercase tracking-[0.14em] font-semibold text-franciscan-cream bg-franciscan-habit mb-5">
              {featuredPost.category}
            </span>

            <h3 className="text-2xl md:text-3xl font-serif font-bold text-franciscan-habit mb-4 leading-tight">
              <Link href="#" className="link-editorial-title hover:text-franciscan-clay">
                {featuredPost.title}
              </Link>
            </h3>

            <p className="text-base md:text-lg font-medium text-franciscan-earth leading-relaxed mb-8 max-w-[58ch]">
              {featuredPost.excerpt}
            </p>

            <div className="pt-5 border-t border-[color-mix(in_srgb,var(--franciscan-sand)_68%,white_32%)] flex flex-wrap items-center justify-between gap-3">
              <span className="text-sm font-semibold text-franciscan-habit">{featuredPost.author}</span>
              <div className="flex items-center gap-1 text-sm font-medium text-franciscan-stone">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(featuredPost.date)}</span>
              </div>
            </div>
          </motion.article>

          <div className="lg:col-span-5 flex flex-col gap-5">
            {secondaryPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                className="card-editorial group"
              >
                <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-franciscan-clay mb-2">
                  {post.category}
                </p>
                <h3 className="text-xl font-serif font-bold text-franciscan-habit mb-2 leading-tight">
                  <Link href="#" className="link-editorial-title group-hover:text-franciscan-clay">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm md:text-base font-medium text-franciscan-earth leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs md:text-sm text-franciscan-stone">
                  <span className="font-semibold text-franciscan-habit">{post.author}</span>
                  <span>{formatDate(post.date)}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button asChild size="lg" className="btn-institutional rounded-2xl px-8">
            <Link href="#reflexoes">
              Ver todas as reflexões
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
