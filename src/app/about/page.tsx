import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about JobCareerPao — India's premium job portal.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="border-b border-slate-100 bg-brand-gray">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-brand-dark">About JobCareerPao</h1>
          <p className="mt-4 text-lg text-brand-slate">Unlock Your Potential</p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 space-y-6 text-slate-700 leading-relaxed">
        <p>
          JobCareerPao is a modern job portal built for Indian professionals and recruiters who
          expect a premium, trustworthy hiring experience. We connect ambitious candidates with
          verified companies across technology, consulting, product, and more.
        </p>
        <p>
          Our platform combines clean design, powerful search, membership plans that unlock career
          tools, and a dedicated recruiter portal — so both sides of hiring move faster with
          confidence.
        </p>
        <div className="rounded-2xl bg-brand-gray p-6">
          <h2 className="font-display text-xl font-bold text-brand-dark">Our mission</h2>
          <p className="mt-2 text-brand-slate">
            To help every professional find meaningful work and every company discover exceptional
            talent — with transparency, speed, and care.
          </p>
        </div>
        <Button href="/auth/signup">Join JobCareerPao</Button>
      </div>
    </div>
  );
}