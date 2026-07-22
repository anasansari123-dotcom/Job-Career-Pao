import type { Metadata } from "next";
import Link from "next/link";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { companies } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Companies",
  description: "Explore verified companies hiring on JobCareerPao.",
};

export default function CompaniesPage() {
  return (
    <div className="bg-brand-gray min-h-screen">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-brand-dark sm:text-4xl">
            Featured Companies
          </h1>
          <p className="mt-2 max-w-2xl text-brand-slate">
            Browse verified employers across technology, consulting, and more.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company) => (
            <article
              key={company.id}
              className="glass-strong flex flex-col rounded-2xl p-6 hover:shadow-card transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl text-base font-bold text-white"
                  style={{ background: company.color }}
                >
                  {company.logo}
                </div>
                <div>
                  <h2 className="font-display text-lg font-semibold text-brand-dark">
                    {company.name}
                  </h2>
                  <p className="text-sm text-brand-slate">{company.industry}</p>
                  <p className="mt-1 inline-flex items-center gap-1 text-xs text-brand-slate">
                    <MapPin className="h-3 w-3 text-brand-cyan" />
                    {company.location}
                  </p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm text-slate-600">{company.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-brand-cyan">
                  {company.openJobs} open jobs
                </span>
                <span className="inline-flex items-center gap-1 text-sm text-brand-slate">
                  <Star className="h-4 w-4 fill-brand-orange text-brand-orange" />
                  {company.rating}
                </span>
              </div>
              <Link
                href={`/companies/${company.id}`}
                className="mt-5 inline-flex items-center justify-center gap-1 rounded-xl border border-slate-200 py-2.5 text-sm font-semibold text-brand-blue transition hover:border-brand-blue hover:bg-brand-blue hover:text-white"
              >
                View Company
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/recruiter/signup" variant="outline">
            Is your company hiring? Register now
          </Button>
        </div>
      </div>
    </div>
  );
}