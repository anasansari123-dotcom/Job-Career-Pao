"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SuccessStories() {
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Success Stories"
          title="What Candidates Say"
          description="Real professionals who unlocked their potential with JobCareerPao."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-strong relative rounded-2xl p-6 sm:p-8"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-brand-cyan/20" />
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-brand-cyan font-display text-sm font-bold text-white shadow-soft">
                  {t.avatar}
                </div>
                <div>
                  <cite className="not-italic font-display text-base font-semibold text-brand-dark">
                    {t.name}
                  </cite>
                  <p className="text-sm text-brand-slate">{t.role}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                &ldquo;{t.quote}&rdquo;
              </p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}