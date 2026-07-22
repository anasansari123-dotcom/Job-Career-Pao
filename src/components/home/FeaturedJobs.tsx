"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, IndianRupee, ArrowRight } from "lucide-react";
import { jobs } from "@/lib/data";
import { formatSalary } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function FeaturedJobs() {
  return (
    <section className="section-glow-orange relative overflow-hidden bg-brand-gray py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Hot Openings"
          title="Featured Jobs"
          description="Hand-picked roles from verified companies hiring across India."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, i) => (
            <motion.article
              key={job.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="glass-strong flex flex-col rounded-2xl p-6 transition-shadow hover:shadow-card"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-sm font-bold text-white"
                    style={{ background: job.color }}
                  >
                    {job.logo}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-brand-dark leading-snug">
                      {job.title}
                    </h3>
                    <p className="text-sm text-brand-slate">{job.company}</p>
                  </div>
                </div>
                <span className="shrink-0 rounded-lg bg-brand-cyan/10 px-2 py-1 text-[10px] font-semibold text-brand-cyan">
                  {job.mode}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-brand-slate">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5 text-brand-cyan" />
                  {job.location}
                </span>
                <span className="inline-flex items-center gap-1">
                  <IndianRupee className="h-3.5 w-3.5 text-brand-orange" />
                  {formatSalary(job.salary.min, job.salary.max)}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Briefcase className="h-3.5 w-3.5 text-brand-blue" />
                  {job.experience}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {job.posted}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {job.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                <span className="text-xs font-medium text-brand-slate">{job.type}</span>
                <Button href={`/auth/signup?redirect=/payment&job=${job.id}`} size="sm" variant="orange">
                  Apply
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/jobs" variant="outline">
            Browse All Jobs
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export function JobCardLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href}>{children}</Link>;
}