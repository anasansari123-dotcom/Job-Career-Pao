import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers at JobCareerPao",
};

export default function CareersPage() {
  const openings = [
    { title: "Senior Frontend Engineer", loc: "Bengaluru · Hybrid" },
    { title: "Product Designer", loc: "Remote · India" },
    { title: "Growth Marketing Lead", loc: "Mumbai · Hybrid" },
  ];

  return (
    <div className="bg-white">
      <div className="border-b border-slate-100 bg-brand-gray">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-brand-dark">Careers</h1>
          <p className="mt-4 text-brand-slate">
            Help us build India&apos;s most trusted job portal. Unlock Your Potential — with us.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 space-y-4">
        {openings.map((o) => (
          <div
            key={o.title}
            className="flex flex-col gap-3 rounded-2xl border border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <h2 className="font-display font-semibold text-brand-dark">{o.title}</h2>
              <p className="text-sm text-brand-slate">{o.loc}</p>
            </div>
            <Button href="/auth/signup" size="sm" variant="outline">
              Apply
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}