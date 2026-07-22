"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Search, MapPin, Briefcase, SlidersHorizontal } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const experienceOptions = ["Fresher", "1-3 years", "3-5 years", "5-8 years", "8+ years"];
const salaryOptions = ["0-3 LPA", "3-6 LPA", "6-10 LPA", "10-20 LPA", "20+ LPA"];
const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"];
const workModes = ["Remote", "Hybrid", "On-site"];
const industries = ["Technology", "IT Services", "Consulting", "E-Commerce", "Finance"];

export function JobSearch() {
  const router = useRouter();
  const [showFilters, setShowFilters] = useState(false);
  const [query, setQuery] = useState({ title: "", skills: "", location: "", experience: "" });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.title) params.set("q", query.title);
    if (query.location) params.set("location", query.location);
    if (query.experience) params.set("exp", query.experience);
    if (query.skills) params.set("skills", query.skills);
    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Smart Search"
          title="Find the Perfect Role"
          description="Search by title, skills, location, and experience — then refine with powerful filters."
        />

        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong relative mx-auto mt-10 max-w-5xl rounded-2xl p-4 sm:p-6"
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-slate" />
              <input
                type="text"
                placeholder="Job title"
                value={query.title}
                onChange={(e) => setQuery({ ...query, title: e.target.value })}
                className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm placeholder:text-slate-400"
              />
            </div>
            <div className="relative">
              <Briefcase className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-slate" />
              <input
                type="text"
                placeholder="Skills"
                value={query.skills}
                onChange={(e) => setQuery({ ...query, skills: e.target.value })}
                className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm placeholder:text-slate-400"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-slate" />
              <input
                type="text"
                placeholder="Location"
                value={query.location}
                onChange={(e) => setQuery({ ...query, location: e.target.value })}
                className="h-12 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-3 text-sm placeholder:text-slate-400"
              />
            </div>
            <select
              value={query.experience}
              onChange={(e) => setQuery({ ...query, experience: e.target.value })}
              className="h-12 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-700"
            >
              <option value="">Experience</option>
              {experienceOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue hover:text-brand-cyan"
            >
              <SlidersHorizontal className="h-4 w-4" />
              {showFilters ? "Hide filters" : "More filters"}
            </button>
            <Button type="submit" size="md">
              <Search className="h-4 w-4" />
              Search Jobs
            </Button>
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="mt-5 grid gap-4 border-t border-slate-100 pt-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              <FilterGroup label="Salary" options={salaryOptions} />
              <FilterGroup label="Job Type" options={jobTypes} />
              <FilterGroup label="Work Mode" options={workModes} />
              <FilterGroup label="Industry" options={industries} />
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function FilterGroup({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-brand-slate">
        {label}
      </label>
      <select className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm">
        <option value="">Any</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}