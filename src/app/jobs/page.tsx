"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, IndianRupee, Search, Filter } from "lucide-react";
import { jobs } from "@/lib/data";
import { formatSalary } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function JobsPage() {
  const [q, setQ] = useState("");
  const [location, setLocation] = useState("");
  const [mode, setMode] = useState("");

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const matchQ =
        !q ||
        job.title.toLowerCase().includes(q.toLowerCase()) ||
        job.company.toLowerCase().includes(q.toLowerCase()) ||
        job.skills.some((s) => s.toLowerCase().includes(q.toLowerCase()));
      const matchLoc =
        !location || job.location.toLowerCase().includes(location.toLowerCase());
      const matchMode = !mode || job.mode === mode;
      return matchQ && matchLoc && matchMode;
    });
  }, [q, location, mode]);

  return (
    <div className="bg-brand-gray min-h-screen">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-brand-dark sm:text-4xl">
            Browse Jobs
          </h1>
          <p className="mt-2 text-brand-slate">
            Discover verified openings from India&apos;s top companies.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-slate" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by title, company, or skill"
                className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm"
              />
            </div>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
              className="h-12 rounded-xl border border-slate-200 bg-white px-4 text-sm"
            />
            <select
              value={mode}
              onChange={(e) => setMode(e.target.value)}
              className="h-12 rounded-xl border border-slate-200 bg-white px-3 text-sm"
            >
              <option value="">Work mode</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>On-site</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-brand-slate">
            <span className="font-semibold text-brand-blue">{filtered.length}</span> jobs found
          </p>
          <span className="inline-flex items-center gap-1.5 text-xs text-brand-slate">
            <Filter className="h-3.5 w-3.5" />
            Sorted by relevance
          </span>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {filtered.map((job, i) => (
            <motion.article
              key={job.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-strong rounded-2xl p-6 hover:shadow-card transition-shadow"
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
                    <h2 className="font-display text-lg font-semibold text-brand-dark">
                      {job.title}
                    </h2>
                    <p className="text-sm text-brand-slate">{job.company}</p>
                  </div>
                </div>
                <span className="rounded-lg bg-brand-cyan/10 px-2 py-1 text-[10px] font-semibold text-brand-cyan">
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
                  <span key={s} className="rounded-lg bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-medium text-brand-slate">{job.type}</span>
                <Button href={`/auth/signup?redirect=/payment&job=${job.id}`} size="sm" variant="orange">
                  Apply Now
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white py-16 text-center">
            <p className="font-display text-lg font-semibold text-brand-dark">No jobs match your filters</p>
            <p className="mt-2 text-sm text-brand-slate">Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}