"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const categoryColors: Record<string, string> = {
  "Career Tips": "bg-brand-blue/10 text-brand-blue",
  "Resume Tips": "bg-brand-cyan/10 text-brand-cyan",
  "Interview Preparation": "bg-brand-orange/10 text-brand-orange",
  "Salary Guide": "bg-emerald-50 text-emerald-700",
  "Industry News": "bg-slate-100 text-slate-700",
};

export function BlogSection() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="relative overflow-hidden bg-brand-gray py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Career Insights"
          title="From Our Blog"
          description="Tips, guides, and industry news to help you grow faster."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-strong group flex flex-col overflow-hidden rounded-2xl"
            >
              <div className="relative h-40 bg-gradient-to-br from-brand-blue via-brand-cyan to-brand-orange opacity-90">
                <div className="absolute inset-0 flex items-end p-5">
                  <span
                    className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold ${
                      categoryColors[post.category] || "bg-white/90 text-brand-blue"
                    }`}
                  >
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-3 text-xs text-brand-slate">
                  <span>{post.date}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-base font-semibold text-brand-dark group-hover:text-brand-blue transition">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="mt-2 flex-1 text-sm text-brand-slate">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-cyan hover:text-brand-blue"
                >
                  Read more
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/blog" variant="outline">
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}