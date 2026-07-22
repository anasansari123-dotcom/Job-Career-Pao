"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Megaphone,
  Users,
  UserSearch,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const features = [
  { icon: Building2, title: "Create Company", desc: "Set up your branded company profile in minutes." },
  { icon: Megaphone, title: "Post Jobs", desc: "Publish openings and reach verified candidates fast." },
  { icon: Users, title: "Manage Applicants", desc: "Track pipelines with an intuitive hiring board." },
  { icon: UserSearch, title: "View Candidates", desc: "Discover talent matched to your requirements." },
  { icon: CalendarCheck, title: "Schedule Interviews", desc: "Coordinate interviews without leaving the portal." },
];

export function CompanyRegistration() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="For Recruiters"
              title="Hire Top Talent Faster"
              description="A dedicated recruiter portal to create your company, post jobs, manage applicants, and schedule interviews — all in one place."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/recruiter/signup" size="lg">
                Register Company
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/auth/recruiter/login" variant="outline" size="lg">
                Recruiter Login
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={cnCard(i === 0)}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-brand-cyan text-white">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-display text-sm font-semibold text-brand-dark">
                  {f.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-brand-slate">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function cnCard(wide: boolean) {
  return `glass-strong rounded-2xl p-5 hover:shadow-card transition-shadow ${
    wide ? "sm:col-span-2 sm:flex sm:items-center sm:gap-4" : ""
  }`;
}