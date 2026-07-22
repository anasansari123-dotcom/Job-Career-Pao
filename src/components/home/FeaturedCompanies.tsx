"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { companies } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function FeaturedCompanies() {
  return (
    <section className="section-glow-cyan relative overflow-hidden bg-brand-gray py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Trusted Employers"
          title="Featured Companies"
          description="Explore openings at India's most sought-after employers hiring right now."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {companies.map((company, i) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group glass-strong rounded-2xl p-5 transition-shadow hover:shadow-card"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold text-white shadow-soft"
                style={{ background: company.color }}
              >
                {company.logo}
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-brand-dark">
                {company.name}
              </h3>
              <p className="mt-1 text-xs text-brand-slate">{company.industry}</p>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="font-medium text-brand-cyan">{company.openJobs} open jobs</span>
                <span className="flex items-center gap-1 text-brand-slate">
                  <Star className="h-3.5 w-3.5 fill-brand-orange text-brand-orange" />
                  {company.rating}
                </span>
              </div>
              <Link
                href={`/companies/${company.id}`}
                className="mt-4 flex w-full items-center justify-center gap-1 rounded-xl border border-slate-200 py-2 text-xs font-semibold text-brand-blue transition group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white"
              >
                View Company
                <ArrowRight className="h-3 w-3" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/companies" variant="outline">
            View All Companies
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}